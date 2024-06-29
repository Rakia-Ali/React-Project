import { useNavigate } from "react-router-dom";
import NewEmployee from "./NewEmployee";
import { Modal } from "react-bootstrap";
import Employees from "./Employees";

export default function NewEmployeeLayout() {
  const Navigate = useNavigate();

  const handleClose = () => Navigate("/employees");

  return (
    <>
      <Modal show={true} onHide={handleClose} centered>
        <Modal.Body>
          <NewEmployee />
        </Modal.Body>
      </Modal>
      <Employees />
    </>
  );
}
