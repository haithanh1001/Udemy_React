import "./Register.scss";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleRegister = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid Email");
      return;
    }
    if (!password) {
      toast.error("Invalid Password");
      return;
    }
    const res = await postRegister(email, username, password);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      navigate("/login");
    } else if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };
  return (
    <div className="register-container">
      <div className="header">
        Already have an account? <button>Log in</button>
      </div>
      <div className="title col-4 mx-auto">Hoi Dan IT &amp; ERIC</div>
      <div className="welcome col-4 mx-auto">Start your jouney?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label htmlFor="">Email (*)</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group pass-group">
          <label htmlFor="">Password (*)</label>
          <input
            type={!isShowPassword ? "password" : "text"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <span
            className="icons-eye"
            onClick={() => {
              handleShowHidePassword();
            }}
          >
            {isShowPassword ? <VscEyeClosed /> : <VscEye />}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <button className="btn-submit" onClick={() => handleRegister()}>
            Create my free account
          </button>
        </div>
      </div>

      <div className="text-center">
        <span
          className="back"
          onClick={() => {
            navigate("/");
          }}
        >
          &lt;&lt; Go to HomePage
        </span>
      </div>
    </div>
  );
};
export default Register;
