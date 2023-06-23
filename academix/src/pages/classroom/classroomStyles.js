import styled from "styled-components";
import { down } from "styled-breakpoints";

const DescriptionWrapper = styled.main`
  height: fit-content;
  width: 100%;
  padding: 12px 24px;
  gap: 12px;
  padding-top: 80px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const DescriptionHeader = styled.header`
  width: 70%;
  margin: 10px 0;
`;

const PreviewVideo = styled.div`
  width: 100%;
  padding: 1px;
  border: 1px solid #aaa;
  height: 400px;
  margin: auto;

  ${down("lg")} {
    width: 100%;
    height: 400px;
    align-self: center;
  }
`;

const DescTextSection = styled.section`
  display: flex;
  flex-flow: column;
  gap: 12px;
  margin: 32px 0;
  width: 90%;
  align-items: flex-start;
`;

const CourseContentSection = styled.section`
  margin: 32px 0;
  display: flex;
  flex-flow: column;
  gap: 8px;
  width: 35%;
  height: 100vh;
  overflow-y: scroll;
`;

const CourseDetailsSection = styled.section`
  width: 65%;
  margin: 32px 0;
`;

export {
  DescriptionWrapper,
  DescriptionHeader,
  DescTextSection,
  PreviewVideo,
  CourseContentSection,
  CourseDetailsSection
};
