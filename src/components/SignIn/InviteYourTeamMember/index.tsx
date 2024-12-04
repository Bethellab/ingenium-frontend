import { image } from '@/assets/image/image';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFile, AiOutlineLoading3Quarters, AiOutlineCloseCircle, AiOutlineDelete } from 'react-icons/ai';

type TeamMember = {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
};

const InviteYourTeamMember: React.FC = () => {
    const [manualEntry, setManualEntry] = useState(false);
    const [manualTeamMembers, setManualTeamMembers] = useState<TeamMember[]>([
        { firstName: '', lastName: '', email: '', role: '' },
    ]);
    const [dragging, setDragging] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    // Handle file selection
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file && file.size <= 5 * 1024 * 1024) { // Limit file size to 5 MB
            setUploadedFile(file);
            startFileUpload();
        } else {
            alert("File size exceeds 5 MB limit.");
        }
    };

    // Simulate file upload with progress
    const startFileUpload = () => {
        setUploading(true);
        setUploadProgress(0);
        const uploadInterval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(uploadInterval);
                    setUploading(false);
                    return 100;
                }
                return prev + 10; // Increase progress by 10% each second
            });
        }, 300); // Adjust the interval speed here
    };

    // Handle file drag-and-drop
    const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer.files;
        if (files.length && files[0].size <= 5 * 1024 * 1024) {
            setUploadedFile(files[0]);
            startFileUpload();
        } else {
            alert("File size exceeds 5 MB limit.");
        }
    };

    // Cancel upload and reset
    const cancelUpload = () => {
        setUploading(false);
        setUploadProgress(0);
        setUploadedFile(null);
    };

    // Add a new empty member to the manual form
    const addManualMember = () => {
        setManualTeamMembers([
            ...manualTeamMembers,
            { firstName: '', lastName: '', email: '', role: '' },
        ]);
    };

    // Update the values of the manually added team members
    const updateManualMember = (index: number, field: keyof TeamMember, value: string) => {
        const updatedMembers = [...manualTeamMembers];
        updatedMembers[index][field] = value;
        setManualTeamMembers(updatedMembers);
    };

    return (
        <div>
            <div className="flex items-center justify-center border-b">
                <img src={image.signinlogo} className="w-36 m-4" onClick={() => navigate('/')} />
            </div>
            <div className="flex items-center justify-center ">
                <div className="flex justify-center w-full lg:w-[600px] p-6 flex-col gap-2 lg:mt-24 bg-white rounded-lg border border-[#e9ecef]">
                    <div className="flex items-center lg:w-[540px] flex-col gap-2">
                        <span className="text-2xl font-semibold text-center">Invite your team members</span>
                        <span className="text-md font-normal text-[#6c6a6a] text-center">
                            You can enter the email addresses or bulk upload your team members to join in.
                        </span>
                        <div className="mb-6">
                            <a href="/path-to-csv-template.csv" download className="text-blue-500 underline">
                                Download CSV Template
                            </a>
                        </div>
                    </div>

                    {!manualEntry ? (
                        <>
                            {!uploadedFile ? (
                                <>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={image.bulkupload}
                                            className="w-44 cursor-pointer"
                                            onClick={() => fileInputRef.current?.click()}
                                        />
                                    </div>
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        onDragOver={(e) => e.preventDefault()}
                                        onDragEnter={() => setDragging(true)}
                                        onDragLeave={() => setDragging(false)}
                                        onDrop={handleFileDrop}
                                        className={`rounded-lg p-6 mb-4 text-center cursor-pointer text-primary ${dragging ? 'border-blue-500' : 'border-gray-300 border-dashed'}`}
                                    >
                                        {dragging ? 'Drop the file here' : 'Click or drag a file here to upload'}
                                        <p className="text-gray-600">or drag and drop your CSV File (5 MB Max)</p>
                                    </div>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-4">
                                        Bulk Upload
                                    </button>
                                    <button
                                        className="border px-4 py-2 rounded-xl"
                                        onClick={() => setManualEntry(true)}
                                    >
                                        Fill Out Profile Manually
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="p-4 border rounded-lg space-y-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2">
                                                <AiOutlineFile className="w-8 h-8 text-gray-500" />
                                                <span className="text-lg font-semibold">{uploadedFile.name}</span>
                                            </div>

                                            <button onClick={cancelUpload} className="">
                                                {uploading ? (
                                                    <AiOutlineCloseCircle className="w-7 h-7 bg-gray-300 rounded-full" />
                                                ) : (
                                                    <AiOutlineDelete className="w-7 h-7" />
                                                )}
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <span className="">
                                                {uploadProgress}% / {(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB
                                            </span>

                                            {uploadProgress === 100 && (
                                                <p className="text-primary">Upload Completed</p>
                                            )}
                                            {uploading && (
                                                <div className="flex justify-center">
                                                    <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-blue-500" />
                                                    <span className="ml-2">Uploading...</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {/* Show progress bar if upload is in progress */}
                                            {uploading && uploadProgress < 100 ? (
                                                <div className="w-full bg-gray-300 rounded-full h-3">
                                                    <div
                                                        style={{ width: `${uploadProgress}%` }}
                                                        className={`h-3 rounded-full ${uploadProgress === 100 ? 'bg-green-500' : 'bg-[#0FA38B]'}`}
                                                    ></div>
                                                </div>
                                            ) : null}

                                            {/* Show upload progress percentage or completed message */}
                                            {uploadProgress < 100 ? (
                                                <span className="text-sm">{uploadProgress}%</span>
                                            ) : (
                                                <p className="text-green-500 text-sm"></p>
                                            )}
                                        </div>



                                    </div>
                                    <button onClick={() => navigate('/onboarding/home')} className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-4 w-full mt-4">
                                        Continue
                                    </button>
                                </>

                            )}
                        </>
                    ) : (
                        <div className="mt-6 space-y-4">
                            {manualTeamMembers.map((member, index) => (
                                <div key={index} className="bg-gray-100 p-2 space-y-2 rounded-lg">
                                    <div className="flex flex-col lg:flex-row justify-between items-center gap-3 w-full">
                                        <div className="flex flex-col gap-2 w-full">
                                            <label className="text-lg">First Name</label>
                                            <input
                                                type="text"
                                                value={member.firstName}
                                                onChange={(e) =>
                                                    updateManualMember(index, 'firstName', e.target.value)
                                                }
                                                className="w-full border border-gray-300 py-2 px-2 rounded-xl"
                                                placeholder="Enter first name"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full">
                                            <label className="text-lg">Last Name</label>
                                            <input
                                                type="text"
                                                value={member.lastName}
                                                onChange={(e) =>
                                                    updateManualMember(index, 'lastName', e.target.value)
                                                }
                                                className="w-full border border-gray-300 py-2 px-2 rounded-xl"
                                                placeholder="Enter last name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <label className="text-lg">Work Email</label>
                                        <input
                                            type="text"
                                            value={member.email}
                                            onChange={(e) => updateManualMember(index, 'email', e.target.value)}
                                            className="w-full border border-gray-300 py-2 px-2 rounded-xl"
                                            placeholder="Enter work email address"
                                            required
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className='flex flex-col gap-4'>
                                <button onClick={addManualMember} className="bg-white border w-64 border-gray-600 px-4 py-2 rounded">
                                    Add another team member
                                </button>
                                <button onClick={() => navigate('/onboarding/home')} className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-4">
                                    Continue
                                </button>

                            </div>

                        </div>
                    )}

                    <div className='mt-2'>
                        <p className='text-center text-primary text-lg ' onClick={() => navigate('/onboarding/home')}>Skip for now</p>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default InviteYourTeamMember;
