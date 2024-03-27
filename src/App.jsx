import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandigPage from "./landing-page/LandigPage";

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/landing-page" element={<LandigPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
