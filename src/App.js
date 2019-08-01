import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import New from './components/pages/Genres/New/New';
import Edit from './components/pages/Genres/Edit/Edit';
import Genres from './components/pages/Genres/Genres';

const Home = () => <h1>Home</h1>;

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/generos/cadastrar'  component={New} />
          <Route path='/generos/:id' exact component={Edit} />
          <Route path='/generos' exact component={Genres} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
