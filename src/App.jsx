import React, { useState, useEffect } from 'react';
import List from './components/taches/list';

const App = () => {
  
  return (
    <div>
      <h1>Liste des tâches</h1>
      <List />
    </div>
  );
};

export default App;
