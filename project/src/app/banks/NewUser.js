import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { storeNewBankUser } from "../shared/functions/users/banks";
// import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewUser(props) {
  const { toggleUserModal, modalStatus, id } = props;
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  React.useEffect(() => {
    console.log(modalStatus);
  }, [modalStatus]);

  return (
    <div>
      {/* <Button onClick={() => toggleUserModal(true)}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalStatus}
        onClose={() => toggleUserModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* <Fade in={modalStatus}> */}
        <ModalContent toggleUserModal={toggleUserModal} bank_id={id} />
        {/* </Fade> */}
      </Modal>
    </div>
  );
}

function ModalContent(props) {
  const { updateData, toggleUserModal, bank_id } = props;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [DOB, setDOB] = React.useState("");
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      date_of_birth: DOB,
      email,
      bank_id,
      password,
      national_id: id,
    };

    const stored = await storeNewBankUser(data);

    if (stored) {
      toggleUserModal(false);
    }
  };

  const handleValueChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "id":
        setId(event.target.value);
        break;
      case "DOB":
        setDOB(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
    }
  };

  return (
    <Box sx={style} className="bg-gradient-info">
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          style={inputStyle}
          name="name"
          className="form-control"
          placeholder="اسم المسخدم"
          onChange={handleValueChange}
          required={true}
        />
        <input
          type="email"
          name="email"
          style={inputStyle}
          className="form-control"
          placeholder="الايميل"
          onChange={handleValueChange}
          required={true}
        />
        <input
          type="date"
          name="DOB"
          style={inputStyle}
          className="form-control"
          placeholder="تاريخ الميلاد"
          onChange={handleValueChange}
          required={true}
        />
        <input
          type="number"
          name="id"
          style={inputStyle}
          className="form-control"
          placeholder="رقم اثبات الهوية"
          onChange={handleValueChange}
          required={true}
        />
        <input
          type="password"
          name="password"
          style={inputStyle}
          value={password}
          className="form-control"
          placeholder="كلمة المرور"
          onChange={handleValueChange}
          required={true}
        />
        {/* <img src={image} style={{ width: 100, height: 100 }} /> */}
        <input
          type="submit"
          style={buttonStyle}
          className="btn btn-success shadow float-right"
          value="ادخال"
        />
      </form>
    </Box>
  );
}

const inputStyle = {
  marginBottom: 5,
  borderRadius: 10,
  fontSize: 18,
  textAlign: "right",
};
const buttonStyle = {
  marginBottom: 5,
  borderRadius: 10,
  fontSize: 18,
  textAlign: "right",
};
