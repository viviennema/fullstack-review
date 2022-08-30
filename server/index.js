const express = require('express');
const {getReposByUsername} = require('../helpers/github.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var repos = [];
  console.log(req.body.term);
  getReposByUsername(req.body.term)
    .then(results => {
      //console.log(results);

      for (var repo of results.data) {
        var repoInfo = {
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          html_url: repo.html_url,
          watchers: repo.watchers
        }
        repos.push(repoInfo);
        console.log('repos', repos);
      }
    })
    .catch(err => {
      console.log(err)
    });


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('root');

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

