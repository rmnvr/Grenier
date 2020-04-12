import React from "react";
import Button from "@material-ui/core/Button";

const TestButton = () => {

  const handleclick = () => {
    fetch(process.env.REACT_APP_BACK_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("response : ", response);
      });
  }

  return (
    <>
      <Button onClick={handleclick}>
        Click
      </Button>
    </>
  )
}

export default TestButton