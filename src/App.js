import './App.css';
import { Todo } from './components/Todo'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
  return (
    <ThemeContext.Provider>
      <div className="App" id="light">
        <Todo />
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
