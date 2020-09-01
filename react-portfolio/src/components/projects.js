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

                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp) center / cover'}} >React Project #1</CardTitle>
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

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp) center / cover'}} >React Project #2</CardTitle>
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
            } else if(this.state.activeTab === 1){
                return (
                    <div><h1>This is NodeJS</h1></div>
                )
            } else if(this.state.activeTab === 2) {
               return (
                   <div><h1>This is MongoDB</h1></div>
               ) 
            } else if(this.state.activeTab === 3) {
                return (
                    <div><h1>This is Javascript</h1></div>
                )
            }

    }

    
    

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