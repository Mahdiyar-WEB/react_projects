import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../routes";
import Layout from "../layout/Layout";
const ProjectsApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default ProjectsApp;
