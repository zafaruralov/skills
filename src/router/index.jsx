import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidatesFilter from "../pages/Candidates";
import Profile from "../pages/Profile/profile";
import CareerLayout from "../layouts/career-layout";

const Layout = React.lazy(() => import("../layouts/layout"));

function AppRouter() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/candidates" element={<CandidatesFilter />} />
          <Route path="/candidates/:id" element={<Profile />} />
          <Route path="/career" element={<CareerLayout />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default AppRouter;
