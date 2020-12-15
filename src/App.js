import React, { useState, useEffect } from 'react';
import './App.css';

const API = {
  URL: 'https://api.chucknorris.io/jokes/random?category='
}

function App() {
  const [joke, setJoke] = useState('');


  const generateJoke = () => {
    fetch(API.URL + 'animal')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJoke();
  }, [])


  const generateJokeCareer = () => {
    fetch(API.URL + 'career')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeCareer();
  }, [])

  const generateJokeCelebrity = () => {
    fetch(API.URL + 'celebrity')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeCelebrity();
  }, [])

  const generateJokeDev = () => {
    fetch(API.URL + 'dev')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeDev();
  }, [])

  const generateJokeScience = () => {
    fetch(API.URL + 'science')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeScience();
  }, [])

  const generateJokeMoney = () => {
    fetch(API.URL + 'money')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeMoney();
  }, [])


  const generateJokeMovies = () => {
    fetch(API.URL + 'movie')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeMovies();
  }, [])

  const generateJokeMusic = () => {
    fetch(API.URL + 'music')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeMusic();
  }, [])

  const generateJokeReligion = () => {
    fetch(API.URL + 'religion')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeReligion();
  }, [])


  const generateJokeSport = () => {
    fetch(API.URL + 'sport')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeSport();
  }, [])

  const generateJokeTravel = () => {
    fetch(API.URL + 'travel')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeTravel();
  }, [])

  const generateJokeExplicit = () => {
    fetch(API.URL + 'explicit')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }
  useEffect(() => {
    generateJokeExplicit();
  }, [])

  return (
    <div class="box">

      <h2>Chuck Norris Jokes</h2>


      <h4>Click on any category to generate a joke from that category</h4>

      <p>
        {joke}
      </p>

      <button onClick={generateJoke}>Animal</button>
      <button onClick={generateJokeCareer}>Career</button>
      <button onClick={generateJokeCelebrity}>Celebrity</button>
      <button onClick={generateJokeDev}>Dev</button>
      <button onClick={generateJokeScience}>Science</button>

      <button onClick={generateJokeMoney}>Money</button>
      <button onClick={generateJokeMovies}>Movie</button>
      <button onClick={generateJokeMusic}>Music</button>
      <button onClick={generateJokeReligion}>Religion</button>


      <button onClick={generateJokeSport}>Sport</button>
      <button onClick={generateJokeTravel}>Travel</button>
      <button onClick={generateJokeExplicit}>Explicit</button>


    </div>
  );
}

export default App;