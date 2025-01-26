import styled from "styled-components";
import { SectionTitle, Button } from "../styles/CommonStyles";

const LocationContainer = styled.section`
  margin: 40px 0;
`;

const VenueInfo = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Address = styled.p`
  margin: 10px 0;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 20px 0;
  background-color: #f0f0f0;
`;

const TransportInfo = styled.div`
  margin: 20px 0;
`;

const TransportItem = styled.div`
  margin: 15px 0;

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

function Location() {
  return (
    <LocationContainer>
      <SectionTitle>LOCATION</SectionTitle>
      <VenueInfo>
        <h3>KU컨벤션 웨딩홀</h3>
        <Address>
          서울특별시 광진구 아차산로36길 5 (자양동 227-336번지)
          건국대학교동문회관 KU컨벤션웨딩홀
        </Address>
        <div>02-447-7005</div>
      </VenueInfo>

      <MapContainer>{/* Add your map integration here */}</MapContainer>

      <TransportInfo>
        <TransportItem>
          <h3>버스안내</h3>
          <p>
            지선 2222, 2224, 3217, 3220, 4212 / 간선 240, 721 건국대학교앞 또는
            건대입구역 정류장 하차
          </p>
        </TransportItem>
        <TransportItem>
          <h3>지하철 안내</h3>
          <p>
            2호선 건대입구역 5번출구 5분거리 내 / 7호선 건대입구역 4번출구
            5분거리 내
          </p>
        </TransportItem>
        <TransportItem>
          <h3>주차 안내</h3>
          <p>KU컨벤션웨딩홀 전용주차장 이용 (1시간 무료)</p>
        </TransportItem>
      </TransportInfo>

      <Button>지도 보기</Button>
      <Button>전화하기</Button>
    </LocationContainer>
  );
}

export default Location;
