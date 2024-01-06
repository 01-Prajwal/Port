import './App.scss';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Content from './Components/Home/Content';

// import Home from './Components/Home/Home';

import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Show from './Components/Projs/Show';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {/* <CounterContextProvider> */}

      {/* <Nav/> */}
      {/* <div className="App"> */}
      <Route path='/' element={[<Home/>,<Content/>]}/>
      <Route path='/contact' element={[<Contact/>]}/>
      <Route path='/projects' element={[<Show/>]}/>
        
        {/* <Profile /> */}
       
        {/* <Dash /> */}
      {/* </div> */}
    {/* </CounterContextProvider> */}
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
