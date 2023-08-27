import React from "react";
import '../css/progress.css';
import ProgressBar from "@ramonak/react-progress-bar";



const Progress = (props) => {

  console.log(props);
  return <ProgressBar completed={Math.trunc(props.progress)}
  className="progress"
  />;
  
};

export default Progress;