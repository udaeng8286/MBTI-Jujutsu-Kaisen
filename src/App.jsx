import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
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
