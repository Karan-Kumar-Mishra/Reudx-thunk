import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions/fetchUsers';
import { useEffect } from 'react';

function App() {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
       {users && users.map( (usr)=>{
        return (
          <h1 key={usr.id}>{usr.name}</h1>   
        )
       })}
      </header>
    </div>
  );
}

export default App;
