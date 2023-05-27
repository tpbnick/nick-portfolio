import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IForm {
	name: string;
	email: string;
	message: string;
}

interface IFormData extends IForm {
	"form-name": string;
}

interface IErrors {
	name?: string;
	email?: string;
	message?: string;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<IForm>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const [errors, setErrors] = useState<IErrors>({});
	const validate = (formData: IForm): IErrors => {
		const formErrors: IErrors = {};
		if (!formData.name) {
			formErrors.name = "Name required";
		}
		if (!formData.email) {
			formErrors.email = "Email required";
		}
		if (!formData.message) {
			formErrors.message = "Message is required";
		}
		return formErrors;
	};

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setErrors(validate(formData));
		setIsSubmitted(true);
	};

	const encode = (data: IFormData): string => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					"=" +
					encodeURIComponent(data[key as keyof IFormData])
			)
			.join("&");
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitted) {
			const data: IFormData = { "form-name": "contact-form", ...formData };
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode(data),
			})
				.then(() => {
					toast.success("Message Sent!", {
						position: "bottom-center",
						theme: "colored",
						autoClose: 5000,
						pauseOnHover: true,
						closeOnClick: true,
					});
					setIsSubmitted(false);
					setFormData({ name: "", email: "", message: "" });
				})
				.catch((error) => toast.error(`Message Failure \n${error.toString()}`));
		}
	}, [errors, formData, isSubmitted]);

	return (
		<div>
			<ToastContainer />
			<div className="flex justify-center items-center">
				<div className="flex flex-col items-center xl:w-1/2 sm:w-full">
					<form
						onSubmit={handleSubmit}
						id="contact-form"
						className="flex flex-col space-y-4 w-11/12 sm:w-full px-5 sm:px-0 mx-auto"
					>
						<input type="hidden" name="form-name" value="contact" />
						<div className="form-inputs w-full">
							<label className="text-white block text-xl text-left">
								Full Name:
								<input
									type="text"
									name="name"
									id="name"
									className="w-full text-black rounded shadow-lg mt-2 p-2"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your Name"
								/>
							</label>
							{errors.name && <p>{errors.name}</p>}
						</div>
						<div className="form-inputs w-full">
							<label className="text-white block text-xl text-left">
								Email Address:
								<input
									type="email"
									name="email"
									id="email"
									className="w-full text-black rounded shadow-lg mt-2 p-2"
									value={formData.email}
									onChange={handleChange}
									placeholder="your_email@domain.com"
								/>
							</label>
							{errors.email && <p>{errors.email}</p>}
						</div>
						<div className="form-inputs w-full">
							<label className="text-white block text-xl text-left">
								Message:
								<textarea
									name="message"
									id="message"
									className="w-full text-black rounded shadow-lg mt-2 p-3"
									value={formData.message}
									onChange={handleChange}
									placeholder="Your Message..."
								></textarea>
							</label>
							{errors.message && <p>{errors.message}</p>}
						</div>
						<div className="w-full text-center">
							<button
								type="submit"
								id="form-btn"
								className="btn text-xl bg-atom1 drop-shadow-md border-none text-white font-normal hover:bg-atom2 hover:border-atom2 py-2 mt-4 flex justify-center items-center mx-auto max-w-xs w-full"
							>
								Send <FontAwesomeIcon className="pl-2" icon={faPaperPlane} />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
