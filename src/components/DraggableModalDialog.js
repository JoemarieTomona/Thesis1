import React, { useRef } from "react";
import Draggable from "react-draggable";
import { ModalDialog } from "react-bootstrap";

const DraggableModalDialog = (props) => {
  const nodeRef = useRef(null);

  return (
    <Draggable handle=".modal-header" nodeRef={nodeRef}>
      <div ref={nodeRef}>
        <ModalDialog {...props} />
      </div>
    </Draggable>
  );
};

export default DraggableModalDialog;
