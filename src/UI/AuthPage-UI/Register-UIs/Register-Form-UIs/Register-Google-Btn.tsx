import React from 'react'
import { ReactComponent as Googlelogo1 } from "../../../../assets/svg/google1.svg"
import style from "./register-forms.module.css"

const RegisterGoogleBtn: React.FC = function () {
  return (
    <div className={style.register_google_container}>
        <Googlelogo1 />
        <p className={style.register_google_p}>Sign up with google</p>
    </div>
  )
}

export default RegisterGoogleBtn