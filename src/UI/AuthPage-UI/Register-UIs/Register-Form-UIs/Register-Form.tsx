import React from 'react'
import style from "./register-forms.module.css"
import RegisterInputs from './Register-Inputs'
import RegisterSelect from './Register-select'
import RegisterEmail from './Register-Email'
import RegisterPassword from './Register-Password'
import RegisterGoogleBtn from './Register-Google-Btn'
import RegisterLinkedInBtn from './Register-LinkedIn-Btn'

const RegisterForm: React.FC = function () {
  return (
    <form className={style.register_form}>
      <RegisterInputs />
      <RegisterSelect />
      <RegisterEmail />
      <RegisterPassword />
      <button className={style.register_form_btn}>Create account</button>
      <RegisterGoogleBtn />
      <RegisterLinkedInBtn />
    </form>
  )
}

export default RegisterForm