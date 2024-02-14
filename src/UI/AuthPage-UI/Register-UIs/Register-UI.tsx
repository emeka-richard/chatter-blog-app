import React from 'react'
import style from "./register.module.css"
import RegisterTitle from './Register-Title'
import RegisterForm from './Register-Form-UIs/Register-Form'

const RegisterFormUI: React.FC = function () {
  return (
    <section className={style.register_ui_wrapper}>
      <RegisterTitle />
      <RegisterForm />
    </section>
  )
}

export default RegisterFormUI