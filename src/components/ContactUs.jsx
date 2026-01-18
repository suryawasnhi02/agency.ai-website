import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import "../styles/contactUs.css";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "f7eebb4d-858c-4567-95f8-00679e70d814");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section id="contact-us" className="contact-wrapper">

      {/* BIG HEADING (IMAGE 2 STYLE) */}
      <div className="contact-heading">
        <h1>Connect with us<br />directly</h1>
        <div className="heading-line" />
      </div>

      {/* FORM CARD */}
      <form onSubmit={onSubmit} className="contact-form">

        <h3 className="form-title">Your Details</h3>

        {/* Name */}
        <div className="input-group">
          <label>Your name</label>
          <input name="name" type="text" placeholder="Enter your name" required />
        </div>

        {/* Email */}
        <div className="input-group">
          <label>Email</label>
          <input name="email" type="email" placeholder="Enter your email" required />
        </div>

        {/* Message */}
        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
          />
        </div>

        {/* BIG SUBMIT BUTTON */}
        <button type="submit" className="submit-btn">
          Submit →
        </button>
      </form>

      {/* LOGO MARQUEE (IMAGE 4 STYLE) */}
      <div className="brand-marquee">
        <div className="marquee-track">
         <div className="logo-strip">
  {assets.company_logos?.map((logo, index) => (
    <img
      key={index}
      src={logo}
      alt="brand"
      className="h-10 opacity-70 hover:opacity-100 transition"
    />
  ))}
</div>
        </div>
      </div>

    </section>
  );
};

export default ContactUs;
