import React, { useState } from 'react'
import { Form, Input, Button } from '../components/common'
import Layout from "../components/layout"
import {useAuth} from '../components/Firebase'

const Register = () => {
    const {firebase} = useAuth()
    
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassord: ''
    })

    function handleInputChange(e) {
        e.persist()
        setFormValues(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (formValues.password === formValues.confirmPassword) {
            firebase.register({
                email: formValues.email,
                password: formValues.password
            })
        }

        console.log(formValues)
    }

    return (
        <Layout>
            <Form onSubmit={handleSubmit} >
                <Input onChange={handleInputChange} value={formValues.email} placeholder="email" type="email" required name="email"/>
                <Input onChange={handleInputChange} value={formValues.password} placeholder="password" type="password" required minLength={8} name="password"/>
                <Input onChange={handleInputChange} value={formValues.confirmPassword} placeholder="confirm password" type="password" required minLength={8} name="confirmPassword"/>
                <Button type="submit" block>
                    Register
                </Button>
            </Form>
        </Layout>
    )
}

export default Register