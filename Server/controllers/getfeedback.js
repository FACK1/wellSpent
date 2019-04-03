const Airtable = require('airtable');
require('env2')('.env');

exports.getfeedback = (req, res) => {
  const { name } = req.params;
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);
  base('Feedback')
    .select({
      maxRecords: 3,
      view: 'Grid view',
      filterByFormula: `{Brands}="${name}"`,
    })
    .eachPage(
      (records, fetchNextPage) => {
        const keys = records.map(record => record.fields);
        const values = records.map(record => (record.id));
        const result = values.map((i, k) => ({ [i]: keys[k] }));

        fetchNextPage();
        res.json(result);
      },
      (error) => {
        console.log(error);
      },
    );
};
