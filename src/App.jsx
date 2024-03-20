import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import StartPage from "./pages/StartPage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import BackgroundMusic from "./components/BackgroundMusic";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    const gaTrackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    ReactGA.initialize(gaTrackingId, { debug: true });
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Container>
      <BackgroundMusic />
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  position: relative;
`;
