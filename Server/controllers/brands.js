require('env2')('.env');
const Airtable = require('airtable');

exports.getBrands = (req, res) => {
<<<<<<< HEAD
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);
  base('Brands').select({
    view: 'Grid view',
  }).eachPage((records, fetchNextPage) => {
    const result = records.map(record => record.get('Name'));
    fetchNextPage();
    res.json(result);
  }, (err) => {
    if (err) { console.error(err); }
  });
=======
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(
    process.env.DB_NAME,
  );

  base('Brands')
    .select({
      view: 'API Response',
    })
    .eachPage(
      (records, fetchNextPage) => {
        const result = records.map(record => ({
          name: record.get('Name'),
          Explanation: record.get('Explanation'),
          Image: record.get('Image'),
          LaborScore: record.get('Labor Score'),
          EnvironmentScore: record.get('Environment Score'),
          OverallScore: record.get('Overall Score'),
          LabourScoreColour: record.get('Labour Score hexa'),
          EnvironmentScoreColour: record.get('Environment Score hexa'),
          OverallScoreColour: record.get('Overall Score hexa'),
        }));
        fetchNextPage();
        res.json(result);
      },
      (err) => {
        if (err) {
          console.error(err);
        }
      },
    );
>>>>>>> 6d6c549a195f3bb080188c6111f9e3e240414222
};
