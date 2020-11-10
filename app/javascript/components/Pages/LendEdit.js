import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class Lend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                title: this.props.book.title,
                author: this.props.book.author,
                description: this.props.book.description,
                pages: this.props.book.pages,
                series: this.props.book.series,
                img_url: this.props.book.img_url
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
        this.props.updateBook(this.state.form, this.props.book.id)
        this.setState({ success: true })
    }

    render() {
        let { form, success } = this.state
        return (
            <div className="form-page">
                <h3 className="heading">Edit Book</h3>
                <div className="form">
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

                        <Button
                            name="submit"
                            className="form-submit-btn"
                            onClick={this.handleSubmit}
                        >
                            Add a new Book!
                        </Button>
                    </Form>
                </div>

                { success && <Redirect to={`/lended/${this.props.book.id}`} />}

            </div>
        )
    }
}
