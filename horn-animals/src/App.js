import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { animalData } from './data';
// import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main animalData={animalData}/>
      <Footer/>
    </div>
  );
}

export default App;

