import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from '/Users/matthew/Desktop/React-Portfolio/react-portfolio/src/myAvatar.png';



class Landing extends Component {
    render() {
        return(
            <div style= {{width: '100%', margin: 'auto'}} >
                <Grid className="landing-grid">
                    <Cell col={12}>
                      <img 
                      src={Avatar}
                      alt="avatar"
                      className="avatar-img"/>  

                      <div className="banner-text">
                          <h1>Full Stack Web Developer</h1>

                          <hr/>

                          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                          
                          <div className="social-links">

                            {/* LinkedIn */} 
                            <a href="https://www.linkedin.com/in/matthew-starr-a9b28b126/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </a>

                             {/* Github */} 
                             <a href="https://github.com/Mstarr85" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github-square" aria-hidden="true" />
                                </a>

                             {/* Freecodecamp */} 
                             <a href="https://www.freecodecamp.org/fcc4ceacb70-3948-4f4e-8ef8-8e76ddbd3528" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-free-code-camp" aria-hidden="true" />
                            </a>
                          </div>
                          </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;