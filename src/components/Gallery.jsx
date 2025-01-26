import styled from "styled-components";
import { SectionTitle } from "../styles/CommonStyles";

const GalleryContainer = styled.section`
  margin: 40px 0;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: 20px 0;
`;

const ImageContainer = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function Gallery() {
  const images = [
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-00-50 004.jpeg",
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-08 002.jpeg",
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-08 003.jpeg",
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-08 004.jpeg",
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-09 005.jpeg",
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-10 006.jpeg",
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-10 007.jpeg",
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-11 008.jpeg",
    "src/assets/photos/KakaoTalk_Photo_2025-01-26-17-01-11 010.jpeg",
  ];

  return (
    <GalleryContainer>
      <SectionTitle>GALLERY</SectionTitle>
      <GalleryGrid>
        {images.map((src, index) => (
          <ImageContainer key={index}>
            <Image src={src} alt={`Wedding gallery ${index + 1}`} />
          </ImageContainer>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
}

export default Gallery;
