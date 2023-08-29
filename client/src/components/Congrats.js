import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

import useWindowSize from "@rooks/use-window-size";
import Confetti from 'react-confetti'
import "../css/congrats.css";


const Congrats = () => {
    window.scrollTo(0, 0);
    const navigate = useNavigate();
    const { userTestResponses} = useLanguage();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      console.log(userTestResponses);
      if(userTestResponses.length!==26){
        
         navigate("/test/instructions");
      }
      setLoading(false);
      
    }, [])

    const handleRegister = ()=>{
        navigate("/test/register")
    }
    
    const handleLogin = ()=>{
        navigate("/test/login")
    }
    const { width, height } = useWindowSize()
    
  return (
    <>
    <Confetti
      width={width}
      height={height}
      numberOfPieces={600}
      
      
    />
        {!loading && 
            <div className="congratulations-container">
            <div className="congratulations-content">
                <h2>Congratulations!</h2>
                <p>You have successfully submitted the test.</p>
                <p>PLEASE LOGIN OR REGISTER TO VIEW YOUR RESULT..</p>
                <div className="buttons-container">
                <button className="login-button" onClick={handleLogin}>Login</button>
                <button className="signup-button" onClick={handleRegister}>Sign Up</button>
                </div>
            </div>
            </div>
            
        }

    </>
  )
}

export default Congrats