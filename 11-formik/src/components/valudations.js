import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email("Geçersiz bir email girdiniz!").required("Zorunlu alan"),
    password: yup.string().min(5, "Parola 5 karakterden kısa olamaz").required("Zorunlu alan"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Girilen şifre password ile aynı değil").required("Zorunlu alan")
});

export default validations;