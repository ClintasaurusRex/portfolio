import { useState, useEffect } from "react";

const useShowProjects = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProjects(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);
  return showProjects;
};

export default useShowProjects;
