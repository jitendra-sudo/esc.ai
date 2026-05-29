"use client"
import { Input } from '@/components/atoms/input'
import React, { useEffect, useState } from 'react'

function RegisterClient() {
    const [formData, setFormData] = useState({ organizationName: '', domain: '', address: '', firstName: '', lastName: '', email: '', password: '', designation: '', profile: '', phone: '', domainMail: '' })
    const [showPassword, setShowPassword] = useState(false);
    const [activestep, setActiveStep] = useState(1)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleupload = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profile: reader.result })
            }
            reader.readAsDataURL(file);
        }
    }


    useEffect(() => {
        const domain = formData.organizationName.toLowerCase().replace(/\s+/g, '')
        const domainMail = `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@${domain}.in`
        setFormData({ ...formData, domain: formData.domain || domain, domainMail })
    }, [formData.organizationName, formData.firstName, formData.lastName])

    const handleDomainChange = (e) => {
        setFormData({ ...formData, domain: e.target.value })
    }

    return (
        <div className=" flex items-center justify-center py-4">
            <div className="w-full  sm:shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row">

                <div className="w-full md:w-[400px] bg-[#fdfdfd] p-8 md:border-r border-gray-100 flex flex-col">
                    <h1 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight leading-tight">Register Your School</h1>
                    <p className="text-sm text-gray-500  leading-relaxed">
                        To start using the platform, please create and set up your institution's account following three easy steps.
                    </p>

                    <div className="flex flex-col gap-6 mt-4">
                        <div onClick={() => setActiveStep(1)} className={`p-5 rounded-2xl transition-all cursor-pointer ${activestep === 1 ? "bg-white shadow-[0_4px_24px_rgb(0,0,0,0.04)] border border-gray-50 relative overflow-hidden group" : "opacity-40 hover:opacity-70"}`}>
                            {activestep === 1 && <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-blue-600 rounded-l-2xl"></div>}
                            <h3 className={`font-bold text-[16px] ${activestep === 1 ? "text-gray-900 font-extrabold" : "text-gray-500"}`}>Step 1. Organisation Data</h3>
                            <p className={`text-[14px] mt-2 leading-relaxed ${activestep === 1 ? "text-gray-600" : "text-gray-400"}`}>Enter the basic details about your school or institution.</p>
                        </div>

                        <div onClick={() => setActiveStep(2)} className={`p-5 rounded-2xl transition-all cursor-pointer ${activestep === 2 ? "bg-white shadow-[0_4px_24px_rgb(0,0,0,0.04)] border border-gray-50 relative overflow-hidden group" : "opacity-40 hover:opacity-70"}`}>
                            {activestep === 2 && <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-blue-600 rounded-l-2xl"></div>}
                            <h3 className={`font-bold text-[16px] ${activestep === 2 ? "text-gray-900 font-extrabold" : "text-gray-500"}`}>Step 2. Personal Details</h3>
                            <p className={`text-[14px] mt-2 leading-relaxed ${activestep === 2 ? "text-gray-600" : "text-gray-400"}`}>Provide the contact information for the primary administrator.</p>

                        </div>

                        <div onClick={() => setActiveStep(3)} className={`p-5 rounded-2xl transition-all cursor-pointer ${activestep === 3 ? "bg-white shadow-[0_4px_24px_rgb(0,0,0,0.04)] border border-gray-50 relative overflow-hidden group" : "opacity-40 hover:opacity-70"}`}>
                            {activestep === 3 && <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-blue-600 rounded-l-2xl"></div>}
                            <h3 className={`font-bold text-[16px] ${activestep === 3 ? "text-gray-900 font-extrabold" : "text-gray-500"}`}>Step 3. Other Details</h3>
                            <p className={`text-[14px] mt-2 leading-relaxed ${activestep === 3 ? "text-gray-600" : "text-gray-400"}`}>Set up your location and secure your new account.</p>
                        </div>
                    </div>
                </div>


                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col">
                    <div className="max-w-2xl w-full mx-auto">
                        <h2 className="text-[24px] font-bold text-gray-900 mb-2">
                            {activestep === 1 && "Step 1. Organisation Data"}
                            {activestep === 2 && "Step 2. Personal Details"}
                            {activestep === 3 && "Step 3. Other Details"}
                        </h2>
                        <p className="text-[15px] text-gray-500 mb-8 pb-6 border-b border-gray-100">All the fields are obligatory for filling in</p>

                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">

                            {activestep === 1 && (
                                <>
                                    <div className="sm:col-span-2">
                                        <Input
                                            label="Organization Name"
                                            type="text"
                                            placeholder="Enter your organization name"
                                            onChange={handleChange}
                                            name='organizationName'
                                            size="lg"
                                        />
                                    </div>




                                    <Input
                                        label="Domain"
                                        type="text"
                                        placeholder="e.g. esc.ai, google"
                                        onChange={handleDomainChange}
                                        name='domain'
                                        value={formData?.domain}
                                        size="lg"
                                    />

                                </>
                            )
                            }


                            {activestep === 2 && (
                                <>
                                    <Input
                                        label="First Name"
                                        type="text"
                                        placeholder="Enter your first name"
                                        onChange={handleChange}
                                        name='firstName'
                                        size="lg"
                                    />

                                    <Input
                                        label="Last Name"
                                        type="text"
                                        placeholder="Enter your last name"
                                        onChange={handleChange}
                                        name='lastName'
                                        size="lg"
                                    />

                                    <Input
                                        label="Designation"
                                        type="text"
                                        placeholder="e.g. CEO, CTO"
                                        onChange={handleChange}
                                        name='designation'
                                        size="lg"
                                    />

                                    <Input
                                        label="Phone Number"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        onChange={handleChange}
                                        name='phone'
                                        size="lg"
                                    />

                                    <Input
                                        label="Email"
                                        type="email"
                                        placeholder="Enter your personal email"
                                        onChange={handleChange}
                                        name='email'
                                        size="lg"
                                    />

                                    <Input
                                        label="Organisation Email"
                                        type="email"
                                        placeholder="Enter your work email"
                                        onChange={handleChange}
                                        name='domainMail'
                                        value={formData.domainMail}
                                        size="lg"
                                    />
                                </>
                            )}

                            {activestep === 3 && (
                                <>


                                    <div className="sm:col-span-2">
                                        <Input
                                            label="Address"
                                            type="text"
                                            placeholder="Enter your full organization address"
                                            onChange={handleChange}
                                            name='address'
                                            size="lg"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <Input
                                            label="Profile Photo"
                                            type="file"
                                            onChange={handleupload}
                                            name='profile'
                                            size="lg"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <Input
                                            label="Password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create a strong password"
                                            onChange={handleChange}
                                            name='password'
                                            size="lg"
                                            rightIcon={
                                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-600 focus:outline-none p-1">
                                                    {showPassword ? (
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                                    ) : (
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                                                    )}
                                                </button>
                                            }
                                        />
                                    </div>
                                </>
                            )}
                        </form>

                        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                            <button type="button" onClick={() => setActiveStep(prev => Math.max(1, prev - 1))} disabled={activestep === 1} className={`w-full sm:w-1/3 py-3.5 px-6 border-2 font-bold rounded-lg transition-colors focus:outline-none focus:ring-4 ${activestep === 1 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-[#ffb466] text-[#ffb466] hover:bg-[#fff9f4] focus:ring-[#ffb466]/20'}`}>
                                Back
                            </button>
                            <button onClick={(e) => {
                                if (activestep < 3) {
                                    e.preventDefault();
                                    setActiveStep(prev => prev + 1);
                                } else {
                                    handleSubmit(e);
                                }
                            }} className="w-full sm:w-2/3 py-3.5 px-6 bg-[#ffc382] text-white font-bold rounded-lg hover:bg-[#ffb466] transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-[#ffc382]/40">
                                {activestep === 3 ? "Complete Registration" : "Next Step"}
                                {activestep < 3 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>}
                                {activestep === 3 && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegisterClient;