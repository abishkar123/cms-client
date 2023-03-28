import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../system/SystemSlice";

export const CustomModal = ({ title, children, ...props }) => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.system);

  useEffect(() => {}, [showModal]);

  return (
    <Modal
      {...props}
      show={showModal}
      onHide={() => dispatch(setShowModal(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    
    </Modal>
  );
};