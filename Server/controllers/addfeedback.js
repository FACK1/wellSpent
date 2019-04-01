require('env2')('.env');
const Airtable = require('airtable');

exports.addfeedback = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);

  const { Name, Feedback } = req.body;
  base('Feedback').create(
    {
      Name,
      Feedback,
    },

    (error) => {
      if (error) {
        return res.status(500).json({ error });
      }
      return res.status(200).json({ success: true, msg: 'added successfully' });
    },
  );
};
