import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'


const mapStateTOProps = state => state

const mapDispatchToProps = (dispatch) => ({
    addTask : (someText) => dispatch({
        type : "ADD_TASK", 
        payload : someText
    })
})

class AddTask extends Component {
    state = {
        text : ""
    }

    const submitTask = () => {

    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <input type="text" 
                        placeholder="add task here"
                        value={this.state.text} 
                        onChange={(e) => this.setState({text: e.currentTarget.value})} />
                    </Row>
                    <button onClick={() => this.state.addTask(this.state.text)}> ADD TASK </button>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateTOProps, mapDispatchToProps)(addTask)