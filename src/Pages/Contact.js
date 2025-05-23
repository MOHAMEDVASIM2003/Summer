import React from "react";
import babyimg from "../assets/babyimg.png";
import "./contact.css"; // adjust path if in another folder

function Contact() {
  return (
    <div className="contact" style={{ width: "100%" }}>
      <div>
        <img
          src={babyimg}
          alt="babyimg"
          style={{ width: "100%", height: "861px", opacity: "30%" }}
        ></img>
      </div>
      <div
        className="contacting"
        style={{ width: "800px", marginLeft: "200px" }}
      >
        <h1
          style={{
            color: "#4A4A4A",
            fontWeight: "400",
            fontSize: "40px",
            lineHeight: "100%",
            letterSpacing: "4px",
          }}
        >
          Kom in contact.
        </h1>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "100%",
            letterSpacing: "0.3px",
          }}
        >
          Voornaam
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "100%",
            letterSpacing: "0.3px",
          }}
        >
          Voornaam
        </p>
        <hr
          style={{
            width: "299px",
            height: "1px",
            color: "#4A4A4A",
            position: "relative",
            right: "249px",
          }}
        />
        <br></br>

        <p
          style={{
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "100%",
            letterSpacing: "0.3px",
          }}
        >
          E-mail
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "100%",
            letterSpacing: "0.3px",
          }}
        >
          info@concapps.nl
        </p>
        <hr
          style={{
            width: "299px",
            height: "1px",
            color: "#4A4A4A",
            position: "relative",
            right: "249px",
          }}
        />
        <p
          style={{
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "100%",
            letterSpacing: "0.3px",
          }}
        >
          Bericht
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "100%",
            letterSpacing: "0.3px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula
          <br /> eget dolor. Aenean massa. Cum sociis natoque penatibus et
          magnis dis parturient
          <br /> montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu,
          <br /> pretium quis, sem. Nulla consequat massa quis enim. Donec pede
          justo, fringilla vel,
          <br /> aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis
          <br /> vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt.{" "}
        </p>

        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "100%",
            letterSpacing: "0.3px",
          }}
        >
          Cras dapibus. Vivamus elementum semper nisi.{" "}
        </p>
        <hr
          style={{
            width: "564px",
            height: "1px",
            color: "#4A4A4A",
            position: "relative",
            right: "118px",
          }}
        />
        <br></br>
        <button
          style={{
            width: "138.37208557128906px",
            height: "55px",
            color: "white",
            backgroundColor: "#4A4A4A",
            border: "none",
          }}
        >
          Versturen
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Contact;
