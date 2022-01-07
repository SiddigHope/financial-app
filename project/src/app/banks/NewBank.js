import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

export default function NewBank(props) {
  const { toggleModal, modalStatus } = props;
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  React.useEffect(() => {
    console.log(modalStatus);
  }, [modalStatus]);

  return (
    <div>
      {/* <Button onClick={() => toggleModal(true)}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalStatus}
        onClose={() => toggleModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* <Fade in={modalStatus}> */}
        <ModalContent />
        {/* </Fade> */}
      </Modal>
    </div>
  );
}

function ModalContent() {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState(require('./../../assets/images/fainance/CBOS.jpg'));
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    console.log(event);
  };

  const handleValueChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "image":
        // setImage(require(event.target.file[0]));
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
          placeholder="اسم البنك"
          onChange={handleValueChange}
          required
        />
        <input
          type="text"
          name="address"
          style={inputStyle}
          className="form-control"
          placeholder="عنوان البنك"
          onChange={handleValueChange}
          required
        />
        <input
          type="email"
          name="email"
          style={inputStyle}
          className="form-control"
          placeholder="ايميل البنك"
          onChange={handleValueChange}
          required
        />
        <input
          type="password"
          name="password"
          style={inputStyle}
          className="form-control"
          placeholder="كلمة المرور"
          onChange={handleValueChange}
          required
        />
        <input
          type="file"
          name="image"
          style={inputStyle}
          className="form-control"
          placeholder="شعار البنك"
          onChange={handleValueChange}
          required
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
