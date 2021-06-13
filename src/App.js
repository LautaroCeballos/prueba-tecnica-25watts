import './App.css'
import Header from './components/Header/Header'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Product from './sections/Product/Product'
import Services from './sections/Services/Services'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <About/>
        <Product />
        <Services />
        <Contact />
    </div>
  );
}

export default App;
