import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { user } from "../../authHandler";
import { useHistory } from "react-router-dom";

const textStyle = {
  fontSize: 16,
  color: "#FFF",
};

const labelText = {
  color: "#FFF",
  fontSize: 16,
  // backgroundColor:'red',
  display: "block",
  textAlign: "right",
};

export default function SuperAdminLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    console.log("inside login");
    if (user.length > 0) {
      history.push("./dashboard");
    }
  }, []);

  return (
    <div>
      <div className="content-wrapper d-flex align-items-center auth lock-full-bg h-100">
        <div className="row w-100 align-items-center">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-transparent text-left p-5 text-center">
              <img
                src={require("../../assets/images/fainance/CBOS.jpg")}
                className="lock-profile-img"
                alt="img"
                style={{height: 110, width: 110}}
              />
              <form className="pt-5">
                <div className="form-group">
                  {/* <label style={labelText}>{"الايميل"}</label> */}
                  <input
                    type="email"
                    style={textStyle}
                    className="form-control text-center"
                    id="user-email"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="form-group">
                  {/* <label style={labelText}>
                      {"كلمة المرور"}
                    </label> */}
                  <input
                    type="password"
                    style={textStyle}
                    className="form-control text-center"
                    id="examplePassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="mt-5">
                  <Link
                    className="btn btn-block btn-success btn-lg font-weight-medium"
                    to="/dashboard"
                  >
                    {"تسجيل دخول"}
                  </Link>
                </div>
                <div className="mt-3 text-center">
                  <Link to="/login" className="auth-link text-white">
                    {"Contact Support : 4342"}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
