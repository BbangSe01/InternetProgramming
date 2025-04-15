import "./App.css";
import styled from "styled-components";
import Header from "./layout/Header";
function App() {
  return (
    <Screen>
      <Header />
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
`;
