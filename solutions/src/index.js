import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//import Components
import Explorer from './components/Explorer';
import People from './components/People';
import Starships from './components/Starships';
import Films from './components/Films';
import BaseLayout from './components/Layout';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Explorer}/>
        <Route path="/starships" component={Starships}/>
        <Route path="/films" component={Films}/>
        <Route path="/characters" component={People}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
