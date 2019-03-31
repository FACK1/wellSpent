const Airtable = require('airtable');
require('env2')('.env');

exports.getfeedback = (req, res) => {
  const { name } = req.params;
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);
  base('Feedback')
    .select({
      view: 'Grid view',
      filterByFormula: `{Brands}="${name}"`,
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
