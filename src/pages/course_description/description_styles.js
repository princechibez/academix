import styled from "styled-components";
import { down } from "styled-breakpoints";

const DescriptionWrapper = styled.main`
  height: fit-content;
  width: 100%;
  padding: 12px 32px;
  box-sizing: border-box;
`;

const DescriptionHeader = styled.header`
  width: 70%;
  margin: 30px 0;
`;

const DescriptionBrief = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${down("lg")} {
    flex-direction: column;
    gap: 14px;
  }
`;

const PreviewVideo = styled.div`
  width: 55%;
  height: 400px;

  ${down("md")} {
    width: 80%;
    height: 300px;
    align-self: center;
  }
`;

const MediaElement = styled.img`
  object-fit: cover;
  background-size: contain;
  background-position: center;
`;

const PrimaryDescription = styled.div`
  width: 40%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 14px;

  ${down("lg")} {
    width: 80%;
    align-self: center;
  }
`;

const EvenButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  ${down("md")} {
    width: 100%;
  }
`;

const PrimaryDescWrapper = styled.div`
  text-align: left;
  padding: 14px 8px;
  width: 80%;
  border-radius: 8px;
  background-color: #f6f6f6;

  ${down("md")} {
    width: 100%;
  }
`;

const PrimaryDescList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 80%;
  align-items: flex-start;
`;

const PrimaryDescListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
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
`;

const CourseContentText = styled.div`
  width: 90%;
`;

export {
  DescriptionWrapper,
  DescriptionHeader,
  DescriptionBrief,
  DescTextSection,
  PreviewVideo,
  CourseContentSection,
  CourseContentText,
  MediaElement,
  PrimaryDescList,
  PrimaryDescListItem,
  EvenButtons,
  PrimaryDescWrapper,
  PrimaryDescription,
};
