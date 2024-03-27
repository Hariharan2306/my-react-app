import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandigPage from "./landing-page/LandigPage";
import ForumPage from "./landing-page/forumPage";

function App() {
  return (
    <Router>
      <Suspense>
        <LandigPage />
        <Routes>
          <Route path="/travel-forum" element={<ForumPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
