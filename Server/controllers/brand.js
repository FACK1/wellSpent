const Airtable = require('airtable');

exports.getBrand = (req, res) => {
  const { name } = req.params;
  const base = new Airtable({ apiKey: 'keyYymTkZ8tlYgUmY' }).base('appNifWvpBhZkgaLk');
  base('Brands')
    .select({
      view: 'API Response',
      filterByFormula: `{Name}="${name}"`,
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
