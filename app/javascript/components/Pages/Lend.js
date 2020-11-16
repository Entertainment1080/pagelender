import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

import lendBackground from '../../components/Assets/lendBackground2.png'

export default class Lend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                title: "",
                author: "",
                description: "",
                pages: "",
                series: "",
                img_url: "",
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
        this.props.createNewBook(this.state.form)
        this.setState({ success: true })
    }

    render() {
        let { form, success } = this.state
        return (

            <div
                id="container"
                style={{
                    backgroundImage: `url(${lendBackground})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>

                <div className="form-page">

                    <div className="form">

                        <h3 className="heading"
                            style={{ backgroundSize: '1px' }}
                        >
                            Add a Book
                        </h3>

                        <Form>

                            <FormGroup>
                                <Label>Title</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    onChange={this.handleChange}
                                    value={form.title}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Author</Label>
                                <Input
                                    type="text"
                                    name="author"
                                    onChange={this.handleChange}
                                    value={form.author}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Description</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    onChange={this.handleChange}
                                    value={form.description}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Pages</Label>
                                <Input
                                    type="number"
                                    name="pages"
                                    onChange={this.handleChange}
                                    value={form.pages}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Series</Label>
                                <Input
                                    type="text"
                                    name="series"
                                    onChange={this.handleChange}
                                    value={form.series}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label>Image Url</Label>
                                <Input
                                    type="text"
                                    name="img_url"
                                    onChange={this.handleChange}
                                    value={form.img_url}
                                />
                            </FormGroup>
                        </Form>
                    </div>
                    <Button
                        name="submit"
                        className="form-submit-btn"
                        onClick={this.handleSubmit}
                    >
                        Add a new Book!
                    </Button>
                    {success && <Redirect to="/lendconfirmation" />}
                </div>
            </div>
        )
    }
}
