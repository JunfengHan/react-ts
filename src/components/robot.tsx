import React from 'react';
import styles from './robot.module.css';

interface RobotProps {
  id: number,
  name: string,
  email: string
}

// 定义一个泛型React.FC,设置其类型为RobotProps
// const Robot : React.FC<RobotProps> = (props) => {
//   let id = props.id;
//   let name = props.name;
//   let email = props.email;

const Robot : React.FC<RobotProps> = ({id, name, email}) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Robot;