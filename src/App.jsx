import styled from "styled-components";
import Header from "./layout/Header";
import CurMusicalPage from "./pages/CurrentMusical/CurMusicalPage";
import DetailPage from "./pages/Detail/DetailPage";
import TicketingPage from "./pages/Ticketing/TicketingPage";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Screen>
        <Header />
        <Routes>
          <Route path="/" element={<CurMusicalPage />}></Route>
          <Route path="/DetailPage" element={<DetailPage />}></Route>
          <Route path="/TicketingPage" element={<TicketingPage />}></Route>
        </Routes>
      </Screen>
    </BrowserRouter>
  );
}

export default App;

const Screen = styled.div`
  width: 100vw;
  // 좌우 스크롤 방지
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 62px;
`;
