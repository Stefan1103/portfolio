import { useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import emailjs from "emailjs-com";
import { LinkedIn } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zmr6ioh",
        "template_cmxopls",
        e.target,
        "user_pdmvDfnPsCD0PA3izcYp5",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    setMessage(true);

    e.target.reset();
    setInterval(function () {
      setMessage(false);
    }, 5000);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="#" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="social-links">
          <a
            href="https://github.com/Stefan1103?tab=repositories"
            target="_blank"
          >
            <GitHubIcon style={{ fontSize: "1.9rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/stefan-stevanovski-0b89b7183/"
            target="_blanlk"
          >
            <LinkedIn fontSize="large" />
          </a>
          <a
            href="https://www.facebook.com/stefan.stevanovski"
            target="_blanlk"
          >
            <FacebookIcon fontSize="large" />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Name" name="name" />
          <input required type="email" placeholder="Email" name="email" />
          <textarea required placeholder="Message" name="message" />
          <button type="submit">Send</button>
          {message && <span>Thanks for the message, i will reply asap !</span>}
        </form>
      </div>
    </div>
  );
}
