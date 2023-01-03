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
import React from "react";
import Navbar from "../../components/nav/navbar";
import "./login.css";

export default function Login() {
	return (
		<div>
			{false ? (
				<div>
					hi
					<form onClick={() => localStorage.clear()}>
						<button type='submit'>logout</button>
					</form>
				</div>
			) : (
				<div className="main-box">
					<Navbar />

					<Container
						fluid={true}
						className='border px-0 vh-100 position-relative justify-content-center align-items-center
       vw-100 d-flex'>
						<Container className='container-fluid position-absolute form-box'>
							
									<div className="form-text fw-bold text-dark">
										<h4>Sign in to your account</h4>
									</div>
									
									<Form className="d-flex flex-column form-el gap-2">
										<FormGroup className="flex-1">
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
										<FormGroup className="flex-1">
											<Label for='examplePassword' hidden>
												Password
											</Label>
											<Input
												id='examplePassword'
												name='password'
												placeholder='Password'
												type='password'
											/>
										</FormGroup>
										<FormGroup check className="text-dark d-flex gap-1">
											<Input type="checkbox" className="check-box" />
											<Label check >
											Show Password
											</Label>
											<div className="d-inline-flex flex-fill justify-content-end px-1">
												<a href="" className=" text-dark">Forgot Password</a>
											</div>
										</FormGroup>
										<Button className="flex-1">Submit</Button>
									</Form>
								
								<div className='form-text'>
									<p>Don't have an account? Sign Up</p>
								</div>
							
						</Container>
					</Container>
				</div>
			)}
		</div>
	);
}
