import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';
import store from './store';
import _ from 'lodash';

const App = () => {
  const { contacts } = store.getState();

  // .values method: it creates an array out of all key values of the object passed in
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;
