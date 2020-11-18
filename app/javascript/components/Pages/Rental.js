import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class Rental extends Component {
    constructor(props) {
        super(props)
        const urlParams = new URLSearchParams(window.location.search);
        const book_id = urlParams.get('book_id');
        this.state = {
            form: {
                book_id: book_id,
                pick_up_date: "",
                due_date: "",
                user_id: this.props.current_user.id
            },
            success: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewRental(this.state.form)
        this.setState({ success: true })
    }

    render() {
        let { form, success } = this.state
        return (
            <div className="rental-page" style={{ backgroundColor: "#ECFDFF" }}>
                <h2 className="headerText" style={{ color: "#044F6D" }}>Set your Rental</h2>
                <div className="rental-card">
                    <Form>

                        <FormGroup>
                            <Label>Pick Up Date:</Label>
                            <Input
                                type="datetime-local"
                                name="pick_up_date"
                                onChange={this.handleChange}
                                value={form.pick_up_date}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Due Date</Label>
                            <Input
                                type="datetime-local"
                                name="due_date"
                                onChange={this.handleChange}
                                value={form.due_date}
                            />
                        </FormGroup>

                        <Button
                            name="submit"
                            className="borrowInfoButton"
                            onClick={this.handleSubmit}
                        >
                            Create Rental
                        </Button>
                    </Form>
                </div>

                { success && <Redirect to="/borrowconfirmation" />}

            </div>
        )
    }
}
