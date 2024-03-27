import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandigPage from "./landing-page/LandigPage";
import ForumPage from "./landing-page/ForumPage";
import LoginPage from "./Login";

function App() {
  return (
    <Router>
      <Suspense>
        <LandigPage />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/travel-forum" element={<ForumPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
