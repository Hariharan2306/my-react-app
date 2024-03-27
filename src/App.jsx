import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandigPage from "./landing-page/LandigPage";
import ForumPage from "./landing-page/ForumPage";
import HomePage from "./landing-page/HomePage";
import LoginPage from "./Login";
import Drivers from "./components/Drivers";
import Login from "./LoginPage/Login";

function App() {
  return (
    <Router>
      <Suspense>
        <LandigPage />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/travel-forum" element={<ForumPage />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/landing-page" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
