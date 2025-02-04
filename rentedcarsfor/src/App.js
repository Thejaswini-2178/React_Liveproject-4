import './App.css';
import BlogSection from './Renter cars-template/7-Blog/BlogSection';
import Booksection from './Renter cars-template/2-Book/Booksection';
import Carsection from './Renter cars-template/3-Car/Carsection';
import Clintsection from './Renter cars-template/9-Clint/Clintsection';
import Contactsection from './Renter cars-template/10-Contact/Contactsection';
import Contactus from './Renter cars-template/8-Contact/Contactus';
import Footer from './Renter cars-template/12-Footer/Footer';
import Mapsection from './Renter cars-template/11-Map/Mapsection';
import Rentsection from './Renter cars-template/6-Rent/Rentsection';
import Aboutsection from './Renter cars-template/4-ABOUT/Aboutsection';
import Bestsection from './Renter cars-template/5-Best/Bestsection';
import Header from './Renter cars-template/1-Head/Header';
import SliderSection from './Renter cars-template/1.1 Slider/SliderSection';


function App() {
  return (
    <div className="App">
       <Header/>
       <SliderSection/>
       <Booksection/>
       <Carsection/>
       <Aboutsection/>
       <Bestsection/>
       <Rentsection/>
       <BlogSection/>
       <Contactus/>
       <Clintsection/>
       <Contactsection/>
       <Mapsection/>
       <Footer/>
    </div>
  );
}

export default App;
