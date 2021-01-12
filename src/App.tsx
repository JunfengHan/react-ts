import React from 'react';
import './App.css';
import Robot from './components/robot';
import robots from './mockdata/robot.json';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map(r => {
          return <Robot id={r.id} name={r.name} email={r.email} key={r.id}></Robot>
        })}
      </div>
    </div>
  );
}

export default App;
