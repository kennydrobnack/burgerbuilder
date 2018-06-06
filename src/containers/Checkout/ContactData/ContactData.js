import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: ''
            },
            deliverymethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                }
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Kenny',
                address: {
                    street: 'Main Street',
                    zipCode: '12345',
                    country: 'USA'
                },
                email: 'kenny@thisdomaindoesnotexist.com'
            },
            deliverymethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false })
            })
    }

    render() {
        const formElementsArray = []
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    {/* <Input elementType="..." elementConfig="..." value="..."/>
                    <Input inputtype="input" type="email" name="email" placeholder="your@email.com" />
                    <Input inputtype="input" type="text" name="street" placeholder="Your Street Address" />
                    <Input inputtype="input" type="text" name="postal" placeholder="postal code" /> */}
                    {formElementsArray.map(formElement => (
                        <Input key={formElement.id} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} value={formElement.config.value}/> 
                    ))}
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData