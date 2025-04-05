import { Routes, Route } from "react-router";
import { Home, NotFound, ListPage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/stories" element={<ListPage />} />
    </Routes>
  );
};

export default AppRoutes;
