import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  storeNewCurrency,
  updateCurrency,
} from "../shared/functions/currencies";
import { CircularProgress } from "@mui/material";
import {useSnackbar} from 'notistack'

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
  const [name, setName] = React.useState(
    type == "update" ? item.currency.name : ""
  );
  const [sell, setSell] = React.useState(
    type == "update" ? item.sale_price : ""
  );
  const [buy, setBuy] = React.useState(type == "update" ? item.buy_price : "");
  const [loading, setLoading] = React.useState(false);
  const {enqueueSnackbar} = useSnackbar()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      sale_price: sell,
      buy_price: buy,
      name,
    };

    const stored =
      type == "update"
        ? await updateCurrency(item.id, data)
        : await storeNewCurrency(data);

    if (stored) {
      updateData();
      toggleModal(false);
      setLoading(false);
      enqueueSnackbar("?????? ?????????? ?????????????? ??????????", {variant: 'success'})
      return
    }
    setLoading(false);
    enqueueSnackbar("???? ?????? ?????????????? ???????? ?????? ????????", {variant: 'error'})
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
          value={name}
          className="form-control"
          placeholder="?????? ????????????"
          onChange={handleValueChange}
          required={type == "update" ? false : true}
        />
        <input
          type="number"
          name="sell"
          step="any"
          style={inputStyle}
          value={sell}
          className="form-control"
          placeholder="?????? ????????????"
          onChange={handleValueChange}
          required={type == "update" ? false : true}
        />
        <input
          type="number"
          name="buy"
          step="any"
          style={inputStyle}
          value={buy}
          className="form-control"
          placeholder="?????? ??????????"
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
              value="??????????"
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
