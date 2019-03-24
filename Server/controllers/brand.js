exports.getBrand = (req, res) => {
  const Brand = {
    name: 'Zara',
    overallscore: 100,
    enviormentscore: 90,
    animalrightscore: 70,
    cost: 10,
    producttype: 'Socided Anonima',
    explanation: 'its got a ranking of A+ for transparency',
  };
  res.json(Brand);
};
