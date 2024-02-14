import React from 'react'
import RegisterTitle from './Register-Form-UIs/Register-Title'
import RegisterForm from './Register-Form-UIs/Register-Form'

const RegisterFormUI: React.FC = function () {
  return (
    <section>
      <RegisterTitle />
      <RegisterForm />
    </section>
  )
}

export default RegisterFormUI