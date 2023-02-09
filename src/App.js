
import './App.css';
import Header from './Components/Header/Header';
import Searchbar from './Components/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Searchbar placeholder='Enter a Food Name...'/>
    </div>
  );
}

export default App;
