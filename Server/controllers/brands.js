exports.getBrand = (req, res) => {
  const Brand = {
    name: 'Zara',
    overallscore: 95,
    enviormentscore: 70,
    animalrightscore: 95,
    discription: 'Adidas SA is a Spanish fast fashion retailer based in Arteixo in
      Galicia' ,
  };
  res.json(Brand);
};
