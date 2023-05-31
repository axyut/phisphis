import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AXIOS from "../axios/custom_axios";
import { API } from "../api/api_constants";
import { useState } from "react";

import "../css/login_signup.css";

const SignUp = () => {
	let navigate = useNavigate();
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
	});
	const handleInputs = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const register = async () => {
		const { firstName, lastName, email, phone, password } = user;
		console.log(firstName, lastName, email, phone, password);

		if (!firstName || !email || !password) {
			toast.info("Please fill all the fields");
			return;
		}

		try {
			const response = await AXIOS.post(API.AUTH.REGISTER, {
				firstName,
				lastName,
				email,
				password,
			});
			toast.success(`Congratulations! ${firstName}. Please Log in.`);
			console.log(response);
			navigate("/login");
		} catch (error) {
			console.log(error);

			toast.warn(error.response.data.msg);
		}
	};

	return (
		<div className="main">
			<div>
				{/* <h3 style={{ display: "grid", justifyContent: "center" }}>
					Create an Account.
				</h3> */}
				<div className="container">
					<form>
						<div className="inputFields">
							<label>*First Name</label>
							<input
								type="text"
								name="firstName"
								autoComplete="off"
								value={user.firstName}
								onChange={handleInputs}
							/>
						</div>
						<div className="inputFields">
							<label>Last Name</label>
							<input
								type="text"
								name="lastName"
								autoComplete="off"
								value={user.lastName}
								onChange={handleInputs}
							/>
						</div>
						<div className="inputFields">
							<label>*Email</label>
							<input
								type="text"
								name="email"
								autoComplete="off"
								value={user.email}
								onChange={handleInputs}
							/>
						</div>
						<div className="inputFields">
							<label>Number</label>
							<input
								type="text"
								name="phone"
								autoComplete="off"
								value={user.phone}
								onChange={handleInputs}
							/>
						</div>
						<div className="inputFields">
							<label>*Password</label>
							<input
								type="password"
								name="password"
								autoComplete="off"
								value={user.password}
								onChange={handleInputs}
							/>
						</div>

						<div>
							<button
								className="active-btn"
								onClick={register}
								type="button"
							>
								<span>Register Account</span>
							</button>
						</div>
					</form>
					<span>
						Already have an account?
						<a
							onClick={() => {
								navigate("/login");
							}}
						>
							Login!
						</a>
					</span>
				</div>
			</div>
			<div className="container">
				<h1>
					Phis Means Phising your friends and getting their passwords!
				</h1>
				<h2>Phis</h2>
				<h3>Phis</h3>
				<span>Phis</span>
				<label>Phis</label>
				<p>Sign In</p>
			</div>
		</div>
	);
};

export default SignUp;
