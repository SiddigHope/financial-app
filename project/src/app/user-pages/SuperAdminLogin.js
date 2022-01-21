import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserClass from "../../authHandler";
import { useHistory } from "react-router-dom";
import { loginAsSuperAdmin } from "../shared/functions/auth";
import { useSnackbar } from "notistack";
import "./superadminlogin.css"
const textStyle = {
  fontSize: 16,
  color: "#FFF",
};

export default function SuperAdminLogin(props) {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("password");
  const isAuth = UserClass.isAuthenticated();
  const history = useHistory();
  const { state } = props;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isAuth) {
      history.push("/dashboard");
    }
  }, []);

  const _checkUser = async (e) => {
    e.preventDefault();
    const logged = await loginAsSuperAdmin(email, password);
    if (logged) {
      enqueueSnackbar("تم تسجيل الدخول بنجاح", { variant: "success" });
      history.push(state || "/dashboard");
    } else {
      enqueueSnackbar("حدث خطأ ما اعد المحاولة من جديد", { variant: "error" });
    }
  };

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
                style={{ height: 130, width: 200 }}
              />
              <form className="pt-5">
                <div className="form-group">
                  {/* <label style={labelText}>{"الايميل"}</label> */}
                  <input
                    type="email"
                    style={textStyle}
                    className="form-control text-center"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="user-email"
                    placeholder="example@email.com"
                    required
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mt-5">
                  <button
                    className="btn btn-block btn-success btn-lg font-weight-medium"
                    onClick={_checkUser}
                  >
                    {"تسجيل دخول"}
                  </button>
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
