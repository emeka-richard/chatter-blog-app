import React, { useState, ChangeEvent } from 'react';
import style from "./register-forms.module.css";

interface Option {
  value: string;
  label: string;
}

const RegisterSelect: React.FC = () => {
  const joinStatusOptions: Option[] = [
    { value: "", label: "Select" },
    { value: "writer", label: "Writer" },
    { value: "reader", label: "Reader" }
  ];

  const [joinStatus, setJoinStatus] = useState<string>("");

  const handleSelectedProp = (event: ChangeEvent<HTMLSelectElement>) => {
    setJoinStatus(event.target.value);
  };

  return (
    <div className={style.register_select_wrapper}>
      <label className={style.register_select_label}>You are joining as?</label>
      <div className={style.register_select_component}>
      <select onChange={handleSelectedProp} className={style.register_select_card}>
        {joinStatusOptions.map((status) => (
          <option key={status.value} value={status.value}>{status.label}</option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default RegisterSelect;
