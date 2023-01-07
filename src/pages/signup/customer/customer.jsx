import React from 'react'
import Navbar from '../../../components/nav/navbar'
import { Nav, Container, Input, InputGroup, Form, FormGroup , Label, Button} from 'reactstrap'
import "./customer.css"

export default function Customer() {
  return (
    <div className='main-box'>
        <Nav>
        <Navbar />
        </Nav>
        <br />
        <br />
        <br />
        <Container
        className='form-container p-5 p-sm-2 form-box bg-sm-dark bg-md-dark'
        >
            <Form  className='p-5  form-el'>
                <FormGroup className="flex-1">
                    <Label for='Password' hidden>
                        Password
                    </Label>
                    <Input
                        id='Username'
                        name='Username'
                        className='Username input'
                        placeholder='Username'
                        type="text"
                    />
                </FormGroup>

                <FormGroup className="flex-1">
                    <Label for='Email' hidden>
                        Email
                    </Label>
                    <Input
                        id='Email'
                        name='Email'
                        className='Email input'
                        placeholder='Email'
                        type="email"
                        required
                    />
                </FormGroup>

                <FormGroup className="flex-1">
                    <Label for='Password' hidden>
                        Password
                    </Label>
                    <Input
                        id='Password'
                        name='password'
                        className='password input'
                        placeholder='Password'
                        type="password"
                    />
                </FormGroup>
                <FormGroup className="flex-1">
                    <Label for='Password2' hidden>
                        Password
                    </Label>
                    <Input
                        id='Password2'
                        name='password'
                        className='password input'
                        placeholder='Password'
                        type="password"
                    />
                </FormGroup>
                
                <FormGroup className="flex-1 d-flex gap-2">
                    
                    <Input
                        id='Password'
                        name='password'
                        className='password input'
                        placeholder='Password'
                        type="password"
                    />
                    <Input
                        id='Password'
                        name='password'
                        className='password input'
                        placeholder='Password'
                        type="password"
                    />
                </FormGroup>
                <Button className="flex-1 w-100 bttn">Submit</Button>
            </Form>

        </Container>
    </div>
  )
}
