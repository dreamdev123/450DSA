import React from "react";
import { useHistory } from "react-router-dom";

export default function ThankYouPage() {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/75-blind");
  };

  return (
    <center>
    <div className="thankyou-page">
      <h2>Thank you for subscribing!</h2>
      <p>Your subscription has been successfully activated.</p>
      <button className="btn btn-primary" onClick={redirectToHome}>
        Start Practicing.
      </button>
      </div>
      </center>
  );
}