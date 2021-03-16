import React from "react";
import styles from "./styles.module.css";

const Stream = ({ stream }) => {
  const { title, description, plans, logo } = stream;

  const renderPlans = () => {
    return plans.map((plan, i) => {
      const { title, price } = plan;

      return (
        <div className={styles.planContainer} key={i}>
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
      );
    });
  };

  return (
    <div className={styles.streamContainer}>
      <div className={styles.streamInfo}>
        <h3 className={styles.streamTitle}>{title}</h3>
        <p className={styles.streamDescription}>{description}</p>
        <div className={styles.plans}>{renderPlans()}</div>
      </div>
      <img alt="logo" src={logo} />
    </div>
  );
};

export { Stream };
