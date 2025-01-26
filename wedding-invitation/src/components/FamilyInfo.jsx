import styled from "styled-components";

const FamilySection = styled.section`
  width: 100%;
  margin: 40px 0;
  text-align: center;
`;

const FamilyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
`;

const FamilyColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Name = styled.div`
  font-size: 14px;
  color: #666;
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 15px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 20px;
`;

function FamilyInfo() {
  return (
    <FamilySection>
      <FamilyRow>
        <FamilyColumn>
          <PersonInfo>
            <Title>신랑</Title>
            <ContactButtons>
              <IconButton>📞</IconButton>
              <IconButton>✉️</IconButton>
            </ContactButtons>
          </PersonInfo>

          <PersonInfo>
            <Title>신랑 측 혼주</Title>
            <Name>아버지 현빈아빠</Name>
            <ContactButtons>
              <IconButton>📞</IconButton>
              <IconButton>✉️</IconButton>
            </ContactButtons>
            <Name>어머니 현빈엄마</Name>
            <ContactButtons>
              <IconButton>📞</IconButton>
              <IconButton>✉️</IconButton>
            </ContactButtons>
          </PersonInfo>
        </FamilyColumn>

        <FamilyColumn>
          <PersonInfo>
            <Title>신부</Title>
            <ContactButtons>
              <IconButton>📞</IconButton>
              <IconButton>✉️</IconButton>
            </ContactButtons>
          </PersonInfo>

          <PersonInfo>
            <Title>신부 측 혼주</Title>
            <Name>아버지 예나아빠</Name>
            <ContactButtons>
              <IconButton>📞</IconButton>
              <IconButton>✉️</IconButton>
            </ContactButtons>
            <Name>어머니 예나엄마</Name>
            <ContactButtons>
              <IconButton>📞</IconButton>
              <IconButton>✉️</IconButton>
            </ContactButtons>
          </PersonInfo>
        </FamilyColumn>
      </FamilyRow>
    </FamilySection>
  );
}

export default FamilyInfo;
