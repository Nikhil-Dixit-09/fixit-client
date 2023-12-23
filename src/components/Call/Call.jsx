import React from 'react'
import './Call.css'
import up from '../../assets/up.png'
const Call = (props) => {
    return (
        <div className='call'>
            <div className='callTitle'>
                {props.data}
            </div>
            <br />
            <br />
            <div className='zero'>
                {
                    (props.ind === 0 || props.ind === 1) &&
                    <div>
                        0
                    </div>
                }
                {
                    (props.ind === 2 || props.ind === 3) &&
                    <div>
                        0%
                    </div>
                }
            </div>
            <div className='bottomc'>
                <div>
                    <img src={up} alt="" />
                </div>
                <div>
                    <span className='percent'>+2.11%</span>
                    &nbsp;
                    <span className='last'> vs last 30 days</span>
                </div>
            </div>
        </div>
    )
}

export default Call
