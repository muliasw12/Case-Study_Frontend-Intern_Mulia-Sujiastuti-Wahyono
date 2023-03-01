import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
      
      <div className="relative pb-10 min-h-screen">
      <Router>
        
        <Header />

        <div className="p-3">
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Routes>
        </div>

        <Footer />

      </Router>
    </div>

   

        

      
      
      
    
  );
}

export default App;
