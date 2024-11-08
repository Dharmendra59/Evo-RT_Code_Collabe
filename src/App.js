import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import EditorPage from './components/EditorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
