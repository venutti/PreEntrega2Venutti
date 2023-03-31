import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Debe tener 15 caracteres o menos")
    .required("Este campo es obligatorio"),
  lastName: Yup.string()
    .max(20, "Debe tener 20 caracteres o menos")
    .required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Debes ingresar un email válido")
    .required("Este campo es obligatorio"),
  phone: Yup.string()
    .matches(/^([0-9]){7,14}$/, "Debes ingresar un número de teléfono válido")
    .required("Este campo es obligatorio"),
});
