import { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandigPage from "./landing-page/LandigPage";
import ForumPage from "./landing-page/ForumPage";
import HomePage from "./landing-page/HomePage";
import Drivers from "./components/Drivers";
import Login from "./LoginPage/Login";
import ViewBus from "./Pages/ViewBus";
import NewLandingPage from "./landing-page/NewLandingPage";
import Mechanics from "./landing-page/MachanicsList";
import AddBus from "./Pages/AddBus";
import About from "./landing-page/About";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f0f0f0";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* LandigPage is not shown for /login route */}
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <LandigPage />}
      <Routes>
        <Route path="/view-bus" element={<ViewBus />} />
        <Route path="/travel-forum" element={<ForumPage />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/landing-page" element={<HomePage />} />
        <Route path="/new-landing-page" element={<NewLandingPage />} />
        <Route path="/mechanics" element={<Mechanics />} />
        <Route path="/add-bus" element={<AddBus />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
