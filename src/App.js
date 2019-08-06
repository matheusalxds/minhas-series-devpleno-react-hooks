import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';

// Genres
import NewGenres from './components/pages/Genres/New/New';
import EditGenres from './components/pages/Genres/Edit/Edit';
import Genres from './components/pages/Genres/Genres';

// Series
import NewSeries from './components/pages/Series/New/New';
import EditSeries from './components/pages/Series/Edit/Edit';
import ProfileSeries from './components/pages/Series/Profile/Profile';
import Series from './components/pages/Series/Series';

const Home = () => <h1>Home</h1>;

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/generos/cadastrar' component={NewGenres} />
        <Route path='/generos/:id' exact component={EditGenres} />
        <Route path='/generos' exact component={Genres} />

        <Route path='/series/detalhes/:id' component={ProfileSeries} />
        <Route path='/series/cadastrar' component={NewSeries} />
        <Route path='/series/:id' component={EditSeries} />
        <Route path='/series' component={Series} />
      </Switch>
    </Router>
  );
}

export default App;
