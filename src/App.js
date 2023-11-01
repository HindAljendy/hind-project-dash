import { Route , Routes  } from 'react-router-dom';
import './App.css';
import Sidebar from './componnents/Sidebar/Sidebar';
import Blogs from './pages/Blogs/Blogs';
import Gallery from './pages/Gallery/Gallery';
import Rooms from './pages/Rooms/Rooms';
import Booking from './pages/Booking/Booking';
import Explore from './pages/Explore/Explore';
import Food from './pages/Food/Food';
import Inbox from './pages/Inbox/Inbox';

function App() {
  return (
      <div className='App'>
        <Sidebar/>
        <Routes>
          <Route path='/Blog' element={< Blogs />}/>
          <Route path='/gallery' element={< Gallery />}/>
          <Route path='/room' element={< Rooms />}/>
          <Route path='/booking' element={< Booking />}/>
          <Route path='/explore' element={< Explore />}/>
          <Route path='/food' element={< Food />}/>
          <Route path='/inbox' element={< Inbox />}/>
        </Routes>
        
      </div>

  );
}

export default App;
