import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from "../schemas/Index"
import Header from "./Header.js"


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        
        password: '',
        
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  //   console.log(formik);
  return (
    <>
    <div className='fromContainer'>
    <Header/>
    <div className='RegisterFrom'>
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Mail adresinizi giriniz"
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Şifrenizi giriniz"
          className={errors.password ? 'input-error' : ''}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button disabled={isSubmitting} type="submit">
        Giriş Yap
      </button>

    </form>
    </div>
    </div>
    </>
  );
}

export default GeneralForm;
