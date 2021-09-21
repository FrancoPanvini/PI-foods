import React from "react";

//? STYLES
import { PopUp, Button } from "./styles/ConfirmPopUpSC";

function ConfirmPopUp({ text, aceptText, cancelText, aceptPopUp, cancelPopUp,thirdOptionText,thirdOption }) {
  return (
    <PopUp>
      <p>{text}</p>
      <Button onClick={aceptPopUp}>{aceptText}</Button>
      <Button onClick={cancelPopUp}>{cancelText}</Button>
      {thirdOptionText &&
      <Button onClick={thirdOption}>{thirdOptionText}</Button>
      }
    </PopUp>
  );
}

export default ConfirmPopUp;
