import React, { Component } from 'react';
import List from './components/List';
import Article from './models/Article'
import request from 'request'
import mongoose from 'mongoose'

class App extends Component {


  componentWillMount() {
    var articles = []
    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': "e6e2479594094a68b111ec3f0935a632",
        'q': "trump"
      },
    }, function (err, response, body) {
      body = JSON.parse(body);
      for (let i = 0; i < body.response.docs.length; i++) {
        articles.push(body.response.docs[i])
      }
      articles.map((element, i) => (
        console.log(element)
      ))
      console.log(articles)
    })

  }
  componentDidMount() {
    // console.log(this.state.articles)
  }


  render() {
      return (
        <ul>
          <li><List /></li>

        </ul>

    );
  }
}

export default App;
