import React from 'react'
import './Home.css'
import icon from '../../assets/ICON.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {
    const navigate=useNavigate();
    
    const handleLogin=()=>{
        navigate('/auth');
    }
    return (
        <div className='home'>
            <div className='header'>
                <div className='company'>
                    fi<span className='x'>X</span>it
                </div>
                <div className='right'>
                    <div className='login' onClick={handleLogin}>
                        Login
                    </div>
                    <div className='about'>
                        About us
                    </div>
                </div>
            </div>
            
            <div className='body'>
                <h1>
                    <span>
                        <span className='animation1'>F</span>
                        <span className='animation2'>i</span>
                        <span className='animation3'>x</span>
                    </span>
                    &nbsp;
                    <span>
                        <span className='animation4'>y</span>
                        <span className='animation5'>o</span>
                        <span className='animation6'>u</span>
                        <span className='animation7'>r</span>
                    </span>
                    &nbsp;
                    <span>
                        <span className='animation8'>S</span>
                        <span className='animation9'>a</span>
                        <span className='animation10'>l</span>
                        <span className='animation11'>e</span>
                        <span className='animation12'>s</span>
                    </span>
                    &nbsp;
                </h1>
                <br />
                <br />
            

                <div className='Enabling'>
                    <span>
                        <span className='animation13'>E</span>
                        <span className='animation14'>n</span>
                        <span className='animation15'>a</span>
                        <span className='animation16'>b</span>
                        <span className='animation17'>l</span>
                        <span className='animation18'>i</span>
                        <span className='animation19'>n</span>
                        <span className='animation20'>g</span>
                    </span>
                    &nbsp;
                    <span>
                        <span className='animation21'>H</span>
                        <span className='animation22'>u</span>
                        <span className='animation23'>m</span>
                        <span className='animation24'>a</span>
                        <span className='animation25'>n</span>
                    </span>
                    &nbsp;
                    
                    <span>
                        <span className='animation26'>I</span>
                        <span className='animation27'>n</span>
                        <span className='animation28'>t</span>
                        <span className='animation29'>e</span>
                        <span className='animation30'>l</span>
                        <span  className='animation31'>l</span>
                        <span className='animation32'>i</span>
                        <span className='animation33'>g</span>
                        <span className='animation34'>e</span>
                        <span className='animation35'>n</span>
                        <span className='animation36'>c</span>
                        <span className='animation37'>e</span>
                    </span>
                    &nbsp;
                    <span>
                        <span className='animation38'>w</span>
                        <span className='animation39'>i</span>
                        <span className='animation40'>t</span>
                        <span className='animation41'>h</span>
                    </span>
                    &nbsp;
                    <br />
                    
                    <span>
                        <span className='animation42'>A</span>
                        <span className='animation43'>r</span>
                        <span className='animation44'>t</span>
                        <span className='animation45'>i</span>
                        <span className='animation46'>f</span>
                        <span className='animation47'>i</span>
                        <span className='animation48'>c</span>
                        <span className='animation49'>i</span>
                        <span className='animation50'>a</span>
                        <span className='animation51'>l</span>
                    </span>
                    &nbsp;
                    <span>
                        <span className='animation52'>I</span>
                        <span className='animation53'>n</span>
                        <span className='animation54'>t</span>
                        <span className='animation55'>e</span>
                        <span className='animation56'>l</span>
                        <span className='animation57'>l</span>
                        <span className='animation58'>i</span>
                        <span className='animation59'>g</span>
                        <span className='animation60'>e</span>
                        <span className='animation61'>n</span>
                        <span className='animation62'>c</span>
                        <span className='animation63'>e</span>
                    </span>


                </div>

            </div>

        </div>
    )
}

export default Home
