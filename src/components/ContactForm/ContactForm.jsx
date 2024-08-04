import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = { name: "", number: "" };
  const nameId = useId();
  const numberId = useId();
  const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Must be 50 characters or less")
      .required("This field is mandatory"),
    number: Yup.string()
      .matches(phoneRegExp, "Phone number must be in the format: 000-00-00")
      .required("This field is mandatory"),
  });

  const handleFormSubmit = (values, actions) => {
    values.id = nanoid(5);
    addContact(values.name, values.number);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, handleSubmit }) => (
          <Form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label} htmlFor={nameId}>
              Name
            </label>
            <Field className={css.field} id={nameId} name="name" />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="div"
            />
            <label className={css.label} htmlFor={numberId}>
              Number
            </label>
            <Field className={css.field} id={numberId} name="number" />
            <ErrorMessage
              className={css.errorText}
              name="number"
              component="div"
            />
            <button
              disabled={Object.keys(errors).length > 0}
              className={css.submitBtn}
              type="submit"
            >
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;

//

// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';

// // Валідаційна схема для форми

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .min(3, 'Мінімум 3 символи')
//     .max(50, 'Максимум 50 символів')
//     .required('Обов\'язкове поле'),

//   number: Yup.string()
//   .matches(/^\d{3}-\d{2}-\d{2}-\d{2}$/, 'Номер телефону має бути у форматі 333-33-33-33')
//     .min(3, 'Мінімум 3 символи')
//     .max(50, 'Максимум 50 символів')
//     .required('Обов\'язкове поле'),
// });

// function ContactForm({ onAddContact }) {
//   const handleSubmit = (values, { resetForm }) => {
//     const newContact = {
//       id: nanoid(),
//       name: values.name,
//       number: values.number,
//     };
//     onAddContact(newContact);
//     resetForm();
//   };

//   return (

//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <div>
//           <label htmlFor="name">Name</label>
//           <Field
//             type="text"
//             id="name"
//             name="name"
//           />
//           <ErrorMessage name="name" component="div" />
//         </div>
//         <div>
//           <label htmlFor="number">Number</label>
//           <Field
//             type="text"
//             id="number"
//             name="number"
//           />
//           <ErrorMessage name="number" component="div" />
//         </div>
//         <button type="submit">Add Contact</button>
//       </Form>
//     </Formik>
//   );
// }

// export default ContactForm;
