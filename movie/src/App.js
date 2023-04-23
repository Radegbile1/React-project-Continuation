import logo from '../src/Capture.JPG'
import './App.css';
import List from './components/List';

function App() {

  return (
    <div className='App'>
      <img src={logo} className='logoDesign' alt='logo' />
      <List />
    </div>
   
  );
}

export default App;
