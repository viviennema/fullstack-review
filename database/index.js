const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  description: String,
  html_url: String,
  watchers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (reposArr, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('b',reposArr);
  var promises = [];
  reposArr.forEach(repo => {
    var name = repo.name;
    var description = repo.description;
    var html_url = repo.html_url;
    var watchers_count = repo.watchers_count;
    promises.push(Repo.create({name, description, html_url, watchers_count}));
  })
    Promise.all(promises).then(() => {
      console.log('saved all repos to mongo');
      cb();
     })
    }

  let readTop25 = (cb) => {
    Repo.find().then((data) => {
      cb(data);
    })
  }



module.exports.save = save;
module.exports.readTop25 = readTop25;