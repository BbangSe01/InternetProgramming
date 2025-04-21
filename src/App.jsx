import styled from "styled-components";
import Header from "./layout/Header";
import CurMusicalPage from "./pages/CurrentMusical/CurMusicalPage";
function App() {
  return (
    <Screen>
      <Header />
      <CurMusicalPage />
    </Screen>
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
