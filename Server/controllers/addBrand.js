require('env2')('.env');
const Airtable = require('airtable');

exports.addBrand = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(
    process.env.DB_NAME,
  );

  const { Name } = req.body;
  base('New Brands').create(
    {
      Name,
    },

    (error) => {
      if (error) {
        return res.status(500).json({ error });
      }
      return res
        .status(200)
        .json({ success: true, msg: 'add your name Suggest' });
    },
  );
};
