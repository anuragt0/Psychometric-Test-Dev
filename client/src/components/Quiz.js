import React, { useEffect, useState } from 'react'
import { server_origin } from '../utilities/constants';
import { useNavigate } from 'react-router-dom';
import "../css/quiz.css";
import { SyncLoader } from 'react-spinners'; // Import the ClipLoader from "react-spinners"
import LoadingBar from 'react-top-loading-bar'

import 'react-circular-progressbar/dist/styles.css';


import { toast, Toaster } from "react-hot-toast";

// IMPORTS for Language Functionlaity
import i18n /*, { changeLanguage }*/ from "i18next";
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../context/LanguageContext';



function Quiz() {
    window.scrollTo(0,0);

    const { t } = useTranslation("translation", { keyPrefix: 'quiz' } );
    const { userTestResponses, setUserTestResponses} = useLanguage();


    // when Page Refreshes
    useEffect(()=>{
      let currentLang = localStorage.getItem('lang');
      i18n.changeLanguage(currentLang);
    //   console.log(currentLang);
    //! Storing Question Array According to the language in LocalStorage
    const questions1 = t('question'  , { returnObjects: true });
    console.log(questions1);
    setQuestions(questions1);
    // setLoading(false);

    },[]);


    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [result, setResult] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        //*Validate the token to see if the page is accessible to the user
        // const validateUserToken = async () => {
        //     const response = await fetch(`${server_origin}/api/user/verify-user`, {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //         'auth-token': localStorage.getItem('token'),
        //       },
        //     });
        //     let response1 = await response.json();
        //     console.log('ValidateUserToken response: ', response1);
        //     if (response1.success === true) {
        //       setIsUserAuthenticated(true);
        //     } else {
        //       toast.error(t('toast.loginToContinue'), {
        //           style: {
        //             border: '1px solid #713200',
        //             padding: '16px',
        //             color: '#713200',
        //           },
        //           iconTheme: {
        //             primary: '#713200',
        //             secondary: '#FFFAEE',
        //           },
        //         });
        //       navigate('/login');
        //     }
        //   };
        
        //   // Run the effect only once on component mount
        //   validateUserToken();
          getQuestions();

         
    }, [])


    // Dummy getQuestions
    const getQuestions = ()=>{
        //! Storing Question Array According to the language in LocalStorage
        const questions1 = t('question'  , { returnObjects: true });
        // console.log(questions1);
        setQuestions(questions1);
        // setLoading(false);


        //? tired -- for implementing lanuage change functionality on every question separately
        // const questions123 = [
        //     t('question.question_01' , { returnObjects: true }),
        //     t('question.question_02' , { returnObjects: true }),
        //     t('question.question_03' , { returnObjects: true }),
        //     t('question.question_04' , { returnObjects: true }),
        //     t('question.question_05' , { returnObjects: true }),
        //     t('question.question_06' , { returnObjects: true }),
        //     t('question.question_07' , { returnObjects: true }),
        //     t('question.question_08' , { returnObjects: true }),
        //     t('question.question_09' , { returnObjects: true }),
        //     t('question.question_10' , { returnObjects: true }),
        //     t('question.question_11' , { returnObjects: true }),
        //     t('question.question_12' , { returnObjects: true }),
        //     t('question.question_13' , { returnObjects: true }),
        //     t('question.question_14' , { returnObjects: true }),
        //     t('question.question_15' , { returnObjects: true }),
        //     t('question.question_16' , { returnObjects: true }),
        //     t('question.question_17' , { returnObjects: true }),
        //     t('question.question_18' , { returnObjects: true }),
        //     t('question.question_19' , { returnObjects: true }),
        //     t('question.question_20' , { returnObjects: true }),
        //     t('question.question_21' , { returnObjects: true }),
        //     t('question.question_22' , { returnObjects: true }),
        //     t('question.question_23' , { returnObjects: true }),
        //     t('question.question_24' , { returnObjects: true }),
        //     t('question.question_25' , { returnObjects: true }),
        //     t('question.question_26' , { returnObjects: true })
        // ]
        // console.log(questions123);
        //? tired -- for implementing lanuage change functionality on every question separately

    };

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [clickedOption, setClickedOption] = useState(5);


    const nextQuestion = () => {
        // if(currentQuestionIndex!==0 && currentQuestionIndex%5===0){
            // const remainingQuestions = questions.length-currentQuestionIndex-1;
            // const totalNumberOfQuestions = questions.length;
            // const percentageRemaining = (remainingQuestions)/totalNumberOfQuestions*100;
            // toast(`${percentageRemaining}% remaining`);
        // }
    
        if (clickedOption === 5 && !result[currentQuestionIndex]) {
            toast.error(t('toast.selectAtLeastOneOption'));
            return;
        }
        console.log(currentQuestionIndex);
        if (currentQuestionIndex < questions.length - 1) {
            window.scrollTo(0,0);
            setCurrentQuestionIndex((currentQuestionIndex)=>{
                const totalQuestions = questions.length;
                let progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
                if(currentQuestionIndex === questions.length-2) progressPercentage = 100;
                setProgress(progressPercentage);
                return currentQuestionIndex + 1;
            });
            setClickedOption(5);
        }
       
        
    }

    const previousQuestion = () => {
        if (currentQuestionIndex > 0) {
            window.scrollTo(0,0);
            setCurrentQuestionIndex((currentQuestionIndex)=>{
                const totalQuestions = questions.length;
                const progressPercentage = ((currentQuestionIndex-1 ) / totalQuestions) * 100;
                setProgress(progressPercentage);
                return currentQuestionIndex-1;
            });
            setClickedOption(5);
        }
        
    }

    const handleChangeOption = (i) =>{
        setClickedOption(i + 1); updateResult(i + 1);
        if(currentQuestionIndex==questions.length-1){
            toast.success(t("toast.testCompleted"))
        }

    }

    const updateResult = (option) => {
        setResult((prevResult) => {
            const updatedResult = [...prevResult];
            updatedResult[currentQuestionIndex] = option;
            // console.log(updatedResult);
            return updatedResult;
        });
    }

    const handleSubmit = async () => {
        if (result.length !== questions.length) {
            toast.error(t('toast.answerAllQuestions'));
            return;
        }
        // console.log("Submit quiz");
        // console.log(result);

        // const response = await fetch(`${server_origin}/api/user/update-response`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'auth-token': localStorage.getItem("token")
        //     },
        //     body: JSON.stringify({ responses: result })
        // });
        // let response1 = await response.json();
        // // console.log( response1);
        // if (response1.success == true) {
        //     toast.success(t('toast.testSubmittedSuccessfully'));
        //     navigate("/test/register");
        // }
        // else {
        //     toast.error(t('toast.submitError'));
        // }

        //*SAVE THE USER RESPONSES IN CONTEXT TO USE THEM AFTER VERIFICATION
        setUserTestResponses(result);
        navigate("/test/submit");

        // if (document.fullscreenElement) {
        //     document.exitFullscreen();
        // }

    }


    const imageArray = [require("../images/1.jpg"), require("../images/2.png"), require("../images/3.png")
        , require("../images/4.png"), require("../images/5.jpg"), require("../images/6.jpg"), require("../images/7.png")
        , require("../images/8.png"), require("../images/9.png"), require("../images/10.png"), require("../images/11.png")
        , require("../images/12.png"), require("../images/13.png"), require("../images/14.png"), require("../images/15.png")
        , require("../images/16.jpg"), require("../images/17.png"), require("../images/18.jpg"), require("../images/19.png")
        , require("../images/20.jpg"), require("../images/21.png"), require("../images/22.png"), require("../images/23.png")
        , require("../images/24.png"), require("../images/25.png"), require("../images/26.png")];

   
    return (

        <div className='bodyy'>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
        shadow={false}
        style={{position:"absolute", top: "67px"}}
        onLoaderFinished={() => setProgress(0)}
      />
            {/* {isUserAuthenticated && questions.length !== 0 && !loading ? <> */}
            { questions.length !== 0 ? <>
                <div className="left">   
                        <div className="question">
                            <span id="question-number">{currentQuestionIndex + 1}. </span>
                            <span id="question-txt">{questions[currentQuestionIndex]["questionText"]}</span>
                        </div>
                        <div className="option-container">
                            {questions[currentQuestionIndex].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 || result[currentQuestionIndex] === i + 1 ? 'checked' : ''}`}
                                        key={i}
                                        onClick={()=>{handleChangeOption(i)}}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <div className="buttons">
                            {
                                currentQuestionIndex===questions.length-1?(
                                    //submit
                                    <button className='submit-button' onClick={handleSubmit}>{t('controls.submit')}</button>
                                )
                                :(
                                    //next button
                                    <button value="Next" id="next-button" onClick={nextQuestion}> {t('controls.next')}</button>
                                )
                            }
                            <button value="Prev" id="prev-button" onClick={previousQuestion}> {t('controls.previous')} </button>
                        </div>
                    </div>

                    

                <div className="right my-5">
                    <div className="cont">
                    <div className="progress-bar">
    <div className="step-container">
      {[0,1, 2, 3, 4, 5].map((step) => (
        <>
          {step !== 0 && <div className={`line ${currentQuestionIndex >= (step) * 5 ? 'completed' : ''} line-color-${currentQuestionIndex >= step*5 ? 'completed' : ''}`}></div>}
          
          <div className={`step ${currentQuestionIndex >= (step ) * 5 ? 'completed' : ''}`}>
            {step}
          </div>
        </>
      ))}
    </div>
  </div>
                    </div>
                <div className="box">
                      
                </div>
                    {/* <div className="box1"> */}
                    <img src={imageArray[currentQuestionIndex]} alt="img" /> 
                    {/* </div> */}
                    
                </div>

            </> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                {/* <SyncLoader size={30} color="#fb2576" /> */}
            </div>
            }
        </div>
    )
}

export default Quiz