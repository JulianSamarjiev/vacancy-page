import React, { Component } from 'react';
import Navigation from './Navigation';
import VacancyPage from './VacancyPage';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <VacancyPage />
        <Footer />
      </div>
    );
  }
}

export default App;
