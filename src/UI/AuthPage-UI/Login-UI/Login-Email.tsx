import React, { useState, ChangeEvent } from 'react';
import style from "./login.module.css";

const LoginEmail: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");

  const handleEmailSetting = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <div className={style.login_email_wrapper}>
      <label className={style.login_email_label}>Email address</label>
      <input
        name='email'
        type='email'
        placeholder='example@yahoo.com'
        className={style.login_email_input}
        value={emailValue}
        onChange={handleEmailSetting}
      />
    </div>
  );
};

export default LoginEmail;
