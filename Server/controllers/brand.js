const Airtable = require('airtable');

exports.getBrand = (req, res) => {
  const { name } = req.params;
  console.log('name', name);
  const base = new Airtable({ apiKey: 'keyYymTkZ8tlYgUmY' }).base('appNifWvpBhZkgaLk');

  base('Brands')
    .select({
      filterByFormula: `{Name}=${name}`,
    })
    .eachPage(
      (records, fetchNextPage) => {
        records.forEach((record) => {
          console.log('Retrieved', record);
        });
        console.log('shaima');
        fetchNextPage();
      },
      (error) => {
        console.log(error);
      },
    );
};
