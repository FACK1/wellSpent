require('env2')('.env');
const Airtable = require('airtable');

exports.getBrands = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);
  base('Brands')
    .select({
      view: 'Grid view',
    })
    .eachPage(
      (records, fetchNextPage) => {
        const result = records.map(record => record.get('Name'));
        fetchNextPage();
        res.json(result);
      },
      (err) => {
        if (err) {
          console.error(err);
        }
      },
    );
};
