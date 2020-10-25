import './assets/scss/style.css'
import './App.css'
import LineChart from './components/LineChart';
import LandingPage from './components/LandingPage';
import AllBusiness from './components/AllBusiness';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import { BrowserRouter, Link, Router, Switch, Route } from 'react-router-dom'
import ChartPage from './components/ChartPage'
import Contribute from './components/Contribute';
import { useState } from 'react';
import ThankYou from './components/ThankYou'
import UserPage from './components/UserPage';


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
      grossExp: [9300 , 12000, 72000,],
      tags: ["Female Owned" , "Black Owned" ],
      about: 'Arotech Corporation is a defense and security products and services company. It manufactures and designs products for military and non-military air and ground vehicles.'
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
      tags: [ "LatinX Owned", "Female Owned"],
      about: 'Lovebird is the common name for the genus Agapornis, a small group of parrots in the Old World parrot family Psittaculidae. Of the nine species in the genus, eight are native to the African continent, with the grey-headed lovebird being native to Madagascar.'
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
      tags: [ "Black Owned" , "Female Owned"],
      about: 'A company dedicated to creating beautiful, unique, and inspirational sterling silver jewelry. For many years, Inspiranza Designs operated as a direct sales company, with sales representatives who sold our jewelry all over the country.'
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
      tags: [ "Kids Owned" , "LatinX Owned" , "Female Owned" ],
      about: 'UpEffect crowdfunds transformative solutions to global issues. Crowdfunding involves raising small amounts of money from a large group of people in exchange for goods and services.'
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
      tags: ["Black Owned" , "Native American"],
      about: 'Assuming jewelry is a form of art, there is any number of standard mass-produced pieces. Along side these easily recognized, easy to wear, staid mass marketable pieces.'
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
      tags: [ "LGBTQ+ Owned" , "Female Owned"  ],
      about: 'Sudu is a technology-based logistics company located at ATDC @ Georgia Tech. Our company offers an end-to-end platform that matches shippers and carriers based upon route optimization.'
    },
    {
      name: 'Lisnr',
      fundingGoal: 10000,
      fundingGot: 8974,
      investment: 30,
      img: 'https://www.first5napa.org/wp-content/uploads/2020/06/Gender-Neutral-Kid-smaller-750x510.jpg',
      years: [ '2008','2009','2010','2011','2012','2013','2014', '2015' , '2016', '2017','2018','2019'],
      grossRev: [3600, 4200, 3900, 2400, 10500, 3600, 6000, 1200 , 9300 , 12000, 72000, 128000],
      grossExp: [90000, 250000, 120000],
      tags: [ "Female Owned" ,"LGBTQ+ Owned" , "Kids Owned"],
      about: 'Liner companies are part of shipping conferences where, a number of companies, which operates the same line, join together to regulate competitive activity and to protect their interests.'
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
      tags: [ "Native American"  ],
      about: 'Whereas large wine companies developed their brands over many years of expensive marketing campaigns, Yellow Tail managed to lead the market without promotional campaigns.'
    }
  ]

  return (

    <BrowserRouter>
      <div className="sticky-top"><Header/></div>

      <Switch>
        <Route path="/user-page">
          <UserPage></UserPage>
        </Route>
        <Route path="/thank-you">
          <ThankYou></ThankYou>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/logout">
          <Logout></Logout>
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
