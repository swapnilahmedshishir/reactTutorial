import React from 'react'
import '../FROM/From.css';
import { useFormik } from 'formik';
import { Button } from 'react-bootstrap';

export const Formik = () => {
 
 const formik = useFormik({
    initialValues:{
        userName:'',
        email:'',
        password:''
    },
    onSubmit:(values,{resetForm})=>{
        console.log(values);
        resetForm({values:''})
    }
 })
 
    return (
        <div>
        <form className="from" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="userName">User Name </label>
            <input
              type="text"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div>
            <Button type="submit" variant="success" className="increment">
              {" "}
              Submit{" "}
            </Button>{" "}
          </div>
        </form>
      </div>
  )
}
