import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Required field."),
  name: yup
    .string()
    .min(3, "name must be at least 5 characters.")
    .required("Required field."),
  message: yup
    .string()
    .min(5, "Message must be at least 5 characters.")
    .required("Required field."),
});

export default validations;
