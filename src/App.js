import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Authentication/SignIn";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "steelblue" }}>
      <MainPage />
      {/* <SignIn />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
