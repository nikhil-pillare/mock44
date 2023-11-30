import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { MainRoutes } from './pages/mainroutes';
function App() {
  return (
    <div className="App">
      <Nav/>
      <MainRoutes/>
    </div>
  );
}

export default App;
