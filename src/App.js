import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import getPosts from './api/'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <h1>Nostalgia</h1>
      <Posts />
      <Form />
    </div>
  )
}

export default App;
