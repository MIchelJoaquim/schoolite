import React from 'react'; 
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './presentation/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <MyRoutes></MyRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
