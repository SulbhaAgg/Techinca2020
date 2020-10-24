import logo from './logo.svg';
import './assets/scss/style.css'
import './App.css'
import LineChart from './components/LineChart';
import LandingPage from './components/LandingPage';
import AllBusiness from './components/AllBusiness';
import Header from './components/Header';
import { BrowserRouter, Link, Router, Switch, Route } from 'react-router-dom'
import ChartPage from './components/ChartPage'



function App() {

  const data = [
    {
      name: 'business1',
      fundingGoal: 100,
      fundingGot: 50,
      img: 'https://picsum.photos/200',
      grossRev: [
        {
          x: '2015',
          y: 200000
        },
        {
          x: '2016',
          y: 300000
        },
        {
          x: '2018',
          y: 400000
        }
      ],
      grossExp: [
        {
          x: '2015',
          y: 100000
        },
        {
          x: '2016',
          y: 200000
        },
        {
          x: '2018',
          y: 300000
        }
      ]
    },

    {
      name: 'business2',
      fundingGoal: 90,
      fundingGot: 10,
      img: 'https://picsum.photos/200',
      grossRev: [
        {
          x: '2015',
          y: 200000
        },
        {
          x: '2016',
          y: 300000
        },
        {
          x: '2018',
          y: 400000
        }
      ],
      grossExp: [
        {
          x: '2015',
          y: 900000
        },
        {
          x: '2016',
          y: 300000
        },
        {
          x: '2018',
          y: 100000
        }
      ]
    }
  ]

  return (

    <BrowserRouter>
      <Header />


      <Switch>
        <Route path="/Companies/:id">
          <ChartPage data={data}></ChartPage>
        </Route>
        <Route path="/Companies">
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
