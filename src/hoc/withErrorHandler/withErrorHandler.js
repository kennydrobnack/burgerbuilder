import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            console.log("In component did mount of withErrorHandler")
     
            axios.interceptors.response.use(
                res => {
                    console.log("Response: ", res)
                    return res
                }, 
                error => {
                    console.log("Got an error: ", error)
                    this.setState({ error: error })
            })

            axios.interceptors.request.use(req => {
                console.log("Clearing error")
                this.setState({ error: null })
                return req
            })
        }

        errorConfirmedHandler = () => {
            console.log("Clicked on errorConfirmedHandler")
            this.setState({ error: null })
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent{...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler