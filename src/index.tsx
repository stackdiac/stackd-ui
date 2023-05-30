import React from 'react';
//import {ReactDOM} from 'react-dom';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import { store } from './store'
import { Provider } from 'react-redux'
import Clusters from './pages/Clusters';
import Cluster from './pages/Cluster';
import SpecOffcanvas from './components/SpecOffcanvas';

import './index.scss'

//import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <Router>
        <SpecOffcanvas />
        <Navbar /> 
        <Container fluid>
       
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/clusters" element={<Clusters />} />
              <Route path="/build/:clusterName" element={<Cluster />} />
            </Routes>
       
      </Container>
    </Router>
  );
};

//ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<Provider store={store}>
  <App />
</Provider>);
