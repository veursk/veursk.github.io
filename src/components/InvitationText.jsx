import styled from "styled-components";

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 50px auto;
  line-height: 2;
  word-break: keep-all;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const TextLine = styled.p`
  margin: 0;
  padding: 0;
`;

function InvitationText() {
  return (
    <TextContainer>
      <TextLine>서로가 마주보며 다져온 사랑을</TextLine>
      <TextLine>이제 함께 한 곳을 바라보며</TextLine>
      <TextLine>걸어갈 수 있는 큰 사랑으로 키우고자 합니다.</TextLine>
      <TextLine>저희 두 사람이 사랑의 이름으로</TextLine>
      <TextLine>지켜나갈 수 있게 앞날을</TextLine>
      <TextLine>축복해 주시면 감사하겠습니다.</TextLine>
    </TextContainer>
  );
}

export default InvitationText;
