import React from 'react';
import { useFormik } from 'formik';
import './Formik.css';
import * as Yup from 'yup';

function Formik() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(15, 'Must be 15 characters or less')
        .required('Must be 15 characters or less'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password:Yup.string().required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).*$/,'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@#$%^&+=)')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 4));
      console.log(values.email);
    },
  });
  return (
    <div className='data'>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.touched.firstName && formik.errors.firstName  ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}

       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
       />
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

export default Formik

