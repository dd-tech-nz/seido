import React, {useState} from "react"
import { Link } from "gatsby"
import { useAuth } from '../components/Firebase'
import { Form, Input, Button } from '../components/common'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Login = () => {

    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const {firebase} = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        firebase.login({email: formValues.email, password: formValues.password})
    }

    function handleInputChange(e) {
        e.persist()
        setFormValues(currentValues => ({
            ...currentValues, 
            [e.target.name]: e.target.value
        }))
    }

    return (
        <Layout>
            <Form onSubmit={handleSubmit} action="">
                <Input value={formValues.email} name="email" onChange={handleInputChange} placeholder="email" type="email" />
                <Input value={formValues.password} name="password" onChange={handleInputChange} placeholder="password" type="password" />
                <Button type="submit" block>
                    Login
                </Button>
            </Form>
        </Layout>
    )
}

export default Login
