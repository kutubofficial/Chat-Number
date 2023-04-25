import './App.css';
import Colour from './Components/Colour';
import Hooks from './Components/Hooks';
import Reducer from './Components/Reducer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Reducer/><Colour/>
      </header>
    </div>
  );
}

export default App;
