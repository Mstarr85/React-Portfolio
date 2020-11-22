import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">


            {/* React projects section */}
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/53281244/77220180-f9ef9480-6b13-11ea-9854-acc5e1e99fbe.png) center / cover'}} >React Project #1</CardTitle>
                   <CardText>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   </CardText>
                   <CardActions border>
                       <Button colored href='https://github.com/Mstarr85/employeeDirectory' rel="noopener noreferrer" target="_blank">Github</Button>
                       <Button colored href='https://tranquil-headland-02955.herokuapp.com/' rel="noopener noreferrer" target="_blank">Deployed</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share" />
                   </CardMenu>

               </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp) center / cover'}} >React Project #2</CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button >
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>

            </Card>

             {/* Project 3 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp) center / cover'}} >React Project #3</CardTitle>
             <CardText>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </CardText>
             <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePen</Button>
                 <Button colored>LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
             </CardMenu>

         </Card>

         
                </div>
                
            )


          /* Nodejs projects section */  
            } else if(this.state.activeTab === 1){
                return (
                    


                    <div className="projects-grid">

                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                       <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/53281244/79055223-5462a900-7c19-11ea-8c86-c6e0d17c7646.png) center / cover'}} >Note Taker</CardTitle>
                       <CardText>
                       A simple note taking app that user can add, save and delete notes using Nodejs and SQL.
                       </CardText>
                       <CardActions border>
                           <Button   colored href="https://github.com/Mstarr85/Note_Taker" rel="noopener noreferrer" target="_blank">Github</Button>
                           <Button colored href="https://mstarr85-note-taker.herokuapp.com/" rel="noopener noreferrer" target="_blank">Deployed</Button>
                           <Button colored>LiveDemo</Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
    
                   </Card>
    
                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/53281244/79497193-46d06900-7ff5-11ea-82c2-47b1ea5dd015.png) center / cover'}} >React Project #2</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored href='https://github.com/Mstarr85/Employee_Tracker' rel="noopener noreferrer" target="_blank">Github</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
    
                </Card>
    
                 {/* Project 3 */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp) center / cover'}} >React Project #3</CardTitle>
                 <CardText>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </CardText>
                 <CardActions border>
                     <Button colored>Github</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share" />
                 </CardMenu>
    
             </Card>
             </div>

/* End of Nodejs projecst section */
























                )
            } else if(this.state.activeTab === 2) {
               return (
                <div className="projects-grid">


                {/* MongoDB projects section */}
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                       <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/53281244/75485119-1fa3d680-5978-11ea-8044-8370c7184f2f.png) center / cover'}} ></CardTitle>
                       <CardText>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       </CardText>
                       <CardActions border>
                           <Button colored href='https://github.com/Mstarr85/Workout-Tracker' rel="noopener noreferrer" target="_blank">Github</Button>
                           <Button colored href='https://ancient-atoll-65262.herokuapp.com/?id=5e58198cc687c90017d1788e' rel="noopener noreferrer" target="_blank">Deployed</Button>
                           <Button colored>LiveDemo</Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
    
                   </Card>
    
                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp) center / cover'}} >React Project #2</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button >
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
    
                </Card>
    
                 {/* Project 3 */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp) center / cover'}} >React Project #3</CardTitle>
                 <CardText>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </CardText>
                 <CardActions border>
                     <Button colored>Github</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share" />
                 </CardMenu>
    
             </Card>
    
             
                    </div>
                    
                )
    
               



               /* Beginning of Javascript projects */
            } else if(this.state.activeTab === 3) {
                return (
                    <div className="projects-grid">

                    {/* Random Password Generator */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                       <CardTitle style={{color: '#fff', height: '174px', background: 'url(https://user-images.githubusercontent.com/53281244/75977263-ffa97100-5ea9-11ea-9025-dd136e7a9a98.png) center / cover'}} ></CardTitle>
                       <CardText style={{padding: '2px', textAlign: 'center'}}>
                       <h6>Random Password Generator</h6>User can generate a random password so that their sensitive information can stay safe.
                       </CardText>
                       <CardActions border>
                           <Button colored href='https://github.com/Mstarr85/randomPasswordGenerator' rel="noopener noreferrer" target="_blank">Github</Button>
                           <Button colored href='https://mstarr85.github.io/randomPasswordGenerator/' rel="noopener noreferrer" target="_blank">Deployed</Button>
                           <Button colored>LiveDemo</Button>
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
    
                   </Card>
    
                    {/* Quiz */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/53281244/79232092-12ae4a00-7e35-11ea-8a46-b5fc14aebf50.png) center / cover'}} ></CardTitle>
                    <CardText>
                    <h6>Quiz</h6>This was created to showcase knowledge of building a timed multiple choice quiz using Javascript.
                    </CardText>
                    <CardActions border>
                        <Button colored href='https://github.com/Mstarr85/Quiz' rel="noopener noreferrer" target="_blank">Github</Button >
                        <Button colored href='https://mstarr85.github.io/Quiz/' rel="noopener noreferrer" target="_blank">Deployed</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
    
                </Card>
    
                 {/* Burger */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/53281244/79225722-28b70d00-7e2b-11ea-8a7d-795201b9fe82.png) center / cover'}} ></CardTitle>
                 <CardText>
                 <h6 style={{ fontWeight: 'bold'}}>Burger</h6>A restaurant app that lets user input the names of burgers they'd like to eat.
                 </CardText>
                 <CardActions border>
                     <Button colored href='https://github.com/Mstarr85/burger' rel="noopener noreferrer" target="_blank">Github</Button>
                     <Button colored href='https://frozen-brook-07158.herokuapp.com/' rel="noopener noreferrer" target="_blank">Deployed</Button>
                     <Button colored>LiveDemo</Button>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                     <IconButton name="share" />
                 </CardMenu>
    
             </Card>
    
             
                    </div>
                )
            }

    }

    /* End of Javascript projects */
    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Javascript</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
        
                </div>
        )
    }
}

export default Projects;