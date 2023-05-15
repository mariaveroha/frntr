import './App.css';
import Banner from '../src/Components/Banner/Banner'
import Choosing from '../src/Components/Choosing/Choosing'
import Ideas from '../src/Components/Ideas/Ideas'
import Products from '../src/Components/Products/Products'
import Feedback from '../src/Components/Feedback/Feedback'
import Home from '../src/Components/Home/Home'
import Footer from '../src/Components/Footer/Footer'
function App() {
  return (
    <div className="container">
      <Banner />
      <Choosing />
      <Ideas />
      <Products />
      <Feedback />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
