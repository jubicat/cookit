import Yup from "./validate"

export const detailSchema = Yup.object().shape({
    firstName: Yup.string().required().matches(/^[a-z ,.'-]+$/i),
    lastName: Yup.string().required().matches(/^[a-z ,.'-]+$/i),
    username: Yup.string().required().matches(/^[a-zA-Z0-9]+$/)
})