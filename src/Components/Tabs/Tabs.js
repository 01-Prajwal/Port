import React, { useState } from 'react'
import './Tabs.scss'
const Tabs = ({handleChange}) => {

    return (

        <div className="wrap">
            <div className="wrapp">

                <input class="radio" id="one" name="group" type="radio"
                 onChange={()=>handleChange('one')} />
                <input class="radio" id="two" name="group" type="radio" 
                onChange={()=>handleChange('two')} />
                {/* <input class="radio" id="three" name="group" type="radio" /> */}
                {/* <input type="radio"  id='one' name='group' /> */}
                <div class="tabs">
                    <label class="tab" id="one-tab" for="one">Know</label>
                    <label class="tab" id="two-tab" for="two">More</label>
                    {/* <label class="tab" id="three-tab" for="three">Tab3</label> */}
                </div>

                <div class="panels">
                    <div class="panel" id="one-panel">
                        <div class="panel-title">About Me</div>
                        <p>As a web developer and React enthusiast, I am passionate about crafting immersive digital experiences and building user-friendly interfaces. Currently in my fourth year of computer engineering, I have dedicated myself to honing my skills in front-end development and staying up to date with the latest web technologies.My journey into the world of web development began with a curiosity for design and a desire to bring creative visions to life. Through hands-on projects and constant exploration, I have developed a strong foundation in HTML, CSS, and JavaScript, which has served as a stepping stone for my proficiency in React.</p>
                    </div>
                    <div class="panel" id="two-panel">
                        <div class="panel-title">Skills</div>
                        <h4>HTML</h4>

                        <div class="progress">
                            <div class="progress-value"></div>
                        </div>
                        <h4>CSS</h4>

                        <div class="progress">
                            <div class="progress-value1"></div>
                        </div>
                        <h4>JS</h4>

                        <div class="progress">
                            <div class="progress-value2"></div>
                        </div>
                        <h4>REACT</h4>

                        <div class="progress">
                            <div class="progress-value3"></div>
                        </div>
                    </div>
                    {/* <div class="panel" id="three-panel">
                    <div class="panel-title">Title3</div>
                    <p>Content3</p>
                </div> */}
                </div>
            </div>
        </div>



    )
}

export default Tabs