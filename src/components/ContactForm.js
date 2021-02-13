import React from "react"
import { Form, Formik, Field, FormikHelpers } from "formik"
import * as yup from "yup"
import styled from "styled-components"

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

const regExPhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const validationSchema = yup.object().shape({
  name: yup.string().required("pole wymagane"),
  email: yup.string().email("nieprawidłowy email").required("pole wymagane"),
  phone: yup.string().matches(regExPhoneNumber, "nieprawidłowy numer telefonu"),
  message: yup.string().required("pole wymagane"),
})

const ContactForm = props => {
  const handleSubmit = (values, formikHelpers) => {}

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ dirty, isValid, isSubmitting, resetForm }) => {
        return (
          <StyledForm>
            <Field
              component={TextInput}
              type="text"
              name="name"
              placeholder="Nazwa/Firma..."
            />
            <Field
              component={TextInput}
              type="text"
              name="email"
              placeholder="Email..."
            />
            <Field
              component={TextInput}
              type="text"
              name="phone"
              placeholder="Telefon..."
            />
            <Field
              component={Textarea}
              type="textarea"
              name="message"
              placeholder="Wiadomość..."
              rows={3}
            />
            <ButtonWrapper>
              <ResetButton>Reset</ResetButton>
              <SubmitButton>Wyślij</SubmitButton>
            </ButtonWrapper>
          </StyledForm>
        )
      }}
    </Formik>
  )
}

export default ContactForm

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const TextInput = styled.input`
  width: 50%;
  height: 2rem;
  margin-bottom: 1rem;
  border: none;
  color: #444;
  border-bottom: 1px solid #aaa;
  transition: all 0.7s ease-in-out;
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  text-justify: center;
  padding-left: 2rem;
  padding-right: 2rem;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: #fff;
    color: #eee;
  }

  &:focus,
  &:active {
    outline: none;
    border: none;
    border-bottom: 1px solid #f26a2e;
  }
`
const Textarea = styled.textarea`
  width: 50%;
  height: 2rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #aaa;
  transition: all 0.7s ease-in-out;
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  text-justify: center;
  padding-left: 2rem;
  padding-right: 2rem;
  resize: none;

  &:focus,
  &:active {
    outline: none;
    border: none;
    border-bottom: 1px solid #f26a2e;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  width: 50%;
  display: flex;
  justify-content: center;
`

const ResetButton = styled.button`
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #f26a2e;
  background-color: #f26a2e;
  border-radius: 50px;
  padding: 10px 32px;
  margin: 0 30px;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  &:hover {
    margin: 0 20px;
    width: 170px;
  }
  &:focus {
    outline: none;
  }
`

const SubmitButton = styled(ResetButton)`
  color: #444;
  border: 2px solid #eee;
  background-color: #eee;
`
