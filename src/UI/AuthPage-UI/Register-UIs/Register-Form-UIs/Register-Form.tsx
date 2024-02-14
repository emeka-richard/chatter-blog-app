import React from 'react'
import style from "./register-forms.module.css"
import RegisterInputs from './Register-Inputs'
import RegisterSelect from './Register-select'
import RegisterEmail from './Register-Email'
import RegisterPassword from './Register-Password'
import RegisterGoogleBtn from './Register-Google-Btn'

const RegisterForm: React.FC = function () {
  return (
    <form>
      <RegisterInputs />
      <RegisterSelect />
      <RegisterEmail />
      <RegisterPassword />
      <button className={style.register_form_btn}>Create account</button>
      <RegisterGoogleBtn />
    </form>
  )
}

export default RegisterForm