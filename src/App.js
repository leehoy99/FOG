import { Route, Routes } from 'react-router-dom';
import Main from './components/Main'
import Shop from './components/Shop';
import Account from './components/Account';
import Detail from './components/Detail'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/Main' element={<Main />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/Account' element={<Account />}></Route>
      <Route path='/Detail' element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
