var UserClass = (function () {
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

  return {
    getUser,
    setUser,
  };
})();

export default UserClass;
