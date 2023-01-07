import React, {useEffect} from 'react'
import Navbar from '../../../components/nav/navbar'
import { Nav, Container, Input, InputGroup, Form, FormGroup , Label, Button} from 'reactstrap'
import "./vendor.css"
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';



function Vendor() {
  

  return (
    <div className='main-box'>


        <div className='NavBox'>
        <Navbar />
        </div>
        <br />
        <br />
        <br />
        <Container
        className='form-container p-5 p-sm-2 form-box bg-sm-dark bg-md-dark'
        >
            <Form  className='p-5  form-el'>
                <FormGroup className="flex-1">
                    <Label for='FirstName' hidden>
                        First Name
                    </Label>
                    <Input
                        id='FirstName'
                        name='FirstName'
                        className='Username input'
                        placeholder='First Name'
                        type="text"
                        required
                        aria-errormessage='First name taken'
                        
                    />
                </FormGroup>
                <FormGroup className="flex-1">
                    <Label for='LastName' hidden>
                        Last Name
                    </Label>
                    <Input
                        id='LastName'
                        name='LastName'
                        className='Email input'
                        placeholder='Last Name'
                        type="text"
                        required
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
                        required
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
                        placeholder='Confirm Password'
                        type="password"
                        required
                        
                    />
                </FormGroup>
                
                <FormGroup className="flex-1 d-flex gap-2">
                    
                    <Input
                        id='State'
                        name='State'
                        className='State input'
                        placeholder='State'
                        type="text"
                        required
                        aria-autocomplete='list'
                    />
                    <Input
                        id='City'
                        name='City'
                        className='City input'
                        placeholder='City'
                        type="text"
                        aria-autocomplete='list'
                        required
                        
                    />
                </FormGroup>
                <FormGroup className=' mr-auto  d-flex accept-div'>
                    <Input
                        id='Accept'
                        name='Accept'
                        type="checkbox"
                        required
                        />
                    
                    <span className='accept-text'>
                        By clicking the button you agree to
                        Privacy policy and terms of service
                    </span>
                    
                </FormGroup>
                <Button className="flex-1 w-100 bttn">Submit</Button>
            </Form>

        </Container>
        <br />
        <br />
    </div>
  )
}

export default Vendor
