import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./auth.css";

import { registerUser } from "../../controllers/firebaseDB";

const Register = props => {
  const { userLoggedIn } = useContext(AuthContext);
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    babyName: ""
  });

  const handleInputChange = e => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formValidated = true; // TODO JP: password length, all fields filled, etc...

    if (formValidated) {
      registerUser(
        registerInfo.email,
        registerInfo.password,
        registerInfo.babyName
      )
        .then(uid => userLoggedIn(uid))
        .catch(err => console.error(`Error at registerUser() [Register.jsx]`));
    }
  };

  return (
    <div id="registerPage" className="text-center">
      <form className="form-register" onSubmit={handleSubmit}>
        <span id="registerImage" role="img" aria-label="baby bottle">
          👶 👶🏽 👶🏻 👶🏾 👶🏼 👶🏿 👶🏽
        </span>
        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
        <label htmlFor="babyName" className="sr-only">
          Baby's name
        </label>
        <input
          onChange={handleInputChange}
          id="babyName"
          type="babyName"
          name="babyName"
          value={registerInfo.babyName}
          placeholder="Baby's Name"
          required
          autoFocus
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          onChange={handleInputChange}
          id="email"
          type="email"
          name="email"
          value={registerInfo.email}
          placeholder="Email"
          required
          autoFocus
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          onChange={handleInputChange}
          id="password"
          type="password"
          name="password"
          value={registerInfo.password}
          placeholder="Password"
          required
        />
        <label htmlFor="confirmPassword" className="sr-only">
          Confirm Password
        </label>
        <input
          onChange={handleInputChange}
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={registerInfo.confirmPassword}
          placeholder="Confirm Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
// class Register extends Component {
//   state = {
//     babyName: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   }

//   handleChange = e => {
//     setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   submitRegister = e => {
//     e.preventDefault();
//     registerUser(state.email, state.password);
//   }

//   render() {
//     return (
//       <div id="registerPage" className="text-center">
//         <form className="form-register">
//           <span id="registerImage" role="img" aria-label="baby bottle">
//             👶 👶🏽 👶🏻 👶🏾 👶🏼 👶🏿 👶🏽
//           </span>
//           <h1 className="h3 mb-3 font-weight-normal">Register</h1>
//           <label htmlFor="inputBabyName" className="sr-only">
//             Baby Name
//           </label>
//           <input
//             onChange={handleChange}
//             type="text"
//             name="babyName"
//             value={state.babyName}
//             className="form-control"
//             placeholder="Baby's Name"
//           />

//           <input
//             onChange={handleChange}
//             type="email"
//             name="email"
//             value={state.email}
//             className="form-control mt-2"
//             placeholder="Email"
//             required
//             autoFocus
//           />
//           <label htmlFor="inputPassword" className="sr-only">
//             Password
//           </label>
//           <input
//             onChange={handleChange}
//             type="password"
//             name="password"
//             value={state.password}
//             className="form-control mt-2"
//             placeholder="Password"
//             required
//           />
//           <label htmlFor="inputPassword2" className="sr-only">
//             Confirm Password
//           </label>
//           <input
//             onChange={handleChange}
//             type="password"
//             name="confirmPassword"
//             value={state.confirmPassword}
//             className="form-control mt-2"
//             placeholder="Confirm Password"
//             required
//           />
//           <br />
//           <button
//             onClick={submitRegister}
//             className="btn btn-lg btn-primary btn-block"
//             type="submit"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Register;
