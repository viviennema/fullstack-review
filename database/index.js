const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoId: Number
  full_name: String,
  html_url: String,
  forks_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var obj = {
    full_name: data.full_name,
    repoId: data.id,
    url: data.url,
    description: data.description,
    forks_count: data.forks_count
  }
  const newRepo = new Repo(obj);
  await newRepo.save();

}

module.exports.save = save;