import './App.css';
import Header from './Header';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';
function App() {
  return (
    <div className="App">
      <Header/>
      <Leftside/>
      <Main/>
      <Rightside/>
    </div>
  );
}

export default App;
