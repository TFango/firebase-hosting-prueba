import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout/layout";
import { Home } from "../pages/home";
import { SearchResult } from "../pages/searchResult";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search/:query" element={<SearchResult />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
