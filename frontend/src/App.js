import logo from './logo.svg';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import './App.css';
import Wlcm from './components/Wlcm'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

import Privacy from './components/Privacy';
import Terms from './components/Terms';

import Page4 from './components/Fertilizer'
import Register from './components/Register'
import Login from './components/Login'
 import Page3 from './components/Page3'
 import CropGuide2 from './components/CropGuide2'
 import CropSug from './components/CropSug'
import Harsha from './components/Me'
import FarmerProfile from './components/FarmerProfile';
import FarmerProfileView from './components/FarmerProfileView';

import CropPricePredictor from './components/CropPricePredictor';



export default function App() {
  return (
    <>

    <Router>
      <Routes>
                <Route path='/a/login/page1/me' element={<Harsha/>}/>

        <Route path='/' element={<Wlcm/>}/>
        <Route path='/a/login/page1'element={<Page1/>}/>
        <Route path='/a/:id/farmer'element={<Page3/>}/>
        <Route path='/a/:id'element={<Page2/>}/>
        
        {/* <Route path='/a/:id/register'element={<Register/>}/> */}
        <Route path='/a/register'element={<Register/>}/>
        {/* <Route path='/a/:id/Login'element={<Login/>}/> */}
        <Route path='/a/Login'element={<Login/>}/>
        {/* <Route path='/a/:id/farmer'element={<CropGuide/>}/> */}
        <Route path="/a/predict" element={<CropGuide2 />} />
        <Route path='/a/cs'element={<CropSug/>}/>
<Route path="/a/:id/fertilizer" element={<Page4 />} />


<Route path="/a/price" element={<CropPricePredictor />} />
<Route path="/a/farmer-profile" element={<FarmerProfile />} />
<Route path="/a/profile" element={<FarmerProfileView />} />
<Route path="/a/view-profile" element={<FarmerProfileView />} />
 <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>

    </>
  )}