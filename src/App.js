import './App.css';
import { Controler } from './components/Controler';
import { Navbar } from './components/Navbar';
import { Songs } from './components/Songs';

function App() {
  return (
    <>
      <Navbar/>
      <Songs/>
      {/* <Controler/> */}
    </>
  );
}

export default App;
