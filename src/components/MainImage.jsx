import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const WeddingImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

function MainImage() {
  return (
    <ImageContainer>
      <WeddingImage
        src="src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-13 012.jpeg"
        alt="Wedding"
      />
    </ImageContainer>
  );
}

export default MainImage;
