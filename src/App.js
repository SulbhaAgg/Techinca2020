import './assets/scss/style.css'
import './App.css'
import LineChart from './components/LineChart';
import LandingPage from './components/LandingPage';
import AllBusiness from './components/AllBusiness';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter, Link, Router, Switch, Route } from 'react-router-dom'
import ChartPage from './components/ChartPage'
import Contribute from './components/Contribute';
import { useState } from 'react';
import ThankYou from './components/ThankYou'


function App() {

  const data = [
    {
      name: 'AfroTech',
      fundingGoal: 25000,
      fundingGot: 20790, 
      investment: 80,
      img: 'https://cdn.spaandclinic.com.au/wp-content/uploads/2020/04/29173903/iStock-1152658699.jpg',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: ["Female Owned" , "Black Owned" ],
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere neque sed imperdiet mollis. Mauris laoreet tempus purus ut semper. Vestibulum et tortor libero. Maecenas interdum sit amet augue sed finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate tortor ac urna posuere, non sodales ex finibus. Nulla varius risus suscipit mollis egestas. Donec vel urna turpis. Proin tincidunt tortor quam, et posuere tellus ullamcorper non. '
    },
    {
      name: 'LoveBug',
      fundingGoal: 20000,
      fundingGot: 18610,
      investment: 70,
      img: 'https://belatina.com/wp-content/uploads/2019/02/Vanessa-Robledo.jpg',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: [ "LatinX Owned", "Female Owned"]
    },
    {
      name: 'Inspiranza',
      fundingGoal: 18000,
      fundingGot: 16130,
      investment: 60,
      img: 'https://everydayfeminism.com/wp-content/uploads/2017/09/GettyImages-603187014.jpg',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: [ "Black Owned" , "Female Owned"]
    },
    {
      name: 'Up Effect',
      fundingGoal: 16000,
      fundingGot: 15300,
      investment: 50,
      img: 'https://i.ytimg.com/vi/J9boSWf4wno/maxresdefault.jpg',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: [ "Kids Owned" , "LatinX Owned" , "Female Owned" ]
    },
    {
      name: 'Ataumbi',
      fundingGoal: 15000,
      fundingGot: 12197,
      investment: 50,
      img: 'https://thumbs-prod.si-cdn.com/XBijvlRjIGjDhlHQE52uWOQhlHM=/fit-in/1072x0/https://public-media.si-cdn.com/filer/Foxx-family-Mashpee-2.jpg',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: ["Black Owned" , "Native American"]
    },
    {
      name: 'sudu',
      fundingGoal: 12000,
      fundingGot: 10738,
      investment: 40,
      img: 'https://api.time.com/wp-content/uploads/2018/03/latinx-lgbtq-queer-latino-latina-gender-dictionary.jpg',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: [ "LGBTQ+ Owned" , "Female Owned"  ]
    },
    {
      name: 'Lisnr',
      fundingGoal: 10000,
      fundingGot: 8974,
      investment: 30,
      img: 'https://www.first5napa.org/wp-content/uploads/2020/06/Gender-Neutral-Kid-smaller-750x510.jpg',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: [ "Female Owned" ,"LGBTQ+ Owned" , "Kids Owned"],
      about: 'Who are we? We vanish into the night!'
    },
    {
      name: 'Yellow tail',
      fundingGoal: 8000,
      fundingGot: 5472,
      investment: 20,
      img: 'https://imageproxy.themaven.net/https%3A%2F%2Fimages.saymedia-content.com%2F.image%2FMTY4NjMyNDg4Mzg4Nzk4MzU5%2Fdarrah-blackwater---cropped.jpg',
      years: ['2014', '2016', '2017'],
      grossRev: [1000000, 500000, 250000],
      grossExp: [90000, 250000, 120000],
      tags: [ "Native American"  ]
    }
  ]

  return (

    <BrowserRouter>
      <div className="sticky-top"><Header/></div>

      <Switch>
        <Route path="/thank-you">
          <ThankYou></ThankYou>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/organizations/:id/Contribute">
          <Contribute data={data}></Contribute>
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
