const Airtable = require('airtable');
require('env2')('.env');

exports.getBrand = (req, res) => {
  const { name } = req.params;
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);
  base('Brands')
    .select({
      view: 'API Response',
      filterByFormula: `{Name}= "${name}"`,
    })
    .eachPage(
      (records, fetchNextPage) => {
        const result = records.map(record => record.fields);

        fetchNextPage();
        res.json(result);
      },
      (error) => {
        console.log(error);
      },
    );
};
