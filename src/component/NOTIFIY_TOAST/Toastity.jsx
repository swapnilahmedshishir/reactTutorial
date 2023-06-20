import React from 'react'
import { Button } from 'react-bootstrap';
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Toastity = () => {

    const nofiy = () => {
        toast.success("SEE the Success Tostify Data")
    }
  return (
    <div>
        <Button onClick={nofiy}>see the tostify</Button>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Toastity
