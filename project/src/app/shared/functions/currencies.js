import axios from "axios";
import { mainCentralDomain } from "../../../serviceWorker";
import UserClass from "../../../authHandler";

var user = UserClass.getUser();

export const getAllCurrencies = async () => {
  try {
    const options = {
      method: "GET",
      url: mainCentralDomain + "currency/1",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.token,
      },
    };

    const data = await axios(options)
      .then((response) => response.data)
      .catch((error) => console.log(error));

    return data.data ? data.data.currencies : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const storeNewCurrency = async (data) => {
  try {
    const options = {
      method: "POST",
      url: mainCentralDomain + "currency",
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

export const updateCurrency = async (id, data) => {
    try {
      const options = {
        method: "PUT",
        url: mainCentralDomain + "currency/" + id,
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
