import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const TopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        show ? "block" : "hidden"
      } p-2 fixed right-8 bottom-8 rounded cursor-pointer shadow border border-gray-200 bg-gray-50 dark:border-gray-950 dark:bg-gray-800 transition`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default TopButton;
