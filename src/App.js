import { Provider } from 'react-redux';
import store from './Redux/Store';
import A from './A';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <h1>HIII</h1>
      <A />
      </Provider>
    </div>
  );
}

export default App;
