import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { SongList } from './components/SongList';
import { Controler } from './components/Controler';

function App() {
  return (
    <>
      <Navbar/>
      <SongList/>
      <Controler/>
    </>
  );
}

export default App;
