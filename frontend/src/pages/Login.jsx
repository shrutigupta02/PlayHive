import Background from "../components/Background";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';

export default function Login(){
    const initialValues = {
        username: '',
        password: '',
      };
    
      const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string()
          .required('Password is required')
          .min(68, 'Password must be at least 8 characters'),
      });
    
      const onSubmit = (values) => {
        console.log('Form data', values);
      };

    return(
        <div className="login-page">
            <NavBar/>
            

            <div className="formContainer login-container">
                <h1>Welcome back!</h1>
                <h2>Oh we missed you so. Login to see your high scores, create your cool profiles and play with your friends!</h2>
                
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            {({ isValid, dirty }) => (
                <Form className="form">
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <Field type="text" id="username" name="username" />
                    <ErrorMessage name="username" component="div" className="error" />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className="error" />
                </div>

                <button type="submit" disabled={!(isValid && dirty)}>
                    Submit
                </button>
                </Form>
            )}
            
            </Formik>
            <p>If you're new here, <a href="/signup">Sign Up here.</a></p>
            </div>

            <Footer/>
        </div>
    )
}