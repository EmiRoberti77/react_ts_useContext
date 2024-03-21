import './App.css';
import { useContext, useState } from 'react';
import { myContext } from './context';
import DisplayForm from './DisplayForm';
import Panel from './Panel';
import DisplayButton from './DisplayButton';

function App() {
  const [value, setValue] = useState('light');
  const context = useContext(myContext);

  return (
    <myContext.Provider value={{ value, setValue }}>
      <div className="App">
        <DisplayForm>
          <div>
            theme mode:
            <input
              type="checkbox"
              checked={value === 'light'}
              onChange={(e) => {
                setValue(e.target.checked ? 'light' : 'dark');
              }}
            />
          </div>
          <Panel />
          <DisplayButton />
        </DisplayForm>
      </div>
    </myContext.Provider>
  );
}

export default App;
