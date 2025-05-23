import React from "react";
import insta_icon from "../assets/insta_icon.png";
import twitterimg from "../assets/twitterimg.png";
import pinterest_Icon from "../assets/Pinterest_Icon.png";
import fb_icon from "../assets/fb_icon.png";

function Footer() {
  return (
    <div
      className="footer"
      style={{ overflow: "hidden", width: "100%", border: "none" }}
    >
      <div style={{ display: "flex", direction: "row" }}>
        <div
          className="footer-img"
          style={{
            paddingLeft: "150px",
            paddingTop: "70px",
            gap: "70px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div>
            <img src={fb_icon} alt="Facebook" />
          </div>
          <div>
            <img src={twitterimg} alt="Twitter" />
          </div>
          <div>
            <img src={pinterest_Icon} alt="Pinterest" />
          </div>
          <div>
            <img src={insta_icon} alt="Instagram" />
          </div>
        </div>
        <div
          style={{ marginLeft: "-900px", position: "relative", top: "20px" }}
        >
          <h1>Info</h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          direction: "row",
          gap: "100px",
          marginTop: "30px",
          paddingLeft: "100px",
        }}
      >
        <div
          className="footer-text1"
          style={{
            fontWeight: "400",
            size: "14px",
            lineHeight: "28px",
            letterSpacing: "0.23px",
          }}
        >
          <ul style={{ listStyleType: "none" }}>
            <li>Bezoekadres</li>
            <li>Veemarktkade 8</li>
            <li>5222AE ’s-Hertogenbosch</li>
          </ul>
        </div>
        <div
          style={{
            fontWeight: "400",
            size: "14px",
            lineHeight: "28px",
            letterSpacing: "0.23px",
          }}
        >
          <ul style={{ listStyleType: "none" }}>
            <li>Telefoon +31 (0)73 820 0231</li>
            <li>Fax +31 (0)73 820 2032</li>
            <li>info@concapps.nl</li>
          </ul>
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0.23px",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula
            <br /> eget dolor. Aenean massa. Cum sociis natoque penatibus et
            magnis dis parturient
            <br /> montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
