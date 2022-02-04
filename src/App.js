import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomePage } from './pages/home-page'
import { GamePage } from './pages/game-page'
import { Header } from './components/header'
import { Provider } from "react-redux"
import { store } from "./redux"
import './App.css'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {/* <HomePage/> */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/app/:title' element={<GamePage />} />
          </Routes>
        </div>
      </Router >
    </Provider>
  );
}

export default App;
