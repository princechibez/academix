import styled from "styled-components";

const ReviewWrap = styled.section`
  padding: 14px 0;
  display: flex;
  align-items: flex-start;
  margin-top: 14px;
  border-top: 1px solid #6B6B6B;
  gap: 32px;
  height: fit-content;
`;
const ReviewerDP = styled.div`
  width: 70px;
  height: 70px;
  background-size: contain;
`;

const ReviewDescriptions = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
`;

export { ReviewWrap, ReviewerDP, ReviewDescriptions };
