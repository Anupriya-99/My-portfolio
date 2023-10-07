import './App.css';
import Mainpage from './Pages/Mainpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedulepick from './Pages/Schedulepick';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route index element={<Mainpage />} />
          <Route path='/schedulepickup' element={<Schedulepick />} />
        
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
