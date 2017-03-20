module.exports.sampleGetAll = function(req, res) {
  console.log("GET json");
  res
    .status(200)
    .json({"jsonData" : true});
};
