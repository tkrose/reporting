import React from "react";
import styles from "./styles.module.css";
import Select from "react-select";

const Question = ({ question, answer, toggleAnswer }) => {
  const { title, options } = question;

  const handleChange = (val) => {
    toggleAnswer(val);
  };
  return (
    <div className={styles.questionContainer}>
      <p className={styles.questionTitle}>{title}</p>
      <Select value={answer} onChange={handleChange} options={options} />
    </div>
  );
};

export { Question };
