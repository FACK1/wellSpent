require('env2')('.env');
const Airtable = require('airtable');

exports.getAboutus = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);
  base('aboutus')
    .select({
      view: 'Grid view',
    })
    .eachPage(
      (records, fetchNextPage) => {
        const result = records.map(record => ({
          what_is_it: record.get('what_is_it'),
          why: record.get('why'),
          our_principle: record.get('our_principle'),
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
