import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './components/anime-list/AnimeList';
import "./App.css"
import "./index.css"
import MainAnimePage from './pages/MainAnimePage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainAnimePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
