import logo from './logo.svg';
import './App.css';
 
function TestMsg({myprop}){
return <p>welcome!!{myprop}</p>
  
}
function App() {
  const msg="React";
  const msg1="JSX";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TestMsg myprop="Good Afternoon"/>
        <TestMsg myprop={msg}/>
        <himsg />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>welcome</p>
        {msg}
      </header>
    </div>
  );
}

export default App;
