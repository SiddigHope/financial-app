import axios from "axios";
import { mainCentralDomain } from "../../../serviceWorker";
import UserClass from "../../../authHandler";

var user = UserClass.getUser();

export const getAllBanks = async () => {
  try {
    const options = {
      method: "GET",
      url: mainCentralDomain + "banks",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.token,
      },
    };

    const data = await axios(options)
      .then((response) => response.data)
      .catch((error) => console.log(error));

    return data.data ? data.data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const storeNewBank = async (data) => {
  try {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("logo", data.logo);
    const options = {
      method: "POST",
      url: mainCentralDomain + "banks",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.token,
      },
      data: formData,
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

export const updateBank = async (id, data) => {
  try {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("address", data.address);
    if (data.logo) {
      formData.append("logo", data.logo);
    }

    const options = {
      method: "POST",
      url: mainCentralDomain + "banks/" + id + "?_method=PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: "Bearer " + user.token,
      },
      data: formData,
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
