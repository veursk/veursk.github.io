import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  text-align: center;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Names = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0.1em;
`;

const DateInfo = styled.div`
  margin-top: 10px;
  font-size: 18px;
  line-height: 1.6;
`;

const Venue = styled.div`
  margin-top: 5px;
  font-size: 16px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Names>
        조현빈
        <br />
        김예나
      </Names>
      <DateInfo>2026. 04. 11. SAT PM 02:30</DateInfo>
      <Venue>건국대학교 웨딩홀</Venue>
    </HeaderContainer>
  );
}

export default Header;
