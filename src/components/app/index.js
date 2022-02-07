import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "layouts/default";

// pages
import Home from "pages/home";
import About from "pages/about";
import Contact from "pages/contact";
import Sketches from "pages/sketches";

import NotFound from "pages/notfound";

const App = () => {
  return (
    <DefaultLayout>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/sketches/:id" element={<Sketches/>} exact />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </DefaultLayout>
  );
};

export default App;
