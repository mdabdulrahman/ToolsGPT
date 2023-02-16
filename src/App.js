import { BrowserRouter, Route,Routes, Link } from 'react-router-dom';
import './index.css';
import ImageCreate from './components/ImageCreate';
import CodeCompletion from './components/CodeCompletion';
import Home from './components/Home'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={
<Home/>
    }
    />
    <Route path='/image' element={
      <ImageCreate/>
    }/>
  <Route path='/code' element=
{

  <CodeCompletion/>
}/>
    }
    </Routes>
    </BrowserRouter>

  );
}

export default App;
