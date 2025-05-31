  // MaskSVG.js
  import React from 'react';

  const MaskSVG = () => (
    <svg width="0" height="0" viewBox="0 0 400 600">
      <defs>
        <mask id="my-svg-mask">
          <rect fill="#000000" x="0" y="0" width="400" height="600"></rect>
          <polygon fill="#FFFFFF" points="200.5 152 349 449 52 449"></polygon>
        </mask>
      </defs>
    </svg>
  );

  export default MaskSVG;