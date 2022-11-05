import React from 'react'
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Destinos from './components/pages/Destinos';
import Promoções from './components/pages/Promoções';
import Cadastro from './components/pages/Cadastro';
import Login from './components/pages/Login';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
function App() {
  return(
    <Router>
      <Navbar/>
    
    <Container customClass="min-height">
      <Routes>
         <Route exact path="/" element= {<Home/>}></Route>
        <Route exact path="/destinos" element= {<Destinos/>}></Route>
        <Route exact path="/promoções" element= {<Promoções/>}></Route>
        <Route exact path="/cadastro" element= {<Cadastro/>}></Route>
        <Route exact path="/login" element= {<Login/>}></Route>
       </Routes>
    </Container>   
      <Footer/>   
</Router>

  )   
}

export default App;
