import BoardDisplay from './components/BoardDisplay';
import { Provider } from 'react-redux'
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BoardDisplay />
      </div>
    </Provider>
  );
}

export default App;
