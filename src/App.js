import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

class App extends Component {
  render() {
    return (
      <div>
        This is my app
        <Layout>
          <BurgerBuilder />
        </Layout>
        <Checkout />
      </div>
    );
  }
}

export default App;
