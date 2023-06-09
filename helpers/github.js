const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log('a', username);
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
  }
  return axios(options)
   .then(function(res) {
    console.log(res)
   })
   .catch(function (error) {
    console.log(error);
   })


}

module.exports.getReposByUsername = getReposByUsername;