import React from "react";
import { useHistory } from "react-router-dom";

const SubscribePage = ({ setIsSubscribed }) => {
  const history = useHistory();

  const handleSubscribe = () => {
    setIsSubscribed(true); 
    history.push("/thankyou"); 
  };

  return (
    <center>
    <div className="subscribe-page">
      <h1>Subscribe for Lifetime Access</h1>
      <button onClick={handleSubscribe}>Activate Subscription</button>
    </div></center>
  );
};

export default SubscribePage;
