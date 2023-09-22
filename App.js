import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ChangeTextColor from './ChangeTextColor';
import ArrayOfObjects from './ArrayOfObjects';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
       <h1>heloooooo</h1>
      </header>*/}
      <Counter/>
      <ChangeTextColor/>
      <ArrayOfObjects/>
    </div>
  );
}

export default App;
