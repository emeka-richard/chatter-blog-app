import React from 'react'
import { ReactComponent as BackButton } from "../../../assets/svg/back-button.svg"
import style from "./auth-account-verify.module.css"

const AuthAccountVerifyBackBtn: React.FC = function () {
  return (
    <div className={style.auth_acct_btn_wrapper}>
        <BackButton />
        <p className={style.auth_acct_btn_p}>Back</p>
    </div>
  )
}

export default AuthAccountVerifyBackBtn