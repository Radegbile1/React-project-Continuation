
import './App.css';
import list from './components/list';
import lists, { data } from './components/list'
function App() {
  
  return (
    <div className="App">
    
    <div>
      <input className='searchStyle' type="text" placeholder='search your name here...' />
    </div>
     <div className='searchResult'>
    {lists.map((list) => { 
      return (
        <div  className='output'>
          <div>
          <img style= {{width: "20px", height:"20px"}} src={list.picture}/>
          </div>
          <div> 
          {list.id}
          <br></br> 
           {list.firstName}
          {list.lastName} 
          </div>
          
           </div>
      )
    }
      )}
     </div>
    </div>
  );
}

export default App;
