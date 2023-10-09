import React from 'react';
import '../styles/formURL.css';

function FormURL({ formData, setFormData }) {
	// const handleSubmit = e => {
	// 	e.preventDefault();
	// };

	const handleChange = e => {
		setFormData(e.target.value);
	};

	return (
		<form className='form'>
			<input
				type='text'
				value={formData}
				onChange={handleChange}
				placeholder='Insertar tu link'
			/>
			{/* <input type='submit' /> */}
		</form>
	);
}

export default FormURL;
