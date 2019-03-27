require('env2')('.env');
const Airtable = require('airtable');

exports.getBrands = (req, res) => {
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
          Name: record.get('Name'),
          Explanation: record.get('Explanation'),
          Image: record.get('Image'),
          LaborScore: record.get('LaborScore'),
          EnvironmentScore: record.get('EnvironmentScore'),
          OverallScore: record.get('OverallScore'),
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
};
