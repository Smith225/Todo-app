import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './components/Home';
import Alert from "./components/Alert.js";
import AlertState from "./context - alert/AlertState";

function App() {


  return (
    <>

      <AlertState>
        <Router>

          <Alert/>
          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>
        </Router>
      </AlertState>

    </>
  );
}


export default App;
