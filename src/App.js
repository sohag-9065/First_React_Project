import logo from './logo.svg';
import './App.css';
import Laptops from './components/LaptopCorner/LaptopCorner';
import Header from './components/Header/Header';
import LaptopCorner from './components/LaptopCorner/LaptopCorner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LaptopCorner></LaptopCorner>
    </div>
  );
}

export default App;
