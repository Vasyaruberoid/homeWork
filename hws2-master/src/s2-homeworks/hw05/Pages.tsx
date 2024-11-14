import { Routes, Route, Navigate } from "react-router-dom";
import Error404 from "./pages/Error404";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus",
};

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR} />} />
        <Route path="/" element={<Navigate to={PATH.JUNIOR} />} />
        <Route path="/" element={<Navigate to={PATH.JUNIOR_PLUS} />} />
        <Route path="" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Pages;
