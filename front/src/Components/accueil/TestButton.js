import React from "react";
import Button from "@material-ui/core/Button";

const TestButton = () => {

  const handleclick = () => {
    fetch(`/backend/users/test`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      console.log("response : ", response)
    })
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