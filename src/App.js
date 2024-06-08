import logo from './logo.svg';
import './App.css';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
