import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import HappyCustomer from './components/HappyCustomer';
import Header from './components/Header';
import HeroSection1 from './components/HeroSection1';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Specialities from './components/Specialities';
import Team from './components/Team';

function App() {
  return (
    <>
    <Header/>
    <HeroSection1/>
    <About/>
    <Specialities/>
    <Menu/>
    <HappyCustomer/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
  );
}

export default App;
