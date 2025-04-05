import { Routes, Route } from "react-router";
import { HomePage, NotFoundPage, ListPage, DetailsPage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/stories" element={<ListPage />} />
      <Route path="/stories/:username/:slug" element={<DetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
