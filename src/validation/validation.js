import * as yup from "yup";
import "yup-phone";

export const userFormSchema = yup.object().shape({
  name: yup.string().required("Please Enter Name!"),
  phoneNumber: yup
    .string()
    .typeError("That doesn't look like a phone number!")
    .required("Please Enter Phone Number!"),
});
