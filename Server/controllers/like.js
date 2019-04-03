require('env2')('.env');
const Airtable = require('airtable');

exports.like = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);

  const { id, like } = req.params;
  const likev = parseInt(like, 10) + 1;
  base('Feedback').update(id,
    {
      like: likev,
    },
    (error) => {
      if (error) {
        return res.status(500).json({ error });
      }
      return res.status(200).json({ success: true, msg: 'added successfully' });
    });
};
