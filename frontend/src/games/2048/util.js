import { useEffect } from "react";

export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};

export const getColors = (num) => {
  switch (num) {
    case 2:
  return "#B2DFDB"; // Light Teal
case 4:
  return "#80CBC4"; // Medium Teal
case 8:
  return "#4DB6AC"; // Teal
case 16:
  return "#00BBBB"; // Darker Teal
case 32:
  return "#00AA6B"; // Deeper Teal
case 64:
  return "#81C784"; // Green
case 128:
  return "#C8E6C9"; // Light Green
case 256:
  return "#A5D6A7"; // Medium Green
case 512:
  return "#81C784"; // Green
case 1024:
  return "#66BB6A"; // Darker Green
case 2048:
  return "#388E3C"; // Deep Green
default:
  return "#004D40"; // Very Dark Teal
  }
};