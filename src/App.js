import React, {useEffect, useState} from 'react';
import './App.css';
import { Button } from '@mui/material';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9fc3f685bc0643b5b15698e424b98bea";
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles));
  }, []);

  return (
    <div className="App">
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
