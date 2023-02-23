import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Result from './components/Result';
import Feedback from './components/Feedback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
        <Route path='/feedback' element={<Feedback/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
