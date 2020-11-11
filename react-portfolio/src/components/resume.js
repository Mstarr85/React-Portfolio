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
                            style={{height: '250px', marginTop: '5em', borderRadius: '50%'}}/>
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Matthew Starr</h2>
                        <h4>Full-Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Personable and energetic Developer with a background in sales and customer service. Able to successfully collaborate and work alone or on a diverse team while solving problems in high-stress environments. A very communicative and driven individual who enjoys connecting with co-workers and clients. Passionate about building applications that assist everyday people to make their lives easier. Looking to bring my attention to detail and technical skills to a company to grow with and add value to their current project.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Location</h5>
                        <p>Charlotte, NC </p>
                        <h5>Email</h5>
                        <p>buylowsellhigh@me.com</p>
                        <h5>Web</h5>
                        <p>www.linkedin.com/in/matthew-starr-a9b28b126/</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="University of North Carolina, Charlotte"
                            schoolDescription="Full-Stack Web Development Coding Boot Camp offering front-end and back-end technology knowledge through a dynamic full-stack coding program curriculum, including HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more."
                            />


                            <h2>Experience</h2>

                            <Experience
                            startYear={2020}
                            endYear={"Present"}
                            jobName="Freelance Web Developer"
                            jobDescription="Design, implement and deploy practical user applications upon customer request. Application analysis and design research on how to integrate features that meet the user requirements.
                            Analyze user needs and provide recommendations.
                            Create a solution for the task at hand.
                            Ensure that solutions are in line with the user's expectations using appropriate technologies."/>


                            <h2>Technical Skills</h2>

                            <Skills/>

                            

                       


                    


                        










                           
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;