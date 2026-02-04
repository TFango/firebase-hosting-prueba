import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../searchFrom/searchFrom";

import style from "./layout.css";

function Layout() {
  return (
    <div className={style.root}>
      <SearchForm />
      <Suspense fallback={<p>Cargando...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export { Layout };
