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
                {/* Employee Directory */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop: '10%'}}>
                   <CardTitle style={{color: '#fff', height: '240px', background: 'url(https://user-images.githubusercontent.com/53281244/77220180-f9ef9480-6b13-11ea-9854-acc5e1e99fbe.png) center / cover'}} >React Project #1</CardTitle>
                   <CardText style={{ paddingBottom: '5px'}}>
                   <h6 style={{margin: '0', fontWeight: 'bolder'}}>Employee Directory</h6><p style={{margin: '0'}}>App that lets the user look up employee by name quickly by typing name in search box making it easier for employers to sort through employees</p>
                   </CardText>
                   <CardActions border style={{textAlign: 'center'}}>
                       <Button colored href='https://github.com/Mstarr85/employeeDirectory' rel="noopener noreferrer" target="_blank">Github</Button>
                       <Button colored href='https://tranquil-headland-02955.herokuapp.com/' rel="noopener noreferrer" target="_blank">Deployed</Button>
                       {/* <Button colored>LiveDemo</Button> */}
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

                    {/* Note Taker */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginTop: '10%'}}>
                       <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://user-images.githubusercontent.com/53281244/79055223-5462a900-7c19-11ea-8c86-c6e0d17c7646.png) center / cover'}} >Note Taker</CardTitle>
                       <CardText style={{paddingTop: '40px', paddingBottom: '5px'}}>
                       <h6 style={{marginTop: '0px', marginBottom: '0px', paddingTop: '0px', paddingBottom: '0px', fontWeight: 'bolder'}}>Note Taker</h6><p style={{marginBottom: '0'}}>A simple note taking app that user can add, save and delete notes using Nodejs and SQL.</p>
                       </CardText>
                       <CardActions border style={{textAlign: 'center'}}>
                           <Button   colored href="https://github.com/Mstarr85/Note_Taker" rel="noopener noreferrer" target="_blank">Github</Button>
                           <Button colored href="https://mstarr85-note-taker.herokuapp.com/" rel="noopener noreferrer" target="_blank">Deployed</Button>
                           {/* <Button colored>LiveDemo</Button> */}
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
    
                   </Card>
    
                    {/* Employee Tracker */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop: '10%'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://user-images.githubusercontent.com/53281244/79497193-46d06900-7ff5-11ea-82c2-47b1ea5dd015.png) center / cover'}} ></CardTitle>
                    <CardText style={{paddingBottom: '5px'}}>
                    <p style={{margin: '2px',padding: '0px'}}><h6 style={{margin: '0px', fontWeight: 'bolder'}}>Employee Tracker</h6>A command-line application built to allow user to keep track of employees, add or update their role, department, salary or user id.</p>
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored href='https://github.com/Mstarr85/Employee_Tracker' rel="noopener noreferrer" target="_blank">Github</Button>
                        {/* <Button colored>LiveDemo</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
    
                </Card>
                    </div>
                    )

                    /* End of Nodejs projecst section */
            
                } else if(this.state.activeTab === 2) {
               return (
                <div className="projects-grid">


                {/* MongoDB projects section */}
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop: '10%'}}>
                       <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://user-images.githubusercontent.com/53281244/75485119-1fa3d680-5978-11ea-8044-8370c7184f2f.png) center / cover'}} ></CardTitle>
                       <CardText style={{ paddingBottom: '5px'}}>
                       <h6 style={{fontWeight: 'bolder'}}>Workout-Tracker</h6><p>A Workout Tracker app that helps user reach their fitness goals quicker when they track their workout progress.</p>
                       </CardText>
                       <CardActions border style={{textAlign: 'center'}}>
                           <Button colored href='https://github.com/Mstarr85/Workout-Tracker' rel="noopener noreferrer" target="_blank">Github</Button>
                           <Button colored href='https://ancient-atoll-65262.herokuapp.com/?id=5e58198cc687c90017d1788e' rel="noopener noreferrer" target="_blank">Deployed</Button>
                           {/* <Button colored>LiveDemo</Button> */}
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
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop: '10%'}}>
                       <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/53281244/75977263-ffa97100-5ea9-11ea-9025-dd136e7a9a98.png) center / cover'}} ></CardTitle>
                       <CardText style={{paddingTop: '0px', paddingBottom: '5px', textAlign: 'left'}}>
                       <h6 style={{ textAlign: 'left', marginTop: '60px', fontWeight: 'bolder'}}>Random Password Generator</h6>User can generate a random password so that their sensitive information can stay safe.
                       </CardText>
                       <CardActions border style={{textAlign: 'center'}}>
                           <Button colored href='https://github.com/Mstarr85/randomPasswordGenerator' rel="noopener noreferrer" target="_blank">Github</Button>
                           <Button colored href='https://mstarr85.github.io/randomPasswordGenerator/' rel="noopener noreferrer" target="_blank">Deployed</Button>
                           {/* <Button colored>LiveDemo</Button> */}
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share" />
                       </CardMenu>
    
                   </Card>
    
                    {/* Quiz */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop: '10%'}}>
                    <CardTitle style={{color: '#fff', height: '213px', background: 'url(https://user-images.githubusercontent.com/53281244/79232092-12ae4a00-7e35-11ea-8a46-b5fc14aebf50.png) center / cover'}} ></CardTitle>
                    <CardText style={{ paddingTop: '0px', paddingBottom: '5px'}}>
                    <h6 style={{fontWeight: 'bolder'}}>Quiz</h6>This was created to showcase knowledge of building a timed multiple choice quiz using Javascript.
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored href='https://github.com/Mstarr85/Quiz' rel="noopener noreferrer" target="_blank">Github</Button >
                        <Button colored href='https://mstarr85.github.io/Quiz/' rel="noopener noreferrer" target="_blank">Deployed</Button>
                        {/* <Button colored>LiveDemo</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
    
                </Card>
    
                 {/* Burger */}
                 <Card shadow={5} style={{ minWidth: '450', margin: 'auto', marginTop: '10%'}}>
                 <CardTitle style={{ color: '#fff', height: '230px', background: 'url(https://user-images.githubusercontent.com/53281244/79225722-28b70d00-7e2b-11ea-8a7d-795201b9fe82.png) center / cover'}} ></CardTitle>
                 <CardText style={{ paddingTop: '0', paddingBottom: '5px'}}>
                 <h6 style={{ fontWeight: 'bolder'}}>Burger</h6>A restaurant app that lets user input the names of burgers they'd like to eat.
                 </CardText>
                 <CardActions border style={{textAlign: 'center'}}>
                     <Button colored href='https://github.com/Mstarr85/burger' rel="noopener noreferrer" target="_blank">Github</Button>
                     <Button colored href='https://frozen-brook-07158.herokuapp.com/' rel="noopener noreferrer" target="_blank">Deployed</Button>
                     {/* <Button colored>LiveDemo</Button> */}
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