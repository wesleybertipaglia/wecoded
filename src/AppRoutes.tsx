import { Routes, Route } from "react-router";
import { HomePage, NotFoundPage, ListPage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/stories" element={<ListPage />} />
    </Routes>
  );
};

export default AppRoutes;
