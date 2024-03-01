import React from 'react';
import { ReactComponent as BackButton } from '../../../assets/svg/back-button.svg';
import style from './auth-account-verify.module.css';

const AuthAccountVerifyBackBtn: React.FC = function () {
  return (
    <div
      className={style.auth_acct_btn_wrapper}
      onClick={() => window.history.back()} // Allow the back button to function as expected
      role="button" // Add role="button" to indicate that it is clickable
      tabIndex={0} // Add tabIndex={0} to make it focusable
    >
      <BackButton aria-hidden="true" /> {/* Hide the SVG from screen readers */}
      <p className={style.auth_acct_btn_p}>Back</p>
    </div>
  );
};

export default AuthAccountVerifyBackBtn;
