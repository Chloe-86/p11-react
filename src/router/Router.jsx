//router.jsx
import { Route, Routes } from 'react-router-dom'; 
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import PageDetail from '../template/PageDetail.jsx';
import NotFound from '../components/NotFound';
import { useJsonDataContext } from "../api/jsonDataContext.jsx";

const Router = () => {
  const { jsonData } = useJsonDataContext()
  if (!jsonData) {
      return <div aria-live="polite">Loading...</div>;
    }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages/:id" element={<PageDetail />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default Router;
