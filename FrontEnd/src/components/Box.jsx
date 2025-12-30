import React, { forwardRef } from 'react';

const Box = forwardRef((props, ref) => {
  return (
    <div
      className="box"
      ref={ref}
      style={{ border: "1px solid black", padding: "10px" }}
    >
      {props.children}
    </div>
  );
});

// Important: Add a display name for better debugging in React DevTools
Box.displayName = 'Box';

export default Box;
