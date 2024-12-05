import logo from './logo.svg';
import './App.css';
import ContentList from './ContentCard/ContentList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="ContentArea">
          <ContentList></ContentList>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
