import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
