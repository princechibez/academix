import styled from "styled-components";

const ProfileWrap = styled.section`
  padding: 14px 0;
  display: flex;
  align-items: flex-start;
  margin-top: 14px;
  gap: 32px;
  height: fit-content;
`;
const ProfileerDP = styled.div`
  width: 70px;
  height: 70px;
  background-size: contain;
`;

const ProfileDescriptions = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
`;

export { ProfileWrap, ProfileerDP, ProfileDescriptions };
