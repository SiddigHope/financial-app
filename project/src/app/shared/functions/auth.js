import axios from "axios";
import { mainCentralDomain } from "../../../serviceWorker";
import UserClass from "../../../authHandler";

var user = UserClass.getUser();

export const loginAsSuperAdmin = async (email, password) => {
  try {
    const options = {
      method: "POST",
      url: mainCentralDomain + "login",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: {
        email,
        password,
      },
    };
    const data = await axios(options)
      .then((response) => response.data)
      .catch((error) => console.log(error));

    if (data.data) {
      UserClass.setUser(data.data);
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

