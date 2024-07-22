import Background from "../components/Background";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import './login.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { fireBaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const countryOptions = [
    { value: '+91', label: 'India (+91)' },
    { value: '+1', label: 'USA (+1)' },
    { value: '+44', label: 'UK (+44)' }
];

const phoneRegExp = {
    '+91': /^[6-9]\d{9}$/,
    '+1': /^[2-9]\d{2}[2-9]\d{2}\d{4}$/,
    '+44': /^\d{10}$/
};

export default function Signup(){
    const navigate = useNavigate(); 

    let [userExists, setUserExists] = useState(false);

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        countryCode: Yup.object().shape({
            value: Yup.string().required('Country code is required'),
            label: Yup.string().required('Country code is required')
        }),
        phoneNumber: Yup.string()
            .required('Phone number is required')
            .test('valid-phone', 'Invalid phone number', function (value) {
                const { path, parent } = this;
                const countryCode = parent.countryCode ? parent.countryCode.value : '+91';
                return phoneRegExp[countryCode].test(value);
            })
    });

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        countryCode: countryOptions[0],
        phoneNumber: ''
    };

    const handleSubmit = (values, formikHelpers) => {
        console.log(values);
        handleSignin(values, formikHelpers);
    };

    const handleSignin = async (values, { resetForm }) => {
        const {email, password} = values;
        try{
            await createUserWithEmailAndPassword(fireBaseAuth, email, password);
            navigate('/');
        }catch(e){
            console.log(e);
            setUserExists(true);
            resetForm();
        }
    }

    return (
        <div className="sign-up-page">
            <NavBar/>
            
            
            <div className="formContainer">
            <h1>Sign Up</h1>
            <h2>Hey, new pinch! Just kidding! Sign up to join our little world of madness. </h2>
            <p>If you're not new, <a href="/login">login here</a></p>
            {userExists && <p style={{color:'red'}}>User with this Email ID already exists.</p>}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, formikHelpers) => handleSubmit(values, formikHelpers)}
            >
                {({ dirty, setFieldValue }) => (
                    <Form className="form">
                        <div className="form-control">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="countryCode">Country Code</label>
                            <Select
                                name="countryCode"
                                options={countryOptions}
                                defaultValue={countryOptions[0]}
                                onChange={(option) => setFieldValue('countryCode', option)}
                            />
                            <ErrorMessage name="countryCode" component="div" className="error" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field name="phoneNumber" type="text" />
                            <ErrorMessage name="phoneNumber" component="div" className="error" />
                        </div>

                        <button type="submit" disabled={!(dirty)}>Sign Up</button>
                    </Form>
                )}
            </Formik>
            
        </div>
            


        <Footer/>
        </div>
    );
};

