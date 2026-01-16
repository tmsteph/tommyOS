import styled from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const StyledIssueLink = styled.a`
  bottom: calc(${TASKBAR_HEIGHT}px + 0.5rem);
  color: #fff;
  font-size: 0.85rem;
  opacity: 0.8;
  position: absolute;
  right: 1.5rem;
  text-decoration: none;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  transition: opacity 0.2s ease-in-out;
  z-index: 1;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

export default StyledIssueLink;
