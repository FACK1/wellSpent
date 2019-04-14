require('env2')('.env');
const Airtable = require('airtable');

exports.methodology = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(
    process.env.DB_NAME,
  );
  base('methodology')
    .select({
      view: 'Grid view',
    })
    .eachPage(
      (records, fetchNextPage) => {
        const result = records.map(record => record.fields);
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
