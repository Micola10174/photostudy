import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from '../../pages/home'
import AboutPage from '../../pages/about'
import ServicesPage from '../../pages/services'
import PricingPage from '../../pages/pricing'
import PortfolioPage from '../../pages/portfolio'
import BlogPage from '../../pages/blog'
import ContactPage from '../../pages/contact'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" exact component={AboutPage}/>
                <Route path="/services" exact component={ServicesPage}/>
                <Route path="/pricing" exact component={PricingPage}/>
                <Route path="/portfolio" exact component={PortfolioPage}/>
                <Route path="/blog" exact component={BlogPage}/>
                <Route path="/contact" exact component={ContactPage}/>
            </Switch>
        </div>
    )
}

export default Main
