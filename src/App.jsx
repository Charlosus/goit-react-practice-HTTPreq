import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

// lets use axios to send request for data
function App() {
  // to do that we need to use a useEffect hook function

  // useEffect(() => {
  //   async function fetchArticles() {
  //     // here will be function body
  //   }
  //   fetchArticles(); // invoking a function
  // }, []);

  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        '<https://hn.algolia.com/api/v1/search?query=react>'
      );
      console.log(response);
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
}

export default App;

// 📦 Przykład kodu:

// useEffect(() => {

//   // kod efektu

//   return () => {

//     // czyszczenie efektu (opcjonalnie)
//   };
// }, [count]);
// 🔍 Rozkład:
// Element	            || Po polsku||                  ||	Po angielsku||
// useEffect            || funkcja/hak useEffect	      || useEffect hook||
// () => { ... }	      || funkcja efektu	              || effect function||
// return () => { ... } || funkcja czyszcząca||         || cleanup function (optional)||
// []	                  || tablica zależności           || dependency array
//
// [count]	zależności – efekt uruchomi się, gdy count się zmieni
//        	dependencies – effect runs when count changes
//
//  useEffect(() => {}, []) ||	efekt uruchamiany raz po montażu ||	effect that runs once on mount

// 📘 Bonus: pełny przykład z nazwami
// js
// Skopiuj kod
// useEffect(() => {
//   // 🟢 Funkcja efektu (effect function)
//   console.log('Witaj!');

//   return () => {
//     // 🔴 Funkcja czyszcząca (cleanup function)
//     console.log('Do zobaczenia!');
//   };
// }, [count]); // 🟡 Tablica zależności (dependency array)

// ✅ useState – Budowa i nazewnictwo
// 📦 Przykład kodu:

// const [count, setCount] = useState(0);

// 🔍 Rozkład:

// Element	                    || Po polsku               ||      ||	Po angielsku             ||
// useState	                    || funkcja/hak useState	   ||      || useState hook            ||
// 0	                          || wartość początkowa	     ||      || initial state value      ||
// count	                      || aktualna wartość stanu  ||      || current state value      ||
// setCount	                    ||funkcja do zmiany stanu	 ||      || state updater function   ||
// [count, setCount]            ||destrukturyzowana tablica||      ||	destructured state array ||

// const [...] = useState(...)
