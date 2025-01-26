import styled from "styled-components";
import Header from "./components/Header";
import MainImage from "./components/MainImage";
import InvitationText from "./components/InvitationText";
import FamilyInfo from "./components/FamilyInfo";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import GuestBook from "./components/GuestBook";

const AppContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Noto Sans KR", sans-serif;
  background-color: #fff;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainImage />
      <InvitationText />
      <FamilyInfo />
      <Gallery />
      <Location />
      <GuestBook />
    </AppContainer>
  );
}

export default App;
