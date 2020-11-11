import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
    render() {
      return(
     <Grid>
        <Cell col={8} style= {{fontSize: '4.2em', marginLeft: '34%', justifyContent:'space-between', display: 'flex', padding: '0 10 0 10'}}>
        
       
<div className='skill-icons'>
<i className="fab fa-html5" />

<i className="fab fa-css3-alt"/>

<i className="fab fa-js-square"/>

<i className="fab fa-bootstrap"></i>

<i className="fab fa-react" style={{color: 'white'}}></i>

<i className="fab fa-node"></i>

<i className="fab fa-git-alt"></i>

<i className="fab fa-github-square"/> 
</div>
</Cell> 



<Grid>
    <Cell col={8} style={{fontSize: '2em', marginLeft: '30%', justifyContent:'space-between', display: 'flex'}}>



<p className="tech-skills" style={{fontSize: '25px', fontFamily: 'Helvetica Arial sans-serif', fontWeight: '400', lineHeight: '40px', textAlign: 'left', marginLeft: '30px'}}>Express | MongoDB | MySQL | Mongoose | Handlebars  Materialize  APIs | Heroku | ES6+ | jQuery | JSX   </p>

    </Cell>


</Grid>









        <Cell col={8}>
            <h4 style={{marginTop: '0px', fontSize: '2em'}}>{this.props.schoolName}</h4>
            <p style={{fontSize: '1.2em'}}>{this.props.schoolDescription}</p>
        </Cell> 
     </Grid>
      )  
    }
}

export default Skills;