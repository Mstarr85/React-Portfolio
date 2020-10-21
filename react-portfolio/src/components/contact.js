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
                       style={{height: '250px', marginTop: '5em', borderRadius: '50%'}}
                       />
                       <p style={{ width: '75', margin: 'auto', paddingTop: '1em'}}> </p>
                   </Cell>
                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>

                       <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    <a style={{color: 'black',textDecoration: 'none'}} href="tel:+7044431053">(704) 443-1053</a>
                                 
                                    </ListItemContent>
                             </ListItem>

                             <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    <a  style={{color: 'black',textDecoration: 'none'}} href="mailto:buylowsellhigh@me.com">buylowsellhigh@me.com</a>
                                    </ListItemContent>
                             </ListItem>

                             <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                <a  style={{color: 'black',textDecoration: 'none'}} href="https://www.linkedin.com/in/matthew-starr-a9b28b126/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />LinkedIn Profile
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