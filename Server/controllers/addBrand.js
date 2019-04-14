require('env2')('.env');
const Airtable = require('airtable');

exports.addBrand = (req, res) => {
  const base = new Airtable({ apiKey: process.env.APIKEY }).base(process.env.DB_NAME);

  const { BrandName, Email, MoreInformation } = req.body;
  base('New Brands').create(
    {
      Name: BrandName,
      Email,
      MoreInformation,
    },

    (error) => {
      if (error) {
        return res.status(500).json({ error });
      }
      return res.status(200).json({ success: true, msg: 'add your name Suggest' });
    },
  );
};
