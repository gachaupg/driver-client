import React, { useEffect, useState } from "react";
import Register from "./authentication/Register";
import MainAuth from "./authentication/MainAuth";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ImArrowRight } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MultiStepForm from "./authentication/Register";
// import Barcode from "./Barcode";

const Hero = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const navigate = useNavigate();
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer, setShowAnswer] = useState(true);

  const handleQuestion1Click = () => {
    setShowAnswer1(!showAnswer1);
    setShowAnswer(!showAnswer);
  };
  //   const handleQuestion1Click1 = () => {
  //     setShowAnswer(!showAnswer);

  //   };
  useEffect(()=>{
    if(user){
      navigate('/dashboard')
    }else{
      navigate('/')
    }
          },[])
  return (
    <div className="heros">
                 {/* {user ? navigate('/'):navigate('/dashboard') } */}

      <div className="lefts">
        <div className="hero-pgs">
          <h4 className="introps">
            Ditch the dinner deliveries.  Drive  with  a sharper purpose.
          </h4>
        </div>
        <div className="quiz-content">
          <div className="question-title">
            <div className="herobtns"><button style={{marginLeft:'1rem'}} onClick={handleQuestion1Click} className='btnhero'>Sign up</button>
            <span className="hero-icon"><ImArrowRight size={35}/></span>
       </div>
          </div>
        </div>
      </div>
      <div className="rightsjj">
         {/* {showAnswer ? ( */}
          <MultiStepForm  />
        {/* ) : (  */}
          {/* <MultiStepForm className='' /> */}
         {/* )}  */}
      </div>
      {/* <Barcode/> */}
    </div>
  );
};

export default Hero;
