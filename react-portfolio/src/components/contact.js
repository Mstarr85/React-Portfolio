import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from '/Users/matthew/Desktop/React-Portfolio/react-portfolio/src/myAvatar.png';




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
                       style={{height: '250px'}}
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
                                    (704) 443-1053
                                    </ListItemContent>
                             </ListItem>

                             <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    buylowsellhigh@me.com
                                    </ListItemContent>
                             </ListItem>

                             <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                   MySkypeID
                                    </ListItemContent>
                             </ListItem>
                        </List>
                        </div>



                        </Cell>
                    </Grid>
                </div>
        )
    }
}

export default Contact;