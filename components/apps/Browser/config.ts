import { FAVICON_BASE_PATH } from "utils/constants";

type Bookmark = {
  icon: string;
  name: string;
  url: string;
};

export const bookmarks: Bookmark[] = [
  {
    icon: FAVICON_BASE_PATH,
    name: "3dvr.tech",
    url: "https://3dvr.tech/",
  },
  {
    icon: FAVICON_BASE_PATH,
    name: "tmsteph.com",
    url: "https://tmsteph.com/",
  },
  {
    icon: FAVICON_BASE_PATH,
    name: "portal.3dvr.tech",
    url: "https://portal.3dvr.tech/",
  },
  {
    icon: "/System/Icons/Favicons/google.webp",
    name: "Google",
    url: "https://www.google.com/webhp?igu=1",
  },
  {
    icon: "/System/Icons/Favicons/wikipedia.webp",
    name: "Wikipedia",
    url: "https://www.wikipedia.org/",
  },
  {
    icon: "/System/Icons/Favicons/archive.webp",
    name: "Internet Archive",
    url: "https://archive.org/",
  },
  {
    icon: "/System/Icons/Favicons/win96.webp",
    name: "Windows 96",
    url: "https://windows96.net/",
  },
  {
    icon: "/System/Icons/Favicons/aos.webp",
    name: "AaronOS",
    url: "https://aaronos.dev/",
  },
];

export const HOME_PAGE = "https://portal.3dvr.tech/";
