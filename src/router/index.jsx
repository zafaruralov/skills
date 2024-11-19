import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidatesFilter from "../pages/Candidates";

const Layout = React.lazy(() => import("../layouts/layout"));

function AppRouter() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="chat/:id" element={<ChatIntroduction />} /> */}
          </Route>
          <Route path="/cadidates" element={<CandidatesFilter />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default AppRouter;
