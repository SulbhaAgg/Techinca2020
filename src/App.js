import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import LandingPage from './components/LandingPage';
import AllBusiness from './components/AllBusiness';
import Header from './components/Header';
import { BrowserRouter, Link, Router, Switch, Route } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <Header />
      

      <Switch>
        <Route exact path='/'>
          <LandingPage></LandingPage>
        </Route>
        <Route path="/Companies">
          <AllBusiness></AllBusiness>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
