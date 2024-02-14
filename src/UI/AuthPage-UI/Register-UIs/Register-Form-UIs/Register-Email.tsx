import React, { useState, ChangeEvent } from 'react';
import style from "./register-forms.module.css";

const RegisterEmail: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");

  const handleEmailSetting = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <div className={style.register_email_wrapper}>
      <label className={style.register_email_label}>Email address</label>
      <input
        name='email'
        type='email'
        placeholder='example@yahoo.com'
        className={style.register_email_input}
        value={emailValue}
        onChange={handleEmailSetting}
      />
    </div>
  );
};

export default RegisterEmail;
