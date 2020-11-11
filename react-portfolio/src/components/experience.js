import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
      return(
     <Grid>
        <Cell col={4}>
         <p style={{fontSize: '1.4em'}}>{this.props.startYear} - {this.props.endYear}</p>  
        </Cell> 

        <Cell col={8}>
            <h4 style={{marginTop: '0px', fontSize: '2em' }}>{this.props.jobName}</h4>
            <p style={{fontSize: '1.4em'}}>{this.props.jobDescription}</p>
        </Cell> 
     </Grid>
      )  
    }
}

export default Experience;