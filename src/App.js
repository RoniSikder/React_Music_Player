import './App.css';
import { Controler } from './components/Controler';
import { Navbar } from './components/Navbar';
import { SongList } from './components/SongList';

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
