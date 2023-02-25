// import { Area } from 'recharts';
import './App.css';
import Area from './components/Area';
// import Degree from './components/Degree';


//All components are  in App and  App are in index.js all are connected to each other
function App() {
  return (
    <div  className='App'>   
         <Area/>
         {/* <Degree/> */}
    </div>
  );
}

export default App;
