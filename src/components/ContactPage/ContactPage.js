import React, { useReducer } from "react";
// import postAddServiceData from '../../utils/postData'
import "./ContactPage.css";

const initialState = {
  Name: "",
  Email: "",
  Message: ""
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value
  };
}

const ContactPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [changePage, setChangePage] = React.useState(false);

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const { Name, Email, Message } = state;

  const handleSubmit = event => {
    event.preventDefault();
    // postAddServiceData(state);
    // setChangePage(!changePage);
  };

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit} className="form">
        <h1 className="headline">Contact me</h1>
        <hr className="underline" />
        <fieldset className="fieldset">
          <div>
            <label htmlFor="Name">Name:</label>
            <br />
            <input
              type="text"
              name="Name"
              className="input-field"
              id="Name"
              value={Name}
              onChange={onChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="Email">Email:</label>
            <br />
            <input
              type="Email"
              name="Email"
              id=""
              className="input-field"
              value={Email}
              onChange={onChange}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="Message">Message:</label>
            <br />
            <textarea
              type="text"
              name="Message"
              id="messageBox"
              wra="soft"
              className="input-field"
              value={Message}
              onChange={onChange}
            />
          </div>
          <br />
          <button type="submit" className="submit-button">
            Send
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default ContactPage;

// import React, { useState } from "react";

// const ContactPage = () => {
//   const [values, setValues] = useState({ name: "", email: "", text: "" });

//   // const handleChange = event => {
//   //   console.log(event.target.name);
//   //   console.log(event.taget.value);
//   // };
//   return (
//     <div>
//       <form noValidate className="form">
//         <h1 className="headline">Contact me</h1>
//         <fieldset className="fieldset">
//           <div>
//             <label htmlFor="name"> Name</label>
//             <input
//               type="text"
//               name="text"
//               // value={values.text}
//               // onChange={handleChange}
//             />
//           </div>
//           <br />
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               // value={values.email}
//               // onChange={handleChange}
//             />
//           </div>
//           <br />
//           <div>
//             <label htmlFor="text" className="messageBox">
//               Message
//             </label>
//             <input
//               type="text"
//               name="text"
//               // value={values.text}
//               // onChange={handleChange}
//             />
//           </div>
//         </fieldset>
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;
