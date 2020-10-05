//@flow
import React from "react";
import {connect} from "react-redux";
import Alert from "react-bootstrap/Alert";

import {makeMainMessageProps} from "./selectors";
import {closeMessage} from "./actions";

import type {ComponentProps as Props} from "./types";

const MainMessage = (props: Props) => {
  const {isOpen = false, header = "", type, text} = props;

  const handleCliclOnClose = () => {
    const {onClose} = props;
    if (onClose) onClose();
  };

  const variant = type === "warn" ? "danger" : type === "success" ? "success" : "info";

  return isOpen ? (
    <div className="main-message">
      <Alert variant={variant}>
        <Alert.Heading>{header}</Alert.Heading>
        <p>{text}</p>
      </Alert>
      <div className="main-message__close-button" onClick={handleCliclOnClose} />
    </div>
  ) : null;
};

const mapDispatchToProps = {
  onClose: () => closeMessage()
};

//$FlowFixMe
export default connect(makeMainMessageProps, mapDispatchToProps)(MainMessage);
