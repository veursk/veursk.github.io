import styled from "styled-components";
import { SectionTitle, Button } from "../styles/CommonStyles";

const GuestBookContainer = styled.section`
  margin: 40px 0;
`;

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const MessageList = styled.div`
  margin: 20px 0;
`;

const Message = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eee;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .name {
    font-weight: bold;
  }

  .date {
    color: #888;
    font-size: 14px;
  }
`;

function GuestBook() {
  return (
    <GuestBookContainer>
      <SectionTitle>GUEST BOOK</SectionTitle>

      <MessageForm>
        <Input type="text" placeholder="이름" />
        <Input type="text" placeholder="비밀번호" />
        <Input type="text" placeholder="메시지를 남겨주세요" />
        <Button type="submit">등록하기</Button>
      </MessageForm>

      <MessageList>
        <Message>
          <div className="header">
            <span className="name">김경열</span>
            <span className="date">2024-05-29 10:53</span>
          </div>
          <div>조현빈 배신자 행복해라</div>
        </Message>
        <Message>
          <div className="header">
            <span className="name">엄제윤</span>
            <span className="date">2024-05-29 09:46</span>
          </div>
          <div>경열아 소주 마시자</div>
        </Message>
      </MessageList>

      <div>
        <Button>더보기</Button>
      </div>
    </GuestBookContainer>
  );
}

export default GuestBook;
