import React from "react";
import { useFormik } from "formik";
import { contactFormSchema } from "../schemas/contactFormSchema";
import { Button, CircularProgress, Stack, TextField } from "@mui/material";

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      repeatEmail: "",
      phone: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: async (values, actions) => {
      await onSubmit(values);
      actions.setSubmitting(false);
      actions.resetForm();
    },
  });

  const fieldProps = {
    variant: "outlined",
    fullWidth: true,
    required: true,
    disabled: formik.isSubmitting,
  };

  return (
    <Stack component="form" onSubmit={formik.handleSubmit} spacing={2} my={3}>
      <TextField
        id="firstName"
        label="Nombre"
        {...fieldProps}
        {...formik.getFieldProps("firstName")}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        id="lastName"
        label="Apellido"
        {...fieldProps}
        {...formik.getFieldProps("lastName")}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <TextField
        id="email"
        label="Correo electrónico"
        type="email"
        {...fieldProps}
        {...formik.getFieldProps("email")}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="repeatEmail"
        label="Repetir correo electrónico"
        type="email"
        {...fieldProps}
        {...formik.getFieldProps("repeatEmail")}
        error={formik.touched.repeatEmail && Boolean(formik.errors.repeatEmail)}
        helperText={formik.touched.repeatEmail && formik.errors.repeatEmail}
      />
      <TextField
        id="phone"
        label="Teléfono"
        {...fieldProps}
        {...formik.getFieldProps("phone")}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <Button
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
        fullWidth
      >
        {formik.isSubmitting ? <CircularProgress size={30} /> : "Enviar"}
      </Button>
    </Stack>
  );
};

export default ContactForm;
