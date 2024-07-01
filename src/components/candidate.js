
//Updated with Previous button and Fetch//

// import React, { useEffect, useState } from 'react';
// import './Candidate.css';

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
//         const { name, value } = e.target;
//         setFormState((prevState)=>({
//             ...prevState,
//             [name]: value
//         }));
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
//         const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
//         return re.test(email);
//     };

//     const validatePhone = (phone) => {
//         const re = /^[0-9]{10}$/;
//         return re.test(phone);
//     };

//     const handleNext = () => {
//         if (step === 1 && validateStepOne()) {
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

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         const formData = new FormData();
        
//         for (const key in formState) {
//             formData.append(key, formState[key]);
//         }

//         try {
//             const response = await fetch('/response.json', { // Replace '/submit' with your API endpoint
//                 method: 'POST',
//                 headers:{
//                     'Content-Type':
//                     'application/json'
//                 },
//                 body: JSON.stringify(formState)
//             });

//             // if (!response.ok) {
//             //     throw new Error('Network response was not ok');
//             // }

//             const result = await response.json();

//             console.log("result", result)
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
//                 <div className="progress-indicator">
//                     <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
//                     <div className={`line ${step >= 2 ? 'active' : ''}`}></div>
//                     <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
//                     <div className={`line ${step >= 3 ? 'active' : ''}`}></div>
//                     <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
//                 </div>
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

//                         <div className="form-group">
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

//                         <div className="form-group">
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

//                         <div className="form-group">
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
//                         <div className="form-group">
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
//                         <div className="form-group">
//                             <label htmlFor="phone" className="form-label">5. Phone number</label>
//                             <input 
//                                 type="tel" 
//                                 className="form-control" 
//                                 id="phone" 
//                                 name="phone" 
//                                 pattern="[0-9]{10}"  
//                                 value={formState.phone}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div> 

//                         <div className="button-container">
//                             <button 
//                                 type="button" 
//                                 className="btn btn-primary" 
//                                 onClick={handleNext}
//                                 disabled={loading}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
//                                         <span role="status">Processing...</span>
//                                     </>
//                                 ) : 'Next'}
//                             </button>
//                         </div>
//                     </>
//                 )}

//                 {step === 2 && (
//                     <>
//                         <div className="form-group">
//                             <label className="form-label">6. Gender</label>
//                             <select 
//                                 className="form-select" 
//                                 id="gender" 
//                                 name="gender" 
//                                 value={formState.gender}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select Gender</option>
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                                 <option value="other">Other</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
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
//                         <div className="form-group">
//                             <label htmlFor="degree" className="form-label">8. Highest degree </label>
//                             <select 
//                                 className="form-select" 
//                                 id="degree" 
//                                 name="degree" 
//                                 value={formState.degree}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select Degree</option>
//                                 <option value="bachelor">Bachelor's</option>
//                                 <option value="master">Master's</option>
//                                 <option value="phd">PhD</option>
//                             </select>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="skills" className="form-label">9. Key Skills </label>
//                             <textarea 
//                                 className="form-control" 
//                                 id="skills" 
//                                 name="skills" 
//                                 value={formState.skills}
//                                 onChange={handleChange}
//                                 rows="3"
//                                 required
//                             ></textarea>
//                         </div>

//                         <div className="button-container">
//                             <button 
//                                 type="button" 
//                                 className="btn btn-secondary" 
//                                 onClick={handlePrevious}
//                                 disabled={loading}
//                             >
//                                 Previous
//                             </button>
//                             <button 
//                                 type="button" 
//                                 className="btn btn-primary" 
//                                 onClick={handleNext}
//                                 disabled={loading}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
//                                         <span role="status">Processing...</span>
//                                     </>
//                                 ) : 'Next'}
//                             </button>
//                         </div>
//                     </>
//                 )}

//                 {step === 3 && (
//                     <>
//                         <div className="form-group">
//                             <label htmlFor="experience" className="form-label">10. Years of Experience</label>
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
//                         <div className="form-group">
//                             <label htmlFor="current_ctc" className="form-label">11. Current CTC</label>
//                             <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 id="current_ctc" 
//                                 name="current_ctc" 
//                                 value={formState.current_ctc}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="expected_ctc" className="form-label">12. Expected CTC</label>
//                             <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 id="expected_ctc" 
//                                 name="expected_ctc" 
//                                 value={formState.expected_ctc}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
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

//                         <div className="button-container">
//                             <button 
//                                 type="button" 
//                                 className="btn btn-secondary" 
//                                 onClick={handlePrevious}
//                                 disabled={loading}
//                             >
//                                 Previous
//                             </button>
//                             <button 
//                                 type="button" 
//                                 className="btn btn-primary" 
//                                 onClick={handleSubmit}
//                                 disabled={loading}
//                             >
//                                 {loading ? (
//                                     <>
//                                         <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
//                                         <span role="status">Processing...</span>
//                                     </>
//                                 ) : 'Submit'}
//                             </button>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Candidate;



//Updated with Azure blob storage //
//Added the uploadToAzure function to handle the file upload to Azure Blob Storage.
//Updated the handleSubmit function to upload the resume to Azure Blob Storage and then include the URL of the uploaded resume in the form data.
//Replace 'YOUR_SAS_URL' and 'YOUR_CONTAINER_NAME' with your actual Azure Blob Storage SAS URL and container name.



import React, { useState } from 'react';
import { BlobServiceClient } from '@azure/storage-blob';
import './Candidate.css';

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
    const [error, setError] = useState('');

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

    const handleNext = async () => {
        if (step === 1 && validateStepOne()) {
            try {
                await uploadToAzure();
                setStep(2);
            } catch (error) {
                setError('There was an error uploading the files. Please try again.');
            }
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

    
    const uploadToAzure = async (file) => {
        const sasUrl = "https://<your-storage-account-name>.blob.core.windows.net/?<your-sas-token>";
        const blobServiceClient = new BlobServiceClient(sasUrl);
        const containerClient = blobServiceClient.getContainerClient("resumes");

        const blobName = `${new Date().getTime()}-${file.name}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        try {
            await blockBlobClient.uploadData(file);
            return blockBlobClient.url;
        } catch (error) {
            console.error("There was an error uploading the file:", error.message);
            return null;
        }
    };

    const handleSubmit = async () => {
        setLoading(true);

        let resumeUrl = null;
        if (formState.resume) {
            resumeUrl = await uploadToAzure(formState.resume);
            if (!resumeUrl) {
                setError('There was an error uploading the resume. Please try again.');
                setLoading(false);
                return;
            }
        }

        const formData = {
            ...formState,
            resumeUrl
        };

        try {
            const response = await fetch('/submit', { // Replace '/submit' with your API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
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
            <div className="card-content">
                <h1>Please take a moment and fill the details</h1>
                <div className="stepper">
                    {/* <div className={`step ${step === 1 ? 'active' : ''}`}>Step 1</div>
                    <div className={`step ${step === 2 ? 'active' : ''}`}>Step 2</div>
                    <div className={`step ${step === 3 ? 'active' : ''}`}>Step 3</div> */}
                    <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
                    <div className={`line ${step >= 2 ? 'active' : ''}`}></div>
                    <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
                    <div className={`line ${step >= 3 ? 'active' : ''}`}></div>
                    <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
                </div>

                {error && <div className="alert error">{error}</div>}

                {step === 1 && (
                    <div>
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
                            <label>1. Have you thoroughly reviewed the job description?</label>
                            <div className="radio-group">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="reviewed" 
                                        value="yes"
                                        checked={formState.reviewed === 'yes'}
                                        onChange={handleChange}
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="reviewed" 
                                        value="no"
                                        checked={formState.reviewed === 'no'}
                                        onChange={handleChange}
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>2. Upload your resume (PDF, Word):</label>
                            <input 
                                type="file" 
                                name="resume" 
                                accept=".pdf,.doc,.docx"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>3. Full Name</label>
                            <input 
                                type="text" 
                                name="fullName" 
                                value={formState.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>4. Email address</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>5. Phone number</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                pattern="[0-9]{10}"  
                                value={formState.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button 
                            type="button" 
                            className="btn primary" 
                            onClick={handleNext}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    <span>Processing...</span>
                                </>
                            ) : 'Next'}
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <div className="form-group">
                            <label>6. Gender</label>
                            <select 
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

                        <div className="form-group">
                            <label>7. Date of Birth</label>
                            <input 
                                type="date" 
                                name="dob"
                                value={formState.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>8. Higher Degree</label>
                            <select 
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
                            className="btn primary" 
                            onClick={handleNext}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    <span>Processing...</span>
                                </>
                            ) : 'Next'}
                        </button>
                        <button 
                            type="button" 
                            className="btn secondary" 
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <div className="form-group">
                            <label>13. List all your skills, separated by commas</label>
                            <input 
                                type="text" 
                                name="skills"
                                value={formState.skills}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>14. How many years of experience do you have?</label>
                            <input 
                                type="number" 
                                name="experience"
                                value={formState.experience}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Current CTC</label>
                            <input 
                                type="number" 
                                name="current_ctc"
                                value={formState.current_ctc}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Expected CTC</label>
                            <input 
                                type="number" 
                                name="expected_ctc"
                                value={formState.expected_ctc}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Notice Period (in days)</label>
                            <input 
                                type="number" 
                                name="np"
                                value={formState.np}
                                onChange={handleChange} 
                            />
                        </div>

                        <button 
                            type="button" 
                            className="btn primary" 
                            onClick={handleNext}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    <span>Processing...</span>
                                </>
                            ) : 'Submit'}
                        </button>
                        <button 
                            type="button" 
                            className="btn secondary" 
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default JobApplicationForm;


//Replace 'YOUR_SAS_URL' and 'YOUR_CONTAINER_NAME' with your actual Azure Blob Storage SAS URL and container name.//
//Make sure your server-side endpoint (/submit in this case) is set up to handle the form submission.//

