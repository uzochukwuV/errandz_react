/* Login components */
import {
	Form,
	FormGroup,
	Input,
	InputGroup,
	Label,
	Button,
	Container,
} from "reactstrap";
import React, { useState , useCallback, useEffect, use} from "react";
import Navbar from "../../components/nav/navbar";
import "./login.css";
import { GoogleLogin} from '@react-oauth/google';





export default function Login() {
	const [show, setshow] = useState(false);
	const handleClickShowPassword = () => {
		setshow({ ...show, show: !show });
	};

	const handleSubmit = useCallback(()=>{
		window.alert("jfytdjtrdjrfdfg")
	});

	


	return (
		<div>
			
				<div className='main-box'>
					<div className='flex-0 bg-dark'>
						<Navbar />
					</div>
					<br />
					<br />
					<Container
						fluid={true}
						className=' px-0 vh-100 position-relative justify-content-center align-items-center
       vw-100 d-flex'>
						<Container className='container-fluid position-absolute form-box'>
							<div className='sign-text'>
								<p>Sign in to your account</p>
							</div>

							<Form 
							className='d-flex flex-column form-el gap-2'
							onSubmit={(event)=>{
								event.preventDefault();
								handleSubmit();
								console.log("ok")
							}}
							>
								<div className="h-10 d-flex flex-column mx-auto justify-content-center alig">
									<p className="mx-auto fw-semi-bold fs-4">Sign in with</p>
							<GoogleLogin
							onSuccess={credentialResponse => {
								console.log(credentialResponse);
							}}
							onError={() => {
								console.log('Login Failed');
							}}
							size="large"
							width="300px"
							ux_mode="popup"
							
							/>
							<p className="mx-auto fw-semibold fs-5">Or</p>
							</div>
								<FormGroup className='flex-1 form-group'>
									<Label for='exampleEmail' hidden>
										Email
									</Label>
									<Input
										id='exampleEmail'
										name='email'
										placeholder='E-mail'
										type='email'
									/>
								</FormGroup>{" "}
								<FormGroup className='flex-1 form-group'>
									<Label for='Password' hidden>
										Password
									</Label>
									<Input
										id='Password'
										name='password'
										placeholder='Password'
										type={show ? "text" : "password"}
									/>
								</FormGroup>
								<FormGroup
									check
									className='text-dark d-flex gap-1 form-group mb-2'>
									<Input
										type='checkbox'
										className='check-box'
										id='check'
										onClick={handleClickShowPassword}
									/>
									<Label check>Show Password</Label>
									<div className='d-inline-flex flex-fill justify-content-end px-1 '>
										<a href='' className=' text-dark'>
											Forgot Password
										</a>
									</div>
								</FormGroup>
								<div className='flex-1 form-group'>
									<Button className=' bttn w-100'>Submit</Button>
								</div>
								

							</Form>
							<div className='accept-text mx-auto'>
								Don't have an account? Sign Up
							</div>
							
						</Container>
					</Container>
					<br />
					<br />
				</div>
			
		</div>
	);
}
