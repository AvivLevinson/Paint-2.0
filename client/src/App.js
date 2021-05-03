import './App.css';

import Header from './components/Header';
import MainLayout from './layout/MainLayout';


function App() {
  return (
    <div className="App">
      <Header title={'Paint 2.0' }/>
      <MainLayout/>
    </div>
  );
}

export default App;
