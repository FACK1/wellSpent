require('env2')('.env');
var Airtable = require('airtable');

exports.getBrands = (req, res) => {
  var base = new Airtable({apiKey:process.env.APIKEY}).base(process.env.DB_NAME);
  base('Brands').select({
    view: 'Grid view'
}).eachPage(function page(records, fetchNextPage) {
  const result= records.map(function(record) {
      return record.get('Name');
    });
       fetchNextPage();
       res.json(result)
     }, function done(err) {
    if (err) { console.error(err); return; }

});
};
