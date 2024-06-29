import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Employees from "./Employees";
import EditEmployee from "./EditEmployee";

import { useParams } from "react-router-dom";

export default function EditEmployeeLayout() {
  const Navigate = useNavigate();
  const { serial } = useParams();
  const handleClose = () => Navigate("/employees");

  return (
    <>
      <Modal show={true} onHide={handleClose} centered>
        <Modal.Body>
          <EditEmployee serial={serial} />
        </Modal.Body>
      </Modal>
      <Employees />
    </>
  );
}
