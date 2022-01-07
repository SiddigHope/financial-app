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

export default function NewCurrency(props) {
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
  const [sell, setSell] = React.useState("");
  const [buy, setBuy] = React.useState("");

  const handleSubmit = (event) => {
    console.log(event);
  };

  const handleValueChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "sell":
        setSell(event.target.value);
        break;
      case "buy":
        setBuy(event.target.value);
        break;
    }
  };

  return (
    <Box sx={style} className="bg-gradient-primary">
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          style={inputStyle}
          name="name"
          className="form-control"
          placeholder="اسم العملة"
          onChange={handleValueChange}
          required
        />
        <input
          type="number"
          name="buy"
          step='any'
          style={inputStyle}
          className="form-control"
          placeholder="سعر الشراء"
          onChange={handleValueChange}
          required
        />
        <input
          type="number"
          name="sell"
          step='any'
          style={inputStyle}
          className="form-control"
          placeholder="سعر البيع"
          onChange={handleValueChange}
          required
        />
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
