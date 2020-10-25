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
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: ["Female Owned"]
    },

    {
      name: 'business2',
      fundingGoal: 90,
      fundingGot: 10,
      img: 'https://picsum.photos/200',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: ["LatinX Owned", "Female Owned"]
    },
    {
      name: 'business3',
      fundingGoal: 90,
      fundingGot: 10,
      img: 'https://picsum.photos/200',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: ["Kids Owned", "Black Owned"]
    },
    {
      name: 'business4',
      fundingGoal: 90,
      fundingGot: 10,
      img: 'https://picsum.photos/200',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: ["Black Owned"]
    },
    {
      name: 'business5',
      fundingGoal: 90,
      fundingGot: 10,
      img: 'https://picsum.photos/200',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: ["LGBTQ+ Owned"]
    },
    {
      name: 'business6',
      fundingGoal: 90,
      fundingGot: 10,
      img: 'https://picsum.photos/200',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: [ "Female Owned" ,"LGBTQ+ Owned"]
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
