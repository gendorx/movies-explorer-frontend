import { useEffect, useCallback, useState } from "react";

export default function useScreenWidth() {
  const getScreenWidth = useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    function handleScreenWidth() {
      setScreenWidth(getScreenWidth());
    }

    window.addEventListener("resize", handleScreenWidth);
    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, [getScreenWidth]);

  return screenWidth;
}
