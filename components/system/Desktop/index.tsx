import { useRef } from "react";
import StyledDesktop from "components/system/Desktop/StyledDesktop";
import StyledIssueLink from "components/system/Desktop/StyledIssueLink";
import useWallpaper from "components/system/Desktop/Wallpapers/useWallpaper";
import FileManager from "components/system/Files/FileManager";
import useHeightOverride from "hooks/useHeightOverride";
import {
  DESKTOP_PATH,
  GITHUB_NEW_ISSUE_URL,
  PACKAGE_DATA,
} from "utils/constants";

const Desktop: FC = ({ children }) => {
  const heightOverride = useHeightOverride();
  const desktopRef = useRef<HTMLElement | null>(null);

  useWallpaper(desktopRef, heightOverride);

  const desktopNameStyle: React.CSSProperties = {
    bottom: "3.5rem",
    color: "white",
    fontSize: "4rem",
    opacity: 0.7,
    position: "absolute",
    right: "2rem",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  };

  return (
    <StyledDesktop ref={desktopRef} $height={heightOverride}>
      <div style={desktopNameStyle}>{PACKAGE_DATA.alias}</div>

      <FileManager
        url={DESKTOP_PATH}
        view="icon"
        allowMovingDraggableEntries
        hideLoading
        hideScrolling
        isDesktop
        loadIconsImmediately
      />
      <StyledIssueLink
        href={GITHUB_NEW_ISSUE_URL}
        rel="noreferrer"
        target="_blank"
      >
        Report an issue
      </StyledIssueLink>
      {children}
    </StyledDesktop>
  );
};

export default Desktop;
