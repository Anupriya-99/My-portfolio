import About from '../Components/About';
import Chatbot from '../Components/Chatbot';
import Contact from '../Components/Contact';
import Carousel from '../Components/Courosel';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Pickup from '../Components/Pickup';
import Process from '../Components/Process';
import Stats from '../Components/Stats';
import Temp from '../Components/Temp';
import Temp2 from '../Components/Temp2';

function Mainpage() {
  return (
    <div>
      <Navbar/>
      <Temp/>
      <Stats/>
      <Process/>
      <Pickup/>
      <Temp2/>
      <Contact/>
      <Footer/>
      <Chatbot/>
    </div>
  );
}

export default Mainpage;
