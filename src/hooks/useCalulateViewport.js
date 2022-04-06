import { useCallback, useEffect, useState } from 'react';

export function useCalculateViewPort() {
  const [viewPort, setViewPort] = useState(window.innerWidth);

  const resizeViewPort = useCallback(
    (e) => {
      setViewPort(window.innerWidth);
      e.stopPropagation();
    },
    [viewPort],
  );

  useEffect(() => {
    window.addEventListener('resize', resizeViewPort);

    return () => window.removeEventListener('resize', resizeViewPort);
  }, [viewPort]);

  return { viewPort };
}
