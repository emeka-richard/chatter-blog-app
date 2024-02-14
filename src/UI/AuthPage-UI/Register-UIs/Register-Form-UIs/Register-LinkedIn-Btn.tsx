import React from 'react'
import { ReactComponent as LinkedInlogo } from "../../../../assets/svg/linkedIn.svg"
import style from "./register-forms.module.css"
import { FaLinkedin } from "react-icons/fa";

const RegisterLinkedInBtn: React.FC = function () {
  return (
    <div className={style.register_linkedIn_container}>
        {/* <LinkedInlogo /> */}
        <FaLinkedin className={style.register_linkedIn_logo} />
        <p className={style.register_linkedIn_p}>Sign up with LinkedIn</p>
    </div>
  )
}

export default RegisterLinkedInBtn