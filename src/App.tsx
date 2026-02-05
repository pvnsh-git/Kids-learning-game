import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import CountryList from './components/CountryList';
import GameList from './components/LearningGame/GameList';
import SyllableList from './components/LearningGame/Syllable/SyllableList';
import TypeToSpeak from './components/LearningGame/TypeToSpeak';
import Rainbow from './components/LearningGame/Rainbow';
import Calender from './components/LearningGame/Calender';

function App() {
  const location = useLocation();
  // console.log('App location', location.pathname)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GameList />} />
        <Route path={'/details/*'} element={<SyllableList />} />
        <Route path={'/image/*'} element={<Rainbow />} />
        <Route path={'/image/*'} element={<Rainbow />} />
        <Route path={'/image/*'} element={<Rainbow />} />
        <Route path={'/calender'} element={<Calender />} />
        <Route path='/type-to-speak' element={<TypeToSpeak />} />
      </Routes>
    </div>
  );
}

export default App;
