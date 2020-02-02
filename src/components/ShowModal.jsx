import React, { Fragment, useState } from "react";

import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { modalClose } from "../containers/actions/index.js";

function ShowModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    modalClose();
  };

  const { modalClose, post } = props;

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body> {post.title} </Modal.Body>
        <Modal.Body> {post.body} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

const mapDispatchToProps = {
  modalClose: modalClose
};

const mapStateToProps = state => ({ post: state.post });

export default connect(mapStateToProps, mapDispatchToProps)(ShowModal);
