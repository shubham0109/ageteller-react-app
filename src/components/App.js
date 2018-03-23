import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            newDate : "",
            birthday : "1996-09-01"
        }
    }

    getBirthday() {
        console.log(this.state);
        this.setState({
            birthday : this.state.newDate
        })
    }

    render() {
        return (
            <div className="App">
                <Form inline>
                <h2>Input your birthday!</h2>
                <FormControl 
                    type="date"
                    onChange={(event) => {return this.setState({newDate : event.target.value})}}    
                >
                </FormControl>
                {' '}
                <Button onClick = {() => {return this.getBirthday()}}>
                    Submit
                </Button>    
                </Form>
            </div>
        )
    }
} 

export default App;