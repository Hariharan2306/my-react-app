import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <Suspense>
        <LandigPage />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/view-bus" element={<ViewBus />} />
          <Route path="/travel-forum" element={<ForumPage />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/landing-page" element={<HomePage />} />
          <Route path="/new-landing-page" element={<NewLandingPage />} />
          <Route path="/mechanics" element={<Mechanics />} />
          <Route path="/add-bus" element={<AddBus />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
