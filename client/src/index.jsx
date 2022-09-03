import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    //this.retrieve = this.retrieve.bind(this);

  }


  search (term) {
    console.log(`${term} was searched`);
    fetch('http://localhost:1128/repos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: term})
    })
     .then(res => {
      console.log('data', res);
     })
      .catch(err => {console.log('err', err)});
  }

  //  componentDidMount() {
  //   $.ajax({
  //     type: 'GET',
  //     url: '/repos',
  //     success: (data) => {
  //       this.setState({repos: data});
  //     }
  //   });




  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));