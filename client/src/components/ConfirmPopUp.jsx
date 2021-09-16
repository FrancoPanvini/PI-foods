import React from "react";

//? STYLES
import { PopUp, Button } from "./styles/ConfirmPopUpSC";

function ConfirmPopUp({ name, aceptPopUp, cancelPopUp }) {
  return (
    <PopUp>
      <p>{`Are you sure you want to delete this ${name}??`}</p>
      <Button onClick={aceptPopUp}>Delete</Button>
      <Button onClick={cancelPopUp}>Cancel</Button>
    </PopUp>
  );
}

export default ConfirmPopUp;
