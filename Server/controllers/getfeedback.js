const Airtable = require('airtable');

exports.getfeedback = (req, res) => {
  const { name } = req.params;
  const base = new Airtable({ apiKey: 'keyYymTkZ8tlYgUmY' }).base('appNifWvpBhZkgaLk');
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
