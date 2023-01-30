import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Authentication/SignIn";
function App() {
  return (
    <div className="App">
      <MainPage />
      {/* <SignIn /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>  */}
    </div>
  );
}

export default App;
