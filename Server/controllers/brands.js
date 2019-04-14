require('env2')('.env');
const Airtable = require('airtable');

exports.getBrands = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);

  base('Brands')
    .select({
      view: 'API Response',
    })
    .eachPage(
      (records, fetchNextPage) => {
        const result = records.map(record => ({
          BrandName: record.get('BrandName'),
          Explanation: record.get('Explanation'),
          Image: record.get('Image'),
          LaborScore: record.get('LaborScore'),
          EnvironmentScore: record.get('EnvironmentScore'),
          OverallScore: record.get('OverallScore'),
        }));
        fetchNextPage();
        const colourMap = {};
        base('Score Colour')
          .select({
            view: 'Grid view',
          })
          .eachPage(
            (Colorrecords, ColorfetchNextPage) => {
              const x = Colorrecords.map(
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
      (err) => {
        if (err) {
          console.error(err);
        }
      },
    );
};
