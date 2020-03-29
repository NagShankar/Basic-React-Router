import React from "react";

//importing Router related
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing all components
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (

<BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/portfolio" component={Portfolio} exact={true}/>
      <Route path="/portfolio/:id" component={PortfolioItem}/>
      <Route path="/contact" component={Contact}/>
      <Route component={NotFoundPage}/>
     
     </Switch>
    </BrowserRouter>

);

export default AppRouter;



