import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from '/Users/matthew/Desktop/React-Portfolio/react-portfolio/src/myAvatar.png';

/* form.js */
import Form from './form';






class Contact extends Component {
    render() {
        return(
           <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>Matthew Starr</h2>
                       <img
                       src={Avatar}
                       alt="avatar"
                       style={{height: '250px', marginTop: '5em', marginBottom: '5em', borderRadius: '50%'}}
                       />
                       <p style={{ width: '75', margin: 'auto', paddingTop: '1em'}}> </p>

                    <div>
                    <h3 style={{fontFamily: 'Anton'}}>I'd love to hear from you!</h3>
                    <p style={{width:'75%', margin:'auto', fontSize: '20px', fontFamily: 'roboto'}}>I'm happy to answer any questions you may have or provide you with an estimate for your current project. Just send me a message in the contact form or click on the contact links provided to the right of the page. </p> 
                    <br/>
                    <h4 style={{fontFamily: 'Anton'}}>Hope to hear from you soon! </h4>   
                    </div>

                   </Cell>


  


                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>

                       <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                <a style={{color: 'black',textDecoration: 'none'}} href="tel:+7044431053">
                                    <i className="fa fa-phone-square" aria-hidden="true"/> (704) 443-1053</a>
                                   </ListItemContent>
                             </ListItem>

                             <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <a  style={{color: 'black',textDecoration: 'none'}} href="mailto:buylowsellhigh@me.com">
                                        <i className="fa fa-envelope" aria-hidden="true"/>buylowsellhigh@me.com</a>

                                    </ListItemContent>
                             </ListItem>

                             <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                <a  style={{color: 'black',textDecoration: 'none'}} href="https://www.linkedin.com/in/matthew-starr-a9b28b126/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true"/> LinkedIn Profile
                            </a>
                                    </ListItemContent>
                             </ListItem>
                        </List>
                        </div>


                            
                            
                            
                            {/* form.js */}

                            <div className='form-grid'>
                                <Grid>
                                    <Cell style={{ padding:'0px', margin:'0px'}}col={12} >
                                <Form />

                                </Cell >
                                </Grid>
                            </div>








                        </Cell>
                    </Grid>
                </div>
        )
    }
}

export default Contact;