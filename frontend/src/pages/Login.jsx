import Background from "../components/Background";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { fireBaseAuth } from "../../utils/firebase-config";
import { useState } from "react";

export default function Login(){
    const navigate = useNavigate();
    let [wrongPass, setWrongPass] = useState(false);
    const initialValues = {
        email: '',
        password: '',
      };
    
      const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters'),
      });
    
      const onSubmit = (values) => {
        console.log('Form data', values);
        handleLogin(values);
      };

      const handleLogin = async(values) => {
        const {email, password} = values;
        try{
            await signInWithEmailAndPassword(fireBaseAuth, email, password);
            navigate('/');
        }catch(e){
            console.log(e);
            setWrongPass(true);
        }
        
      }

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
                    <label htmlFor="email">Email ID</label>
                    <Field type="text" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className="error" />
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
            {wrongPass && <p style={{color:'red'}}>Invalid login details</p>}
            <p >If you're new here, <a href="/signup">Sign Up here.</a></p>
            </div>

            <Footer/>
        </div>
    )
}