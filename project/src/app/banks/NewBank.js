import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { storeNewBank, updateBank } from "../shared/functions/banks";
import { CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";

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
  const { toggleModal, modalStatus, updateData, item, type } = props;

  React.useEffect(() => {
    console.log(modalStatus);
  }, [modalStatus]);

  return (
    <div>
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
        <ModalContent
          updateData={updateData}
          toggleModal={toggleModal}
          item={item}
          type={type}
        />
        {/* </Fade> */}
      </Modal>
    </div>
  );
}

function ModalContent(props) {
  const { updateData, toggleModal, item, type } = props;
  const [name, setName] = React.useState(type == "update" ? item.name : "");
  const [logo, setLogo] = React.useState([]);
  const [selected, setSelected] = React.useState(require('./../../assets/images/fainance/img.jpeg'));
  const [loading, setLoading] = React.useState(false);
  const [address, setAddress] = React.useState(
    type == "update" ? item.address : ""
  );
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      name,
      address,
      logo,
    };

    const stored =
      type == "update"
        ? await updateBank(item.id, data)
        : await storeNewBank(data);

    if (stored) {
      updateData();
      toggleModal(false);
      setLoading(false);
      enqueueSnackbar("تمت عملية الاضافة بنجاح", { varianr: "success" });
      return;
    }
    setLoading(false);
    enqueueSnackbar("لم تتم عملية الاضافة", { varianr: "error" });
  };

  const handleValueChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "image":
        readFile(event.target);
        // setLogo(event.target.files[0]);
        break;
    }
  };

  const readFile = (input) => {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      console.log(file.type.toString());
      if (
        file.type.toString() == "image/png" ||
        file.type.toString() == "image/jgp" ||
        file.type.toString() == "image/jpeg"
      ) {
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          setSelected(e.target.result);
        };
      }
    }
  };

  return (
    <Box sx={style} className="bg-gradient-info">
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          style={inputStyle}
          name="name"
          value={name}
          className="form-control"
          placeholder="اسم البنك"
          onChange={handleValueChange}
          required={type == "update" ? false : true}
        />
        <input
          type="text"
          name="address"
          style={inputStyle}
          value={address}
          className="form-control"
          placeholder="عنوان البنك"
          onChange={handleValueChange}
          required={type == "update" ? false : true}
        />
        <input
          type="file"
          name="image"
          id="image"
          style={inputStyle}
          className="form-control"
          placeholder="شعار البنك"
          onChange={handleValueChange}
          required={type == "update" ? false : true}
        />
        <div class="card shadow d-flex">
          <span> {"mkmmkmmkmmkmkmkmkmkmmmkmkmkmkmmmmmmkkkmmkmm"} </span>
          <label style={{cursor: 'pointer'}} for="image">
            {" "}
            <img src={selected} style={{ width: 100, height: 100 }} />{" "}
          </label>
        </div>
        <div
          className="bg-success shadow"
          style={{
            display: "flex",
            flex: 1,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <input
              type="submit"
              style={buttonStyle}
              className="btn btn-success"
              value="ادخال"
            />
          )}
        </div>
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
  fontSize: 18,
  // textAlign: "right",
  width: "100%",
  height: 50,
  backgroundColor: "transparent",
};
