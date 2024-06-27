import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@/router/index";

import "./App.scss";

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        {routes.map((route) => <Route
          key={route.name}
          path={route.path}
          element={<route.component />}
        />)}
      </Routes>
    </BrowserRouter>
    </>
  );
};
