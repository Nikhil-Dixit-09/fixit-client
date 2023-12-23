import React, { useEffect, useState } from 'react'
import './Login.css'
import { useSelector } from 'react-redux';
import file from '../../assets/file.png'
import back from '../../assets/icons8-left-arrow-24.png'
import data from '../../assets/data.png'
import chats from '../../assets/icons8-chat-24.png'
import upload from '../../assets/icons8-upload-24.png'
import Call from '../Call/Call';
import icon from '../../assets/ICON.png'
import arrowRight from '../../assets/arrowRight.png'
import { useNavigate } from 'react-router-dom';
import training from '../../assets/training.png'
import lefty from '../../assets/lefty.png'
import righty from '../../assets/righty.png'
import arrows from '../../assets/arrows.png'
import { useDispatch } from 'react-redux';
import { getResponse } from '../../actions/response';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2'
const clientId = "748556971175-prke8ks490cqramppvk08l9ke8tl2co5.apps.googleusercontent.com";
const secret = "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";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};
Modal.setAppElement('#root');
const Login = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  const [modalIsOpen, setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    if (show === true) {
      setIsOpen(false);
    }
  }



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(false);
  const handleChat = () => {
    setChat(!chat);
  }
  const [show, setShow] = useState(false);
  useEffect(()=>{
    const see=localStorage.getItem("profile");
    console.log(see);
    let decoded;
    if(see!==null){
      decoded=jwtDecode(see);
    }else{
      decoded={};
    }
    
    
    if(decoded?.email!==undefined){
      
      setShow(true);
      setIsOpen(false);
      dispatch({type:'SET_USER',data:decoded});
    }
  },[]);
  useEffect(() => {
    if (user?.email === undefined) {

    } else {
      setShow(true);
      closeModal();
      Swal.fire({
        icon: "success",
        title: "Logged in successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }, [user]);
  console.log(show);
  const handleBack = () => {
    navigate('/');
    dispatch({type:'RESET_USER'});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {};
    formData.message = message;
    dispatch(getResponse(formData));
    setMessage("");
  }
  const [dataa, setData] = useState(["Total Calls", "Invalid Calls", "Average Script Adherenece", "High Conversion Calls"]);
  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
  const handleNavigate=()=>{
    console.log('hiiiiiiiiiiii1234567654');
    navigate('/');
    navigate('/auth');
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='required'>
          Required
        </div>

        <div className='advice2'>
          We are dealing with some sensitive data.
        </div>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
            var decoded=jwtDecode(credentialResponse.credential);
            console.log(decoded);
            dispatch({type:'SET_USER',data:decoded});
            localStorage.setItem("profile",credentialResponse.credential);
            handleNavigate();
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />

      </Modal>
      {
        show === false &&
        <div>
          <div className='header2 blur' >
            <div className='company'>
              fi<span className='x'>X</span>it
            </div>
            <div className='right'>
              <div className='login'>
                Call Auditing
              </div>
              <div className='about'>
                About us
              </div>
            </div>
          </div>
          <div className='body2 blur'>
            <div className='lefty'>
              <div className='backDiv' onClick={handleBack}>
                <img className='back' src={back} alt="" />
              </div>
              <div className='callAudit'>
                Call Audit
              </div>
              <div className='summary'>
                <div className='margin'>
                  <img src={file} alt="" />
                </div>

                <div className='margin font'>Summary</div>
              </div>
              <div className='dataScore'>
                <div className='margin'>
                  <img className='dataimg' src={data} alt="" />
                </div>

                <div className='margin font'>Data Score</div>
              </div>
              <div className='uploadCall'>
                <div className='margin'>
                  <img src={upload} alt="" />
                </div>
                <div>
                  Upload Call Records
                </div>

              </div>
              <div className='aiAgent'>
                AI Agent
              </div>
              <div className='summary'>
                <div className='margin'>
                  <img src={file} alt="" />
                </div>

                <div className='margin font'>Summary</div>
              </div>
              <div className='chat' onClick={handleChat}>
                <div className='margin'>
                  <img src={chats} alt="" />
                </div>
                <div className='margin font'>
                  {
                    chat === false &&
                    <span>Chat</span>
                  }
                  {
                    chat === true &&
                    <span>Back</span>
                  }

                </div>

              </div>
              <div className='selectDocument'>
                Select Document
              </div>
              <div className='upload'>
                <div className='margin'>
                  <img src={upload} alt="" />
                </div>
                <div className='margin'>
                  Upload Document
                </div>
              </div>

            </div>

            {
              chat === true &&
              <div className='chatFunc'>
                <div className='fixitTitle'>
                  <div className='fixitIcon'>
                    <img src={icon} alt="" />
                  </div>

                  <div>
                    fi<span>X</span>it
                  </div>
                </div>
                <div className='input'>
                  <div>
                    <form action="" onSubmit={handleSubmit}>
                      <input className='inputText' value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='SalesGPT can help you to browse uncovered topics' />
                    </form>

                  </div>

                  <div>
                    <img src={arrowRight} alt="" />
                  </div>
                </div>

                <div className='trainingParent'>
                  <div className='training'>
                    <div>
                      <img src={training} alt="" />
                    </div>
                    <div className='trainingText'>
                      Training Nudges
                    </div>
                  </div>
                  <div className='arrows'>
                    <img src={arrows} alt="" />
                  </div>
                </div>
                <div className='nudges'>
                  No Nudges to show
                </div>
              </div>
            }
            {
              chat === false &&

              <div className='righty'>
                <div className='calls'>
                  {
                    dataa.map(function (data, index) {
                      return <Call data={data} ind={index} />;
                    })
                  }
                </div>
                <div className='advice'>
                  Please upload calls for detailed analysis
                </div>

              </div>

            }

          </div>
        </div>
      }
      {
        show === true &&
        <div>
          <div className='header2' >
            <div className='company'>
              fi<span className='x'>X</span>it
            </div>
            <div className='right'>
              <div className='login'>
                Call Auditing
              </div>
              <div className='about'>
                About us
              </div>
            </div>
          </div>
          <div className='body2'>
            <div className='lefty'>
              <div className='backDiv' onClick={handleBack}>
                <img className='back' src={back} alt="" />
              </div>
              <div className='callAudit'>
                Call Audit
              </div>
              <div className='summary'>
                <div className='margin'>
                  <img src={file} alt="" />
                </div>

                <div className='margin font'>Summary</div>
              </div>
              <div className='dataScore'>
                <div className='margin'>
                  <img className='dataimg' src={data} alt="" />
                </div>

                <div className='margin font'>Data Score</div>
              </div>
              <div className='uploadCall'>
                <div className='margin'>
                  <img src={upload} alt="" />
                </div>
                <div>
                  Upload Call Records
                </div>

              </div>
              <div className='aiAgent'>
                AI Agent
              </div>
              <div className='summary'>
                <div className='margin'>
                  <img src={file} alt="" />
                </div>

                <div className='margin font'>Summary</div>
              </div>
              <div className='chat' onClick={handleChat}>
                <div className='margin'>
                  <img src={chats} alt="" />
                </div>
                <div className='margin font'>
                  {
                    chat === false &&
                    <span>Chat</span>
                  }
                  {
                    chat === true &&
                    <span>Back</span>
                  }

                </div>

              </div>
              <div className='selectDocument'>
                Select Document
              </div>
              <div className='upload'>
                <div className='margin'>
                  <img src={upload} alt="" />
                </div>
                <div className='margin'>
                  Upload Document
                </div>
              </div>

            </div>

            {
              chat === true &&
              <div className='chatFunc'>
                <div className='fixitTitle'>
                  <div className='fixitIcon'>
                    <img src={icon} alt="" />
                  </div>

                  <div>
                    fi<span>X</span>it
                  </div>
                </div>
                <div className='input'>
                  <div>
                    <form action="" onSubmit={handleSubmit}>
                      <input className='inputText' value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='SalesGPT can help you to browse uncovered topics' />
                    </form>

                  </div>

                  <div>
                    <img src={arrowRight} alt="" />
                  </div>
                </div>

                <div className='trainingParent'>
                  <div className='training'>
                    <div>
                      <img src={training} alt="" />
                    </div>
                    <div className='trainingText'>
                      Training Nudges
                    </div>
                  </div>
                  <div className='arrows'>
                    <img src={arrows} alt="" />
                  </div>
                </div>
                <div className='nudges'>
                  No Nudges to show
                </div>
              </div>
            }
            {
              chat === false &&

              <div className='righty'>
                <div className='calls'>
                  {
                    dataa.map(function (data, index) {
                      return <Call data={data} ind={index} />;
                    })
                  }
                </div>
                <div className='advice'>
                  Please upload calls for detailed analysis
                </div>

              </div>

            }

          </div>
        </div>
      }

    </div>
  )
}

export default Login
