import React, { useState } from 'react'
import three from '../../Assets/profile.jpeg'
import './content.scss'
import Tabs from '../Tabs/Tabs'
// import Profile from '../Profile'

const Content = () => {
    const [tab, SetTab] = useState('');

    const handleChange = (tabId) => {
        SetTab(tabId);
    }
    let col = '';
    switch (tab) {
        case 'one':
            col = 'rgb(68 78 90)';
            break;

        case 'two':
            col = 'rgb(37 46 60)';
            break;
        default:
            col = '';
    }
    return (
        <>
            {/* <Profile col = {col}/> */}
            {/* <div class="shape"  >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" style={{fill:col}}></path>
        </svg>
      </div> */}
            <div className="main" style={{ backgroundColor: col, transition: 'background-color 0.3s ease' }}>
                {/* <div class="shape"  >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" style={{ fill: col }}></path>
                    </svg>
                </div> */}
                <div className="shape">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120" className="shape-fill">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="background">
                    {/* <h1>some background</h1>
                     */}
                    <div className="svg">

                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice" viewBox="24 105 156 95" >
                            <defs>

                            </defs>
                            <rect x="0" y="0" width="300" height="200" fill="hsl(216, 21%, 16%)" />
                            <path class="top-outer" fill="#EF8716" stroke="#371300" stroke-width="1" d="M68 1c23,0 67,17 69,39 4,38 5,52 -5,69 -20,36 -68,46 -120,-9 -27,-28 -7,-101 56,-99z" />
                            <path class="top-inner" fill="#537571" stroke="#DCB467" stroke-width="1" d="M69 22c33,-7 52,21 54,37 3,26 -1,28 -8,40 -15,25 -48,25 -85,-14 -19,-20 -4,-53 39,-63z" />
                            <path class="bottom-outer" fill="#DCB467" stroke="#371300" stroke-width="1" d="M158 158c30,13 56,50 44,75 -9,18 -22,46 -42,55 -20,10 -48,2 -73,-19 -29,-25 -27,-55 -9,-79 17,-22 43,-48 80,-32z" />
                            <path class="bottom-inner" fill="#263D56" stroke="#537571" stroke-width="1" d="M136 180c32,-9 45,13 46,29 3,27 8,29 0,42 -14,25 -52,24 -79,0 -21,-18 -2,-61 33,-71z" />
                        </svg>
                    </div>
                </div>
                <div className="content">
                    <div className="cont-1">

                        <div className="img-cont">

                            <img src={three} alt="" />

                        </div>
                        <div className="information">

                            <h1>Prajwal Bhange</h1>
                            <h3>Brings ideas to life with code ✨</h3>
                            <h3 className='head'>Web Developer / React Developer</h3>
                        </div>
                    </div>



                    <button className='btn'>
                        follow
                    </button>




                </div>
                <Tabs handleChange={handleChange} />

            </div>
        </>
    )
}

export default Content