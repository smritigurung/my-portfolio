import "./Contact.css";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../Context";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    // it will prevent us from refreshing the page
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y9gotjp",
        "template_0of1q7k",
        formRef.current,
        "user_5Fl1Eh7xWyGqOvv0qcQF5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <p className="thankyou">Thank you for visiting!</p>
          <p className="thankyou">
            For more information, contact me at smriti.gurung@sjsu.edu
          </p>

          <div className="c-info">
            <div className="c-info-item">
              <ul className="c-icon">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/smriti-gurung/"
                  >
                    <TiSocialLinkedinCircular
                      style={{
                        color: "#0a66c2",
                        fontSize: "3.5rem",
                      }}
                    />{" "}
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/smritigurung"
                  >
                    <FaGithub style={{ color: "black", fontSize: "2.5rem" }} />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
            <p style={{ marginTop: "2rem" }}>
              {done && "Thank you for your message."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/* <span
  style={{
    background: "#0a66c2",
    padding: "0.8rem",
    borderRadius: "2rem",
  }}
  className={circleClasses}
>
  <GrLinkedinOption style={{ iconStyles }} />
</span>; */
