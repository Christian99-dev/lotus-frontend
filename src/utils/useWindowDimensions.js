import { useState, useEffect } from 'react';

const getWindowDimensions = typeof window !== "undefined" ? () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
} : () => {return {width: 0, height: 0}};

export default typeof window !== "undefined" ? function useWindowDimensions() {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
} : () => 0