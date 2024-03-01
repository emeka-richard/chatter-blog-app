import React from 'react';
import { ReactComponent as GoogleLogo } from '../../../../assets/svg/google1.svg';
import style from './register-forms.module.css';

const RegisterGoogleBtn: React.FC = function () {
  return (
    <div className={style.register_google_container}>
      {/* Google logo */}
      <GoogleLogo aria-hidden="true" />
      {/* Text */}
      <p className={style.register_google_p}>Sign up with Google</p>
    </div>
  );
};

export default RegisterGoogleBtn;
