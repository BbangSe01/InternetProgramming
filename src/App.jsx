import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./layout/Header";
import CurMusicalPage from "./pages/CurrentMusical/CurMusicalPage";
import DetailPage from "./pages/Detail/DetailPage";
import TicketingPage from "./pages/Ticketing/TicketingPage";
import MorePage from "./pages/morePage/MorePage";
import LoginPage from "./pages/login/LoginPage";
import FavoritesPage from "./pages/Favorites/FavoritesPage";
import { BrowserRouter, Routes, Route } from "react-router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Screen>
          <Header />
          <Routes>
            <Route path="/" element={<CurMusicalPage />} />
            <Route path="/DetailPage/:id" element={<DetailPage />} />
            <Route path="/TicketingPage" element={<TicketingPage />} />
            <Route path="/MorePage" element={<MorePage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/favoritePage" element={<FavoritesPage />} />
          </Routes>
        </Screen>
      </BrowserRouter>
    </QueryClientProvider>
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
