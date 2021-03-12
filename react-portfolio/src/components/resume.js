import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Avatar from '/Users/matthew/Desktop/React-Portfolio/react-portfolio/src/myAvatar.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={Avatar}
                            alt="avatar"
                            style={{height: '250px', marginTop: '5em', borderRadius: '50%',marginRight: '70%'}}/>
                        </div>
                        
                      
                        <h3 style={{paddingTop: '2em'}}>Matthew Starr</h3>
                        <h4>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
                        

                        <p style={{fontSize: '1.2em'}}>Developer with a background in sales and customer service.</p>


                        <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
                        <h4>Location</h4>
                        <p style={{fontSize: '1.2em'}}>Charlotte, NC </p>
                        <h4>Email</h4>
                        <p style={{fontSize: '1.2em'}}>matthewcstarr@yahoo.com</p>
                        <h4>Web</h4>
                        <p style={{fontSize: '1.2em'}}>linkedin.com/in/matthewcstarr</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '80%'}}/>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h3>Education</h3>

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="University of North Carolina, Charlotte"
                            schoolDescription="Full Stack Web Development Coding Boot Camp offering frontend and backend technology knowledge through a dynamic full stack coding program curriculum, including HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more."
                            />


                            <h3>Experience</h3>

                            <Experience
                            startYear={2019}
                            endYear={"Present"}
                            jobName="Freelance Web Developer"
                            jobDescription="Design, implement and deploy practical user applications upon customer request. Application analysis and design research on how to integrate features that meet the user requirements.
                            Analyze user needs and provide recommendations.
                            Create a solution for the task at hand.
                            Ensure that solutions are in line with the user's expectations using appropriate technologies."/>


                            <h3>Technical Skills</h3>

                            <Skills/>

                            

                       


                    


                        










                           
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;