import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const formikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="p-6 space-y-4">
        <div>
          <Field
            name="username"
            placeholder="Username"
            className="border p-2 w-full"
          />
          <ErrorMessage name="username" component="div" className="text-red-500" />
        </div>

        <div>
          <Field
            name="email"
            placeholder="Email"
            className="border p-2 w-full"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="border p-2 w-full"
          />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>

        <button type="submit" className="bg-green-500 text-white p-2">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default formikForm;
