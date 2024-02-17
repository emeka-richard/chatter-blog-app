import React from 'react'
import AuthAccountVerifyBackBtn from './Auth-acct-verify-back-btn'
import style from "./auth-account-verify.module.css"
import AuthCodeBox from './Auth-code-box'

const AuthAccountVerfication:React.FC = function () {
  return (
    <section className={style.auth_acct_verify_wrapper}>
      <AuthAccountVerifyBackBtn />
      <div className={style.auth_acct_verify_container}>
        <AuthCodeBox />
      </div>
    </section>
  )
}

export default AuthAccountVerfication