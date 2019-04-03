require('env2')('.env');
const Airtable = require('airtable');

exports.dislike = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);

  const { id, dislike } = req.params;
  const dislikev = parseInt(dislike, 10) + 1;
  base('Feedback').update(id,
    {
      dislike: dislikev,
    },
    (error) => {
      if (error) {
        return res.status(500).json({ error });
      }
      return res.status(200).json({ success: true, msg: 'added successfully' });
    });
};
