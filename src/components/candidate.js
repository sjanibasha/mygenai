
// // import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import { TextField } from "@material-ui/core";
 


// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: "flex",
// //     flexWrap: "wrap",
// //   },
// //   textField: {
// //     marginLeft: theme.spacing(1),
// //     marginRight: theme.spacing(1),
// //     width: "25ch",
// //   },
// // }));

// // export default function LayoutTextFields() {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.root}>
// //       <div>
// //         <TextField
// //           id="standard-full-width"
// //           label="Name"
// //           style={{ margin: 8 }}
// //           placeholder="Please Enter Full Name"
// //           helperText="Required*"
// //           fullWidth
// //           margin="normal"
// //           InputLabelProps={{
// //             shrink: true,
// //           }}
// //         />
// //         <TextField
// //           label="First Name"
// //           id="margin-none"
// //           //defaultValue="Default Value"
// //           className={classes.textField}
// //           helperText="Required*"
// //         />
// //         <TextField
// //           label="Last Name"
// //           id="margin-dense"
// //           //defaultValue="Default Value"
// //           className={classes.textField}
// //           helperText="Required*"
// //           margin="dense"
// //         />
// //         <TextField
// //           label="Mobile Number"
// //           id="margin-normal"
// //           defaultValue=""
// //           className={classes.textField}
// //           helperText="Required"
// //           margin="normal"
// //         />
// //       </div>
// //       <div>
// //         <TextField
// //           id="filled-full-width"
// //           label="Mail"
// //           style={{ margin: 8 }}
// //           placeholder="Enter Mail address"
// //           //helperText="Full width!"
// //           fullWidth
// //           margin="normal"
// //           InputLabelProps={{
// //             shrink: true,
// //           }}
// //           variant="filled"
// //         />
// //         <TextField
// //           label="Password"
// //           id="filled-margin-none"
// //           // defaultValue="Default Value"
// //           className={classes.textField}
// //           helperText="Enter password"
// //           variant="filled"
// //         />
// //       </div>
// //       <div>
// //         <TextField
// //           id="outlined-full-width"
// //           label="Label"
// //           style={{ margin: 8 }}
// //           placeholder="Placeholder"
// //           helperText="Full width!"
// //           fullWidth
// //           margin="normal"
// //           InputLabelProps={{
// //             shrink: true,
// //           }}
// //           variant="outlined"
// //         />
// //         <TextField
// //           label="None"
// //           id="outlined-margin-none"
// //           defaultValue="Default Value"
// //           className={classes.textField}
// //           helperText="Some important text"
// //           variant="outlined"
// //         />
// //         <TextField
// //           label="Dense"
// //           id="outlined-margin-dense"
// //           defaultValue="Default Value"
// //           className={classes.textField}
// //           helperText="Some important text"
// //           margin="dense"
// //           variant="outlined"
// //         />
// //         <TextField
// //           label="Normal"
// //           id="outlined-margin-normal"
// //           defaultValue="Default Value"
// //           className={classes.textField}
// //           helperText="Some important text"
// //           margin="normal"
// //           variant="outlined"
// //         />
// //       </div>
// //     </div>
// //   );
// // }



//Updated with Previous button and Fetch//

import React, { useState } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
    const [step, setStep] = useState(1);
    const [formState, setFormState] = useState({
        reviewed: '',
        resume: null,
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        degree: '',
        skills: '',
        experience: '',
        current_ctc: '',
        expected_ctc: '',
        np: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormState({
            ...formState,
            [name]: files ? files[0] : value
        });
    };

    const validateStepOne = () => {
        const { reviewed, resume, fullName, email, phone } = formState;

        if (!reviewed) {
            alert('Please review the job description.');
            return false;
        }
        
        if (!resume) {
            alert('Please upload your resume.');
            return false;
        }
        
        if (fullName.trim() === '') {
            alert('Please enter your full name.');
            return false;
        }
        
        if (email.trim() === '') {
            alert('Please enter your email address.');
            return false;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        if (phone.trim() === '') {
            alert('Please enter your phone number.');
            return false;
        }
        
        if (!validatePhone(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return false;
        }
        
        return true;
    };

    const validateStepTwo = () => {
        const { gender, dob, degree } = formState;

        if (!gender) {
            alert('Please select your gender.');
            return false;
        }

        if (dob.trim() === '') {
            alert('Please enter your date of birth.');
            return false;
        }

        if (!degree) {
            alert('Please select your higher degree.');
            return false;
        }

        return true;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    };

    const handleNext = () => {
        if (step === 1 && validateStepOne()) {
            setStep(2);
        } else if (step === 2 && validateStepTwo()) {
            setStep(3);
        } else if (step === 3) {
            handleSubmit();
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        const formData = new FormData();
        
        for (const key in formState) {
            formData.append(key, formState[key]);
        }

        try {
            const response = await fetch('/submit', { // Replace '/submit' with your API endpoint
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                {step === 1 && (
                    <>
                        <div id="jd">
                            <h3>Job Title: Software Product Development Engineer</h3>
                            <p>Are you excited to work on a Software Product development project? Do you have the skills and passion to understand and write complex code?</p>
                            <p>We are looking for core engineering resources who can develop, debug, and deploy code for product development. The product caters to users and enterprise customers, specifically addressing Classification, Labelling, and Protection document needs.</p>
                            
                            <h4>Responsibilities:</h4>
                            <ul>
                                <li>Design, develop, and maintain high-quality software solutions using industry best practices</li>
                                <li>Write clean, efficient, and maintainable code</li>
                                <li>Participate in code reviews and provide constructive feedback to peers</li>
                                <li>Troubleshoot and debug issues to ensure smooth operation of the software</li>
                            </ul>
                            
                            <h4>Skills:</h4>
                            <ul>
                                <li>Bachelor's degree in Computer Science, Engineering, or a related field</li>
                                <li>Strong understanding of programming fundamentals and computer science concepts</li>
                                <li>Proficiency in at least one programming language such as Java, Python, C++, or JavaScript</li>
                                <li>Familiarity with software development tools and technologies (e.g., version control systems, IDEs, build tools)</li>
                                <li>Knowledge of data structures and algorithms</li>
                                <li>Good problem-solving skills and attention to detail</li>
                            </ul>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">1. Have you thoroughly reviewed the job description?</label>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="reviewed" 
                                    id="yes" 
                                    value="yes"
                                    checked={formState.reviewed === 'yes'}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="yes">Yes</label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name="reviewed" 
                                    id="no" 
                                    value="no"
                                    checked={formState.reviewed === 'no'}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="no">No</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="resume" className="form-label">2. Upload your resume (PDF, Word):</label>
                            <input 
                                type="file" 
                                className="form-control" 
                                id="resume" 
                                name="resume" 
                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="full-name" className="form-label">3. Full Name </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="full-name" 
                                name="fullName" 
                                value={formState.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">4. Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">5. Phone number</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                id="phone" 
                                name="phone" 
                                pattern="[0-9]{10}"  
                                value={formState.phone}
                                onChange={handleChange}
                                required
                            />
                        </div> 

                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={handleNext}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                    <span role="status">we are processing your details please wait...</span>
                                </>
                            ) : 'Next'}
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="mb-3">
                            <label className="form-label">6. Gender</label>
                            <select 
                                className="form-select" 
                                name="gender" 
                                value={formState.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select your answer</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">7. Date of Birth</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="dob" 
                                name="dob"
                                value={formState.dob}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">8. Higher Degree</label>
                            <select 
                                className="form-select" 
                                name="degree" 
                                value={formState.degree}
                                onChange={handleChange}
                            >
                                <option value="">Select your degree</option>
                                <option value="BE/BTECH">BE/BTECH</option>
                                <option value="ME/MTECH">ME/MTECH</option>
                                <option value="PHD">PHD</option>
                            </select>
                        </div>
    
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={handleNext}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                    <span role="status">we are processing your details please wait...</span>
                                </>
                            ) : 'Next'}
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className="mb-3">
                            <label htmlFor="skills" className="form-label">13. List all your skills, separated by commas</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="skills" 
                                name="skills"
                                value={formState.skills}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="experience" className="form-label">14. How many years of experience do you have?</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="experience" 
                                name="experience"
                                value={formState.experience}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="current_ctc" className="form-label">Current CTC</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="current_ctc" 
                                name="current_ctc"
                                value={formState.current_ctc}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="expected_ctc" className="form-label">Expected CTC</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="expected_ctc" 
                                name="expected_ctc"
                                value={formState.expected_ctc}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="np" className="form-label">Notice Period (in days)</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="np" 
                                name="np"
                                value={formState.np}
                                onChange={handleChange} 
                            />
                        </div>

                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={handleNext}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                    <span role="status">we are processing your details please wait...</span>
                                </>
                            ) : 'Submit'}
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default JobApplicationForm;
