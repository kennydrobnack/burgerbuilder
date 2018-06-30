import React, { Component } from 'react'

import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css'



class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email Address'
                },
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
                value: ''
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password (at least 6 characters)'
                },
                validation: {
                    required: true,
                    minLength: 6
                },
                touched: false,
                valid: false,
                value: ''
            }
        }
    }

    checkValidity(value, rules) {
        let isValid = true
        if (!rules) {
            return true
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minlength) {
            isValid = value.trim().length >= rules.minlength && isValid
        }
        if (rules.maxlength) {
            isValid = value.trim().length < rules.maxlength && isValid
        }
        return isValid
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.controls
        }
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value
        updatedFormElement.touched = true
        updatedFormElement.valid = updatedFormElement.validation && this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedForm[inputIdentifier] = updatedFormElement
        let formIsValid = true
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid
        }
        this.setState({ controls: updatedForm, formIsValid: formIsValid })
    }

    render() {
        const formElementsArray = []
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
       
        ))

        return (
            <div className={classes.Auth}>
                <form>
                    {form}
                </form>
                <Button btnType='Success'>Submit</Button>
            </div>
        )

    }
}

export default Auth