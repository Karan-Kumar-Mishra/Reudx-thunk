import { useEffect } from 'react';
import './App.css';
import { fetchData } from './Redux/actions/myActions'
import { karan } from './Redux/actions/karan';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const store_data= useSelector((state)=>state.myData.data)
  useEffect(()=>{
     dispatch(karan());
     console.log("store=> ",store_data)
    },[])
    
  return (
    <div className="App">
      <h1>{store_data}</h1>
    </div>
  );
}

export default App;
