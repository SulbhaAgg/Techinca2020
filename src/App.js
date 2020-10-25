import './assets/scss/style.css'
import './App.css'
import LineChart from './components/LineChart';
import LandingPage from './components/LandingPage';
import AllBusiness from './components/AllBusiness';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter, Link, Router, Switch, Route } from 'react-router-dom'
import ChartPage from './components/ChartPage'



function App() {

  const data = [
    {
      name: 'business1',
      fundingGoal: 100,
      fundingGot: 50,
      img: 'https://picsum.photos/200',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000]
    },

    {
      name: 'business2',
      fundingGoal: 90,
      fundingGot: 10,
      img: 'https://picsum.photos/200',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000]
    }
  ]

  return (

    <BrowserRouter>
      <div className="sticky-top"><Header/></div>

      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/organizations/:id">
          <ChartPage data={data}></ChartPage>
        </Route>
        <Route path="/organizations">
          <AllBusiness data={data}></AllBusiness>
        </Route>
        <Route exact path='/'>
          <LandingPage></LandingPage>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
