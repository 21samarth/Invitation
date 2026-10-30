import { useEffect } from 'react';

const LEGACY_BUNDLE = '/assets/index-CcgxHIwM.js';

/**
 * Mounts the original React export unchanged.
 *
 * Source files were not included with the supplied static export. Loading its
 * bundle here is intentional: it preserves the rendered invitation and all
 * existing interactions while providing a standard React/Vite project shell.
 */
export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = LEGACY_BUNDLE;
    document.body.append(script);

    return () => script.remove();
  }, []);

  return null;
}
