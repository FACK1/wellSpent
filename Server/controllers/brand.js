const Airtable = require('airtable');
require('env2')('.env');

exports.getBrand = (req, res) => {
  const { name } = req.params;
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);
  base('Brands')
    .select({
      view: 'API Response',
      filterByFormula: `{BrandName}="${name}"`,
    })
    .eachPage(
      (records, fetchNextPage) => {
        const result = records.map(record => record.fields);

        fetchNextPage();
        const colourMap = {};
        base('Score Colour')
          .select({
            view: 'Grid view',
          })
          .eachPage(
            (Colorrecords, ColorfetchNextPage) => {
              Colorrecords.map(
                record => (colourMap[record.fields.Name] = record.fields['Colour Hex']),
              );
              ColorfetchNextPage();
              res.json({ result, colourMap });
            },
            (error) => {
              console.log(error);
            },
          );
      },
      (error) => {
        console.log(error);
      },
    );
};
