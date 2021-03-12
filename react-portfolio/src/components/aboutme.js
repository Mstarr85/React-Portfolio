// import React, { Component } from 'react';

// import { Grid, Cell } from 'react-mdl';

// class About extends Component {
//     render() {
//         return (
//             //             <div><h1>About Page</h1></div>

//             //         )  
//             //     }
//             // }




//             <Grid className="about-grid">
//                 <Cell col={12}>






//                     <div className="banner-text">




//                         <p>Personable and energetic developer with a background in sales and customer service with a Full-Stack Web Development Certification from the University of North Carolina, Charlotte Campus. During this intensive boot camp I honed skills in Node.Js, Express, JavaScript, jQuery, React.js, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML, CSS, Bootstrap, Materialize, APIs, Heroku, Terminal and ES6+. I am able to successfully collaborate and work on a diverse team or solo while solving problems in high-stress environments. Very communicative and driven individual who enjoys connecting with co-workerkers/clients and is passionate about building applications that assist users to make their experience easier. Looking to bring my attention to detail and technical skills to add value to the project.</p>


//                     </div>





//                 </Cell>
//             </Grid>


//         )
//     }
// }











// export default About;




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
                          <h1>About Me</h1>

                  
                          {/* <p>Personable and energetic developer with a background in sales and customer service with a Full-Stack Web Development Certification from the University of North Carolina, Charlotte Campus. During this intensive boot camp I honed skills in Node.Js, Express, JavaScript, jQuery, React.js, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML, CSS, Bootstrap, Materialize, APIs, Heroku, Terminal and ES6+. I am able to successfully collaborate and work on a diverse team or solo while solving problems in high-stress environments. Very communicative and driven individual who enjoys connecting with co-workerkers/clients and is passionate about building applications that assist users to make their experience easier. Looking to bring my attention to detail and technical skills to add value to the project.</p> */}
                        <p style={{fontSize: '1.2em'}}>I am so happy you made it here!  My name is Matthew Starr and I am a graduate from The University of North Carolina at Charlotte where I earned a Full Stack Web Developer Certificate.  Coming to the decision of choosing to pursue this career all started when I was a child taking apart my electronic toys and trying to put them back together just to see how they worked.  When I became older computers were starting to become more common in every household and I was fascinated by them.  How could this box do all of these things?  My grandfather bought his first Windows pc and gave me his old one which was an MS-DOS based system.  Being a young man I gravitated towards the video games that came on the floppy discs which propelled me to learn how to fully operate the machine.  Later my father bought the family our first Windows PC.  That progressed to building my own PC.  Now I am here building websites and apps.  My appetite to learn keeps growing as I learn more.  I have a beautiful wife and daughter and 3 cats who I share a household with. Outside of coding I love creating and listening to music, helping community, ham radio, flying drones, gaming, investing, and health and fitness.  My goal is to take this new exciting career as far as it goes.</p>
                         
                          
                          </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;