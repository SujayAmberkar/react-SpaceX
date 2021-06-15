import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <div className="title" style={{textAlign:'left'}}>
        <h2>SpaceX Launch Programs</h2>
      </div>

      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
