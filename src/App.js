import { Route, Router, Routes } from 'react-router';
import './App.css';
import Login from './LoginPage'
import More from './MorePage'
import Jung from './JungPage'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/more' element={<More />} />
        <Route path='/jung' element={<Jung/>} />
      </Routes>
    </>

  );
}

export default App;
