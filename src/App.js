import './App.css';
import Header from './components/Header/Header'
import Home from './sections/Home/Home'
import About from './sections/About/About'

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <About/>
    </div>
  );
}

export default App;
