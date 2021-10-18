
import './App.css';
import styled from 'styled-components';
import Headerr from './Components/Headerr';
import Headerbottom from './Components/Headerbottom';
import MenuAndSliderComponent from './Components/menuAndSlider/menuAndSliderComponent';
import Undersection from './Components/Undersection/Undersection';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import Footer from './Footer';

function App() {
  return (
    <>
 
     <Headerr/>
    <Headerbottom/>
    <MenuAndSliderComponent/>
    <Undersection/>
    <Footer/>
    
   </>
  );
}

export default App;


