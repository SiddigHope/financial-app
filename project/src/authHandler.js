var UserClass = (function () {
    // var user = {
  //   user: {
  //     id: 1,
  //     name: "ADMIN",
  //     email: "admin@admin.com",
  //     email_verified_at: "2022-01-09T21:26:16.000000Z",
  //     created_at: "2022-01-09T21:26:16.000000Z",
  //     updated_at: "2022-01-09T21:26:16.000000Z",
  //   },
  //   token: "9|xfnHGQ7HXqAiiumInoj579xRXUYOtA7PxbZxOxiP",
  // };
  var user = [];
  var getUser = function () {
    const data = localStorage.getItem("user");
    if (data != null) {
      return JSON.parse(data);
    }
    return user;
  };

  var setUser = function (userData) {
    user = userData;
    localStorage.setItem("user", JSON.stringify(userData));
  };

  var isAuthenticated = function () {
    const data = localStorage.getItem("user");
    if (data != null) {
      return true;
    }
    return false;
  };

  var logout = function () {
    localStorage.removeItem("user");
    user = [];
  };

  return {
    getUser,
    setUser,
    isAuthenticated,
    logout,
  };
})();

export default UserClass;
