import './App.css';

import Header from './components/Header';
import MainLayout from './layout/MainLayout';


function App() {
  console.log("Thanks for the opportunity, I completed all the sections.I would be happy to get a code review, in addition, if there are any questions about certain subjects I implemented I would like to explain. resources I have used are MDN, GitHub, and stack overflow. work with canvas was interesting, I learn a lot and expose to new things, good luck to us :) ");
  return (
    <div className="App">
      <Header title={'Paint 2.0' }/>
      <MainLayout/>
    </div>
  );
}

export default App;
