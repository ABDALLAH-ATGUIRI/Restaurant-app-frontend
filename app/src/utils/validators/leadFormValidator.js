export default function validate(values) {
	const errors = {};

	if (!values.fullname || values.fullname.trim() === "") {
		errors.fullname = "name is required field.";
	} else if (!/^([a-zA-Z ])+$/.test(values.fullname)) {
		errors.fullname = "Use only alphabetic characters.";
	} else if (values.fullname.length <= 3) {
		errors.fullname = "name must be at least 3 characters.";
	} else if (values.fullname.length > 50) {
		errors.fullname = "name must be less than 50 characters.";
	}

	// validating Email
	if (!values.email || values.email.trim() === "") {
		errors.email = "Email address is required field.";
	} else if (
		!/^([a-zA-Z._0-9-]+)@([a-zA-Z0-9]+[.]?)*([a-zA-Z0-9])(\.[a-zA-Z]{2,4})$/.test(
			values.email
		)
	) {
		errors.email = "Email address is not valid.";
	}

	// Validate Phone
	if (!values.phone || values.phone.trim() === "") {
		errors.phone = "Phone is required field.";
	} else if (!/^[0-9 +-]+$/.test(values.phone)) {
		errors.phone = "Use only numeric characters.";
	} else if (values.phone.length > 30) {
		errors.phone = "Phone must be less than 30 characters.";
	}

	// Validate Comment
	if (!values.comment || values.comment.trim() === "") {
		errors.comment = "Comment is required field.";
	} else if (values.comment.length > 50) {
		errors.comment = "Comment must be less than 50 characters.";
	}

	return errors;
}
