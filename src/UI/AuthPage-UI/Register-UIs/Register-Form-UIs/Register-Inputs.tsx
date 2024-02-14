import React from 'react'
import style from "./register-forms.module.css"

const RegisterInputs: React.FC = function () {
  return (
    <div className={style.register_input_wrapper}>
        <div className={style.register_firstName_container}>
            <label className={style.register_firstName_label}>First Name</label>
            <input name='first_name' type='text' placeholder='First Name' className={style.register_firstName_input}/>
        </div>
        <div className={style.register_lastName_container}>
            <label className={style.register_lastName_label}>Last Name</label>
            <input name='last_name' type='text' placeholder='Last Name' className={style.register_lastName_input}/>
        </div>
    </div>
  )
}

export default RegisterInputs