import { Route, Routes } from "react-router-dom";
import { History } from "./components/pages/History";
import { Home } from "./components/pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="history" element={<History />} />
    </Routes>
  );
}
