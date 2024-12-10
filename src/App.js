import { Routes, Route } from 'react-router-dom';
import Profile from "./pages/Profile";
import Main from './pages/Main';
import Registration from './pages/Registration';
import Add_pet from './pages/Add_pet';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
      <Route path={'/registration'} element={<Registration/>}/>
      <Route path={'/add_pet'} element={<Add_pet/>}/>
      <Route path={'/search'} element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
