import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import CareerToolkit from "./pages/CareerToolkit";
import ProjectBlueprint from "./pages/ProjectBlueprint";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/career-toolkit" element={<CareerToolkit />} />
        <Route path="/projects/:slug" element={<ProjectBlueprint />} />
      </Routes>
    </Layout>
  );
}

export default App;
