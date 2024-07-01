// import React, { useState } from 'react';
// import { BlobServiceClient } from '@azure/storage-blob';
// import './JobApplicationForm.css';

// // Your JobApplicationForm component code follows...
// const JobApplicationForm = () => {
//     const [step, setStep] = useState(0);
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
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormState({
//             ...formState,
//             [name]: files ? files[0] : value
//         });
//     };

//     const validateStepOne = () => {
//         const { reviewed, resume, fullName, email, phone } = formState;

//         if (!reviewed || !resume || fullName.trim() === '' || email.trim() === '' || phone.trim() === '') {
//             setError('Please fill in all required fields.');
//             return false;
//         }

//         if (!validateEmail(email)) {
//             setError('Please enter a valid email address.');
//             return false;
//         }

//         if (!validatePhone(phone)) {
//             setError('Please enter a valid 10-digit phone number.');
//             return false;
//         }

//         setError('');
//         return true;
//     };

//     const validateStepTwo = () => {
//         const { gender, dob, degree } = formState;

//         if (!gender || dob.trim() === '' || !degree) {
//             setError('Please fill in all required fields.');
//             return false;
//         }

//         setError('');
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

//     const handleNext = () => {
//         if (step === 0 && validateStepOne()) {
//             setStep(1);
//         } else if (step === 1 && validateStepTwo()) {
//             setStep(2);
//         } else if (step === 2) {
//             handleSubmit();
//         }
//     };

//     const handlePrevious = () => {
//         if (step > 0) {
//             setStep(step - 1);
//         }
//     };

//     const uploadToAzure = async (file) => {
//         const sasUrl = "https://<your-storage-account-name>.blob.core.windows.net/?<your-sas-token>";
//         const blobServiceClient = new BlobServiceClient(sasUrl);
//         const containerClient = blobServiceClient.getContainerClient("resumes");

//         const blobName = `${new Date().getTime()}-${file.name}`;
//         const blockBlobClient = containerClient.getBlockBlobClient(blobName);

//         try {
//             await blockBlobClient.uploadData(file);
//             return blockBlobClient.url;
//         } catch (error) {
//             console.error("There was an error uploading the file:", error.message);
//             return null;
//         }
//     };

//     const handleSubmit = async () => {
//         setLoading(true);

//         let resumeUrl = null;
//         if (formState.resume) {
//             resumeUrl = await uploadToAzure(formState.resume);
//             if (!resumeUrl) {
//                 setError('There was an error uploading the resume. Please try again.');
//                 setLoading(false);
//                 return;
//             }
//         }

//         const formData = {
//             ...formState,
//             resumeUrl
//         };

//         try {
//             const response = await fetch('/submit', { // Replace '/submit' with your API endpoint
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
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

//     const steps = ['Review Job Description', 'Personal Information', 'Professional Details'];

//     return (
//         <div className="card">
//             <div className="card-content">
//                 <h1>Job Application Form</h1>

//                 <div className="stepper">
//                     {steps.map((label, index) => (
//                         <div key={index} className={`step ${index <= step ? 'active' : ''}`}>
//                             {label}
//                         </div>
//                     ))}
//                 </div>

//                 {error && <div className="alert error">{error}</div>}

//                 {step === 0 && (
//                     <div>
//                         <h2>Job Title: Software Product Development Engineer</h2>
//                         <p>Are you excited to work on a Software Product development project? Do you have the skills and passion to understand and write complex code?</p>
//                         <p>We are looking for core engineering resources who can develop, debug, and deploy code for product development. The product caters to users and enterprise customers, specifically addressing Classification, Labelling, and Protection document needs.</p>
                        
//                         <h3>Responsibilities:</h3>
//                         <ul>
//                             <li>Design, develop, and maintain high-quality software solutions using industry best practices</li>
//                             <li>Write clean, efficient, and maintainable code</li>
//                             <li>Participate in code reviews and provide constructive feedback to peers</li>
//                             <li>Troubleshoot and debug issues to ensure smooth operation of the software</li>
//                         </ul>
                        
//                         <h3>Skills:</h3>
//                         <ul>
//                             <li>Bachelor's degree in Computer Science, Engineering, or a related field</li>
//                             <li>Strong understanding of programming fundamentals and computer science concepts</li>
//                             <li>Proficiency in at least one programming language such as Java, Python, C++, or JavaScript</li>
//                             <li>Familiarity with software development tools and technologies (e.g., version control systems, IDEs, build tools)</li>
//                             <li>Knowledge of data structures and algorithms</li>
//                             <li>Good problem-solving skills and attention to detail</li>
//                         </ul>

//                         <div className="form-group">
//                             <label>1. Have you thoroughly reviewed the job description?</label>
//                             <div className="radio-group">
//                                 <label><input type="radio" name="reviewed" value="yes" onChange={handleChange} /> Yes</label>
//                                 <label><input type="radio" name="reviewed" value="no" onChange={handleChange} /> No</label>
//                             </div>
//                         </div>

//                         <div className="form-group">
//                             <label>2. Upload your resume (PDF, Word)</label>
//                             <input 
//                                 type="file" 
//                                 name="resume" 
//                                 onChange={handleChange}
//                                 accept=".pdf,.doc,.docx"
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>3. Full Name</label>
//                             <input 
//                                 type="text" 
//                                 name="fullName"
//                                 value={formState.fullName}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>4. Email Address</label>
//                             <input 
//                                 type="email" 
//                                 name="email"
//                                 value={formState.email}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>5. Phone Number</label>
//                             <input 
//                                 type="text" 
//                                 name="phone"
//                                 value={formState.phone}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-actions">
//                             <button 
//                                 className="btn primary" 
//                                 onClick={handleNext}
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Loading...' : 'Next'}
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {step === 1 && (
//                     <div>
//                         <div className="form-group">
//                             <label>6. Gender</label>
//                             <select 
//                                 name="gender" 
//                                 value={formState.gender}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">Select your answer</option>
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                                 <option value="other">Other</option>
//                             </select>
//                         </div>

//                         <div className="form-group">
//                             <label>7. Date of Birth</label>
//                             <input 
//                                 type="date" 
//                                 name="dob"
//                                 value={formState.dob}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>8. Higher Degree</label>
//                             <select 
//                                 name="degree" 
//                                 value={formState.degree}
//                                 onChange={handleChange}
//                             >
//                                 <option value="">Select your degree</option>
//                                 <option value="BE/BTECH">BE/BTECH</option>
//                                 <option value="ME/MTECH">ME/MTECH</option>
//                                 <option value="PHD">PHD</option>
//                             </select>
//                         </div>

//                         <div className="form-actions">
//                             <button 
//                                 className="btn primary" 
//                                 onClick={handleNext}
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Loading...' : 'Next'}
//                             </button>
//                             <button 
//                                 className="btn secondary" 
//                                 onClick={handlePrevious}
//                             >
//                                 Previous
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {step === 2 && (
//                     <div>
//                         <div className="form-group">
//                             <label>9. List all your skills, separated by commas</label>
//                             <input 
//                                 type="text" 
//                                 name="skills"
//                                 value={formState.skills}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>10. How many years of experience do you have?</label>
//                             <input 
//                                 type="number" 
//                                 name="experience"
//                                 value={formState.experience}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>11. Current CTC</label>
//                             <input 
//                                 type="number" 
//                                 name="current_ctc"
//                                 value={formState.current_ctc}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>12. Expected CTC</label>
//                             <input 
//                                 type="number" 
//                                 name="expected_ctc"
//                                 value={formState.expected_ctc}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label>13. Notice Period (in days)</label>
//                             <input 
//                                 type="number" 
//                                 name="np"
//                                 value={formState.np}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className="form-actions">
//                             <button 
//                                 className="btn primary" 
//                                 onClick={handleSubmit}
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Loading...' : 'Submit'}
//                             </button>
//                             <button 
//                                 className="btn secondary" 
//                                 onClick={handlePrevious}
//                             >
//                                 Previous
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default JobApplicationForm;



// // const handleSubmit = async () => {
//     //     setLoading(true);
//     //     const formData = new FormData();
        
//     //     for (const key in formState) {
//     //         formData.append(key, formState[key]);
//     //     }

//     //     try {
//     //         const response = await fetch('/submit', { // Replace '/submit' with your API endpoint
//     //             method: 'POST',
//     //             body: formData
//     //         });

//     //         if (!response.ok) {
//     //             throw new Error('Network response was not ok');
//     //         }

//     //         const result = await response.json();
//     //         alert('Form submitted successfully!');
//     //     } catch (error) {
//     //         console.error('There was a problem with your fetch operation:', error);
//     //         alert('There was an error submitting the form. Please try again.');
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     // const uploadToAzure = async () => {
//     //     const blobServiceClient = new BlobServiceClient('https://<your-storage-account-name>.blob.core.windows.net', new Azure.Storage.SharedKeyCredential('<accountName>', '<accountKey>'));
//     //     const containerClient = blobServiceClient.getContainerClient('<your-container-name>');

//     //     const resumeBlobClient = containerClient.getBlockBlobClient(formState.resume.name);
//     //     await resumeBlobClient.uploadBrowserData(formState.resume);

//     //     const jdBlobClient = containerClient.getBlockBlobClient('job-description.txt');
//     //     const jobDescriptionContent = document.getElementById('jd').innerText;
//     //     await jdBlobClient.uploadData(jobDescriptionContent);
//     // };