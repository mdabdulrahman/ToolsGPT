import { BrowserRouter, Route,Routes, Link } from 'react-router-dom';
import './index.css';
import Codeoutput from './components/Codeoutput';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={
<div className="">
<h1>Home</h1>
</div>
    }
    />
    <Route path='/image' element={
      <Codeoutput/>
    }/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
