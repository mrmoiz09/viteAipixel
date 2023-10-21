import { useState, useEffect } from "react";

export default function UseMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log(setMousePosition({ x: e.clientX, y: e.clientY }));
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
}