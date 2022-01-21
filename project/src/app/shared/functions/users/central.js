import axios from "axios";
import { mainCentralDomain } from "../../../../serviceWorker";
import UserClass from "../../../../authHandler";

var user = UserClass.getUser();

export const getAllUsers = async () => {
  try {
    const options = {
      method: "GET",
      url: mainCentralDomain + "users",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.token,
      },
    };

    const data = await axios(options)
      .then((response) => response.data)
      .catch((error) => console.log(error));

    return data.users ? data.users : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const storeNewUser = async (data) => {
  try {
    const options = {
      method: "POST",
      url: mainCentralDomain + "users",
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
    return request.user ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateUser = async (id, data) => {
    try {
      const options = {
        method: "PUT",
        url: mainCentralDomain + "users/" + id,
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
      return request.user ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  export const deleteUser = async (id) => {
    try {
      const options = {
        method: "DELETE",
        url: mainCentralDomain + "users/" + id,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + user.token,
        },
      };
  
      const request = await axios(options)
        .then((response) => response.status)
        .catch((error) => console.log(error));
      console.log(request);
      return request == 200? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
