import {useEffect} from 'react';
import {useDispatch } from 'react-redux';
import {getAllUsers} from '../../store/operations';
import UsersList from '../UsersList/UsersList';
import Form from '../Form/Form';
import './style.scss';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <div className="main">
      <Form/>
      <UsersList/>
    </div>
  );
}

export default App;

