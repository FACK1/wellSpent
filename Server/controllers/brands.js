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
          BrandName: record.get('BrandName'),
          Explanation: record.get('Explanation'),
          Image: record.get('Image'),
          LaborScore: record.get('LaborScore'),
          EnvironmentScore: record.get('EnvironmentScore'),
          OverallScore: record.get('OverallScore'),
        }));
        const colourMap = {};
        base('Score Colour')
          .select({
            view: 'Grid view',
          })
          .eachPage(
            (colourRecords, colourFetchNextPage) => {
              const colourResult = colourRecords.map(record => {
                const score = record.fields.Name
                console.log({record})
                colourMap[score] = record.fields["Colour Hex"][0]
                return
              });
              colourFetchNextPage();
              res.json({result, colourMap})
              // const finalResult = result.map((data) => {
              //   const colorResult = colourResult.filter((color) => {
              //     return data.LaborScore === color.record.Name || parseInt(data.EnvironmentScore) === color.record.Name || data.OverallScore === color.record.Name
              //   });
              //   return { data, colorResult };
              // });
              // Promise.all(finalResult)
              //   .then((brandsResult) => {
              //     res.json(brandsResult);
              //   });
            },
            (err) => {
              if (err) {
                console.error(err);
              }
            },
          );
      },
      (err) => {
        if (err) {
          console.error(err);
        }
      },
    );
};
