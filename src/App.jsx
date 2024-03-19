import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import StartPage from "./pages/StartPage";
import TestPage from "./pages/TestPage";
import LoadingPage from "./pages/LoadingPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Container>
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
`;
