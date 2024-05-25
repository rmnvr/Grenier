import React from "react";

const OffsetAnchor = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <div id={props.id} style={{ position: "absolute", top: -70, left: 0 }} />
    </div>
  );
}

export default OffsetAnchor;
