import React from 'react';
import { LanguageContext, languages } from './context/language-context';
import './App.css';
import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <div className="App">
      <LanguageContext.Provider value={languages.en}>
        <HomePage></HomePage>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
