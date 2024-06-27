
//Updated with Previous button and Fetch//

import React, { useEffect, useState } from 'react';
import './Candidate.css';

const Candidate = () => {
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
        const { name, value } = e.target;
        setFormState((prevState)=>({
            ...prevState,
            [name]: value
        }));
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
        const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        
        for (const key in formState) {
            formData.append(key, formState[key]);
        }

        try {
            const response = await fetch('/response.json', { // Replace '/submit' with your API endpoint
                method: 'POST',
                headers:{
                    'Content-Type':
                    'application/json'
                },
                body: JSON.stringify(formState)
            });

            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }

            const result = await response.json();

            console.log("result", result)
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
                <div className="progress-indicator">
                    <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
                    <div className={`line ${step >= 2 ? 'active' : ''}`}></div>
                    <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
                    <div className={`line ${step >= 3 ? 'active' : ''}`}></div>
                    <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
                </div>
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

                        <div className="form-group">
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

                        <div className="form-group">
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

                        <div className="form-group">
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
                        <div className="form-group">
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
                        <div className="form-group">
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

                        <div className="button-container">
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={handleNext}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                        <span role="status">Processing...</span>
                                    </>
                                ) : 'Next'}
                            </button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="form-group">
                            <label className="form-label">6. Gender</label>
                            <select 
                                className="form-select" 
                                id="gender" 
                                name="gender" 
                                value={formState.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob" className="form-label">7. Date of Birth</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="dob" 
                                name="dob" 
                                value={formState.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="degree" className="form-label">8. Highest degree attained</label>
                            <select 
                                className="form-select" 
                                id="degree" 
                                name="degree" 
                                value={formState.degree}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Degree</option>
                                <option value="bachelor">Bachelor's</option>
                                <option value="master">Master's</option>
                                <option value="phd">PhD</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="skills" className="form-label">9. Key Skills </label>
                            <textarea 
                                className="form-control" 
                                id="skills" 
                                name="skills" 
                                value={formState.skills}
                                onChange={handleChange}
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        <div className="button-container">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                onClick={handlePrevious}
                                disabled={loading}
                            >
                                Previous
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={handleNext}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                        <span role="status">Processing...</span>
                                    </>
                                ) : 'Next'}
                            </button>
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className="form-group">
                            <label htmlFor="experience" className="form-label">10. Years of Experience</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="experience" 
                                name="experience" 
                                value={formState.experience}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="current_ctc" className="form-label">11. Current CTC</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="current_ctc" 
                                name="current_ctc" 
                                value={formState.current_ctc}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expected_ctc" className="form-label">12. Expected CTC</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="expected_ctc" 
                                name="expected_ctc" 
                                value={formState.expected_ctc}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="np" className="form-label">13. Notice Period</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="np" 
                                name="np" 
                                value={formState.np}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="button-container">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                onClick={handlePrevious}
                                disabled={loading}
                            >
                                Previous
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                        <span role="status">Processing...</span>
                                    </>
                                ) : 'Submit'}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Candidate;



//Updated with Azure blob storage //




// import React, { useState } from 'react';
// import { BlobServiceClient } from '@azure/storage-blob';
// import './Candidate.css';

// const blobSasUrl = 'YOUR_SAS_URL'; // Replace with your SAS URL
// const containerName = 'YOUR_CONTAINER_NAME'; // Replace with your container name

// const uploadFileToBlob = async (file) => {
//     if (!file) return null;

//     const blobServiceClient = new BlobServiceClient(blobSasUrl);
//     const containerClient = blobServiceClient.getContainerClient(containerName);
//     const blobClient = containerClient.getBlockBlobClient(file.name);

//     try {
//         await blobClient.uploadBrowserData(file);
//         return blobClient.url;
//     } catch (error) {
//         console.error('Error uploading file:', error);
//         return null;
//     }
// };

// const Candidate = () => {
//     const [step, setStep] = useState(1);
//     const [formState, setFormState] = useState({
//         reviewed: '',
//         resume: null,
//         fullName: '',
//         email: '',
//         phone: '',
//         gender: '',
//         dob: '',
//         degree: '',
//         skills: '',
//         experience: '',
//         current_ctc: '',
//         expected_ctc: '',
//         np: ''
//     });

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormState({
//             ...formState,
//             [name]: files ? files[0] : value
//         });
//     };

//     const validateStepOne = () => {
//         const { reviewed, resume, fullName, email, phone } = formState;

//         if (!reviewed) {
//             alert('Please review the job description.');
//             return false;
//         }
        
//         if (!resume) {
//             alert('Please upload your resume.');
//             return false;
//         }
        
//         if (fullName.trim() === '') {
//             alert('Please enter your full name.');
//             return false;
//         }
        
//         if (email.trim() === '') {
//             alert('Please enter your email address.');
//             return false;
//         }
        
//         if (!validateEmail(email)) {
//             alert('Please enter a valid email address.');
//             return false;
//         }
        
//         if (phone.trim() === '') {
//             alert('Please enter your phone number.');
//             return false;
//         }
        
//         if (!validatePhone(phone)) {
//             alert('Please enter a valid 10-digit phone number.');
//             return false;
//         }
        
//         return true;
//     };

//     const validateStepTwo = () => {
//         const { gender, dob, degree } = formState;

//         if (!gender) {
//             alert('Please select your gender.');
//             return false;
//         }

//         if (dob.trim() === '') {
//             alert('Please enter your date of birth.');
//             return false;
//         }

//         if (!degree) {
//             alert('Please select your higher degree.');
//             return false;
//         }

//         return true;
//     };

//     const validateEmail = (email) => {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     };

//     const validatePhone = (phone) => {
//         const re = /^[0-9]{10}$/;
//         return re.test(phone);
//     };

//     const handleNext = async () => {
//         if (step === 1 && validateStepOne()) {
//             setLoading(true);
            
//             const resumeUrl = await uploadFileToBlob(formState.resume);
//             if (!resumeUrl) {
//                 setLoading(false);
//                 alert('There was an error uploading your resume. Please try again.');
//                 return;
//             }

//             const jobDescription = document.getElementById('jd').innerText;
//             const jobDescriptionBlob = new Blob([jobDescription], { type: 'text/plain' });
//             const jobDescriptionFile = new File([jobDescriptionBlob], 'job_description.txt', { type: 'text/plain' });

//             const jobDescriptionUrl = await uploadFileToBlob(jobDescriptionFile);
//             if (!jobDescriptionUrl) {
//                 setLoading(false);
//                 alert('There was an error uploading the job description. Please try again.');
//                 return;
//             }

//             // Save the URLs to the formState or proceed to the next step
//             setFormState({
//                 ...formState,
//                 resumeUrl,
//                 jobDescriptionUrl
//             });

//             setLoading(false);
//             setStep(2);
//         } else if (step === 2 && validateStepTwo()) {
//             setStep(3);
//         } else if (step === 3) {
//             handleSubmit();
//         }
//     };

//     const handlePrevious = () => {
//         if (step > 1) {
//             setStep(step - 1);
//         }
//     };

//     const handleSubmit = async () => {
//         setLoading(true);
//         const formData = new FormData();
        
//         for (const key in formState) {
//             formData.append(key, formState[key]);
//         }

//         try {
//             const response = await fetch('/submit', { // Replace '/submit' with your API endpoint
//                 method: 'POST',
//                 body: formData
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const result = await response.json();
//             alert('Form submitted successfully!');
//         } catch (error) {
//             console.error('There was a problem with your fetch operation:', error);
//             alert('There was an error submitting the form. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="card">
//             <div className="card-body">
//                 {step === 1 && (
//                     <>
//                         <div id="jd">
//                             <h3>Job Title: Software Product Development Engineer</h3>
//                             <p>Are you excited to work on a Software Product development project? Do you have the skills and passion to understand and write complex code?</p>
//                             <p>We are looking for core engineering resources who can develop, debug, and deploy code for product development. The product caters to users and enterprise customers, specifically addressing Classification, Labelling, and Protection document needs.</p>
                            
//                             <h4>Responsibilities:</h4>
//                             <ul>
//                                 <li>Design, develop, and maintain high-quality software solutions using industry best practices</li>
//                                 <li>Write clean, efficient, and maintainable code</li>
//                                 <li>Participate in code reviews and provide constructive feedback to peers</li>
//                                 <li>Troubleshoot and debug issues to ensure smooth operation of the software</li>
//                             </ul>
                            
//                             <h4>Skills:</h4>
//                             <ul>
//                                 <li>Bachelor's degree in Computer Science, Engineering, or a related field</li>
//                                 <li>Strong understanding of programming fundamentals and computer science concepts</li>
//                                 <li>Proficiency in at least one programming language such as Java, Python, C++, or JavaScript</li>
//                                 <li>Familiarity with software development tools and technologies (e.g., version control systems, IDEs, build tools)</li>
//                                 <li>Knowledge of data structures and algorithms</li>
//                                 <li>Good problem-solving skills and attention to detail</li>
//                             </ul>
//                         </div>

//                         <div className="mb-3">
//                             <label className="form-label">1. Have you thoroughly reviewed the job description?</label>
//                             <div className="form-check">
//                                 <input 
//                                     className="form-check-input" 
//                                     type="radio" 
//                                     name="reviewed" 
//                                     id="yes" 
//                                     value="yes"
//                                     checked={formState.reviewed === 'yes'}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="form-check-label" htmlFor="yes">Yes</label>
//                             </div>
//                             <div className="form-check">
//                                 <input 
//                                     className="form-check-input" 
//                                     type="radio" 
//                                     name="reviewed" 
//                                     id="no" 
//                                     value="no"
//                                     checked={formState.reviewed === 'no'}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="form-check-label" htmlFor="no">No</label>
//                             </div>
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="resume" className="form-label">2. Upload your resume (PDF, Word):</label>
//                             <input 
//                                 type="file" 
//                                 className="form-control" 
//                                 id="resume" 
//                                 name="resume" 
//                                 accept=".pdf,.doc,.docx"
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="full-name" className="form-label">3. Full Name </label>
//                             <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 id="full-name" 
//                                 name="fullName" 
//                                 value={formState.fullName}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="email" className="form-label">4. Email address</label>
//                             <input 
//                                 type="email" 
//                                 className="form-control" 
//                                 id="email" 
//                                 name="email" 
//                                 value={formState.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="phone" className="form-label">5. Phone number</label>
//                             <input 
//                                 type="tel" 
//                                 className="form-control" 
//                                 id="phone" 
//                                 name="phone" 
//                                 value={formState.phone}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </>
//                 )}

//                 {step === 2 && (
//                     <>
//                         <div className="mb-3">
//                             <label className="form-label">6. Gender</label>
//                             <div className="form-check">
//                                 <input 
//                                     className="form-check-input" 
//                                     type="radio" 
//                                     name="gender" 
//                                     id="male" 
//                                     value="male"
//                                     checked={formState.gender === 'male'}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="form-check-label" htmlFor="male">Male</label>
//                             </div>
//                             <div className="form-check">
//                                 <input 
//                                     className="form-check-input" 
//                                     type="radio" 
//                                     name="gender" 
//                                     id="female" 
//                                     value="female"
//                                     checked={formState.gender === 'female'}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="form-check-label" htmlFor="female">Female</label>
//                             </div>
//                             <div className="form-check">
//                                 <input 
//                                     className="form-check-input" 
//                                     type="radio" 
//                                     name="gender" 
//                                     id="other" 
//                                     value="other"
//                                     checked={formState.gender === 'other'}
//                                     onChange={handleChange}
//                                 />
//                                 <label className="form-check-label" htmlFor="other">Other</label>
//                             </div>
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="dob" className="form-label">7. Date of Birth</label>
//                             <input 
//                                 type="date" 
//                                 className="form-control" 
//                                 id="dob" 
//                                 name="dob" 
//                                 value={formState.dob}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>

//                         <div className="mb-3">
//                             <label htmlFor="degree" className="form-label">8. Higher Degree</label>
//                             <select 
//                                 className="form-control" 
//                                 id="degree" 
//                                 name="degree" 
//                                 value={formState.degree}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select</option>
//                                 <option value="bachelors">Bachelor's</option>
//                                 <option value="masters">Master's</option>
//                                 <option value="phd">PhD</option>
//                             </select>
//                         </div>
//                     </>
//                 )}

//                 {step === 3 && (
//                     <>
//                         <div className="mb-3">
//                             <label htmlFor="skills" className="form-label">9. Skills</label>
//                             <textarea 
//                                 className="form-control" 
//                                 id="skills" 
//                                 name="skills" 
//                                 value={formState.skills}
//                                 onChange={handleChange}
//                                 required
//                             ></textarea>
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="experience" className="form-label">10. Experience</label>
//                             <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 id="experience" 
//                                 name="experience" 
//                                 value={formState.experience}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="current-ctc" className="form-label">11. Current CTC</label>
//                             <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 id="current-ctc" 
//                                 name="current_ctc" 
//                                 value={formState.current_ctc}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="expected-ctc" className="form-label">12. Expected CTC</label>
//                             <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 id="expected-ctc" 
//                                 name="expected_ctc" 
//                                 value={formState.expected_ctc}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="np" className="form-label">13. Notice Period</label>
//                             <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 id="np" 
//                                 name="np" 
//                                 value={formState.np}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                     </>
//                 )}

//                 <div className="d-flex justify-content-between">
//                     <button className="btn btn-secondary" onClick={handlePrevious} disabled={step === 1}>
//                         Previous
//                     </button>
//                     <button className="btn btn-primary" onClick={handleNext} disabled={loading}>
//                         {loading ? 'Loading...' : step === 3 ? 'Submit' : 'Next'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Candidate;

//Replace 'YOUR_SAS_URL' and 'YOUR_CONTAINER_NAME' with your actual Azure Blob Storage SAS URL and container name.//
//Make sure your server-side endpoint (/submit in this case) is set up to handle the form submission.//

