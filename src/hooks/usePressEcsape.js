import { useEffect } from "react";

function usePressEscape(dependence, callback) {
  useEffect(() => {
    if (!dependence) return;

    const onEscPress = (e) => {
      if (e.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keyup", onEscPress);

    return () => {
      document.removeEventListener("keyup", onEscPress);
    };
  }, [dependence, callback]);
}

export default usePressEscape;
