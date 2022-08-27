import { Route, Routes } from "react-router-dom";
import { History } from "./components/pages/History";
import { Home } from "./components/pages/Home";
import { DefaultLayout } from "./layouts/DefaltLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
