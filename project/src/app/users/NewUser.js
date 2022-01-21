import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { storeNewUser, updateUser } from "../shared/functions/users/central";
import { useSnackbar } from 'notistack'
import { CircularProgress } from "@mui/material";

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
  const { toggleModal, modalStatus, updateData, item, type } = props;

  React.useEffect(() => {
    console.log(item.length);
  }, []);

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
        <ModalContent
          updateData={updateData}
          item={item}
          type={type}
          toggleModal={toggleModal}
        />
      </Modal>
    </div>
  );
}

function ModalContent(props) {
  const { updateData, toggleModal, item, type } = props;
  const [name, setName] = React.useState(type == "update" ? item.name : "");
  const [email, setEmail] = React.useState(type == "update" ? item.email : "");
  const [password, setPassword] = React.useState();
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let data = {};
    if (password == "") {
      data = {
        name,
        email,
      };
    } else {
      data = {
        name,
        email,
        password,
      };
    }

    const stored =
      type == "update"
        ? await updateUser(item.id, data)
        : await storeNewUser(data);

    if (stored) {
      updateData();
      toggleModal(false);
      setLoading(false);
      enqueueSnackbar("تم ادخال مستخدم جديد للنظام", {variant: 'success'})
      return
    }
    setLoading(false);
    enqueueSnackbar("لم يتم ادخال المستخدم", {variant: 'error'})
  };

  const handleValueChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
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
          value={name}
          className="form-control"
          placeholder="اسم المستخدم"
          onChange={handleValueChange}
          required={type == "update" ? false : true}
        />
        <input
          type="email"
          name="email"
          style={inputStyle}
          value={email}
          className="form-control"
          placeholder="البريد الالكتروني"
          onChange={handleValueChange}
          required={type == "update" ? false : true}
        />
        <input
          type="password"
          name="password"
          style={inputStyle}
          value={password}
          className="form-control"
          placeholder="كلمة المرور"
          onChange={handleValueChange}
          required={type == "update" ? false : true}
        />
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

