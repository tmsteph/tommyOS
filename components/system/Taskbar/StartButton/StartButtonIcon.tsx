import { memo } from "react";

const StartButtonIcon = memo(() => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      <linearGradient id="startPortalGlow" x1="14" y1="10" x2="50" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7cf0ff" />
        <stop offset="0.45" stopColor="#47a3ff" />
        <stop offset="1" stopColor="#7c5dff" />
      </linearGradient>
      <radialGradient id="startInnerLight" cx="50%" cy="45%" r="55%">
        <stop stopColor="#1c2a5a" offset="0" />
        <stop stopColor="#0c1128" offset="1" />
      </radialGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="#050814" />
    <rect x="6" y="6" width="52" height="52" rx="12" fill="url(#startInnerLight)" />
    <path
      d="M16 28.5c0-8.5 8.5-15.5 18.5-15.5S53 20 53 28.5c0 5.7-4 10.3-10.2 12.1l-2.9.8c-3.2.8-4.9 2-5.6 4.9l-.7 3.1h-6.7l1-4.9c1.2-5.5 5.2-7.9 9.5-9l2.8-.7c3-.8 4.8-2.7 4.8-5.4 0-4.1-4.2-7.6-10.3-7.6-5.8 0-10.9 3.3-10.9 8.2 0 1.6.7 3.6 1.8 5l-5.3 3.2C17.2 35.7 16 32.1 16 28.5Z"
      fill="url(#startPortalGlow)"
    />
    <path
      d="M18.5 44.5c3 4.3 8.4 6.8 14.5 6.8 6.4 0 12.1-2.9 15-7.6"
      fill="none"
      stroke="#7cf0ff"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    <circle cx="46.5" cy="18.5" r="4" fill="#7cf0ff" opacity="0.9" />
  </svg>
));

export default StartButtonIcon;
