declare module '*.svg?url' {
  /**
   * For use with next/image
   */
  const content: string;

  export default content;
}

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;

  export default SVG;
}
