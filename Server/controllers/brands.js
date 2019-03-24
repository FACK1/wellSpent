exports.getBrands = (req, res) => {
  let brands = [];
  let brand={};

  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyYymTkZ8tlYgUmY'}).base('appNifWvpBhZkgaLk');

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
