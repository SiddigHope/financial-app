import axios from "axios";
import { mainCentralDomain } from "../../../../serviceWorker";
import UserClass from "../../../../authHandler";

var user = UserClass.getUser();

export const storeNewBankUser = async (data) => {
  try {
    const options = {
      method: "POST",
      url: mainCentralDomain + "employee",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.token,
      },
      data,
    };

    const request = await axios(options)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    // console.log(request);
    return request.data ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

