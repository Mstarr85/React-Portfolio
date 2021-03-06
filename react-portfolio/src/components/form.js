/* This is what I'm trying to add to current React Project */


import React, { Component } from 'react'

import axios from 'axios';

export default class Form extends Component {

state={
    name: '',
    lastname: '',
    email: '',
    message: '',
    sent: false

}

// handle inputs
handleName=(e)=>{
    this.setState({
        name:e.target.value
    })
}

handleLastname=(e)=>{
    this.setState({
        lastname:e.target.value
    })
}

handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}

handleMessage=(e)=>{
    this.setState({
        message:e.target.value
    })
}


// end of handle inputs

formSubmit=(e)=>{
e.preventDefault();

let data = {
    name:this.state.name,
    lastname:this.state.lastname,
    email:this.state.email,
    message:this.state.message

}

axios.post('/api/forma',data)
.then(res=>{
    this.setState({
        sent:true,

    },this.resetForm())
}).catch(()=>{
    console.log('message not sent');
})
}

// for reseting initial data
resetForm=()=>{
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:''
    })
    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },3000)
}


    render() {
        return (
            <div className="container">
                <form onSubmit={this.formSubmit}>
                    {/* single item */}
                   <div className="singleItem">
                      <label htmlFor="name">Name</label> 
                      <input type="text" 
                      name="name"
                      className="name" 
                      placeholder="John"
                      value={this.state.name}
                      onChange={this.handleName}/>
                    </div>
                      {/* end of single item */}

                       {/* single item */}
                   <div className="singleItem">
                      <label htmlFor="lastname">Last Name</label> 
                      <input type="text" 
                      name="lastname"
                      className="lastname" 
                      placeholder="Doe"
                      value={this.state.lastname}
                      onChange={this.handleLastname}/>
                    </div>
                      {/* end of single item */}

                       {/* single item */}
                   <div className="singleItem">
                      <label htmlFor="email">Email</label> 
                      <input type="text" 
                      name="email"
                      className="name" 
                      placeholder="example@domain.com"
                      value={this.state.email}
                      onChange={this.handleEmail}
                      required
                      />
                      </div>
                      {/* end of single item */}

                      {/* single item */}
                      <div className="textArea singleItem" >
                          <label htmlFor="message">Message</label>
                        <textarea 
                        name="message" id=""
                        cols="30" rows="5"
                        placeholder="I would really like to hire you for our next project!"
                        value={this.state.message}
                        onChange={this.handleMessage}>
                        </textarea>
                      </div>
                      {/* end of single item */}
                    <div className={this.state.sent ?'msg msgAppear':'msg'}>Message has been sent</div>
                    <div className="btn">
                        <button type="submit">Submit
                        </button>
                    </div>
                   
                </form>
            </div>
        )
    }
}

