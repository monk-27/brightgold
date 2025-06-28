"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Star, Award, Users } from 'lucide-react';

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        mobile: "",
        message: "",
        document: null as File | null,
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        city: "",
        mobile: "",
        message: "",
        document: "",
    });

    const validateFile = (file: File) => {
        const allowedFileTypes = ["image/png", "image/jpeg", "application/pdf"];
        const maxFileSize = 5 * 1024 * 1024; // 5MB

        if (file && !allowedFileTypes.includes(file.type)) {
            return "Only PNG, JPEG, and PDF files are allowed.";
        }

        if (file && file.size > maxFileSize) {
            return "File size must be less than 5MB.";
        }

        return "";
    };

    const validateForm = () => {
        let tempErrors = {
            name: "",
            email: "",
            city: "",
            mobile: "",
            message: "",
            document: "",
        };
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required!";
            isValid = false;
        } else if (formData.name.length < 3 || formData.name.length > 25) {
            tempErrors.name = "Name should be between 3 and 25 characters!";
            isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            tempErrors.name = "Name should contain only letters!";
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required!";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            tempErrors.email = "Invalid email address!";
            isValid = false;
        }

        if (!formData.city.trim()) {
            tempErrors.city = "City is required!";
            isValid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.city)) {
            tempErrors.city = "City should contain only letters!";
            isValid = false;
        }

        if (!formData.mobile.trim()) {
            tempErrors.mobile = "Mobile number is required!";
            isValid = false;
        } else if (!/^[6789][0-9]{9}$/.test(formData.mobile)) {
            tempErrors.mobile = "Mobile number must be 10 digits starting with 6, 7, 8, or 9!";
            isValid = false;
        }

        if (!formData.message.trim()) {
            tempErrors.message = "Message is required!";
            isValid = false;
        } else if (formData.message.length > 500) {
            tempErrors.message = "Message should be max 500 characters!";
            isValid = false;
        }

        if (formData.document) {
            const fileError = validateFile(formData.document);
            if (fileError) {
                tempErrors.document = fileError;
                isValid = false;
            }
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData((prev) => ({ ...prev, document: file }));
        if (file) {
            const fileError = validateFile(file);
            setErrors((prev) => ({ ...prev, document: fileError || "" }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            alert("Form submitted successfully!");
            setFormData({
                name: "",
                email: "",
                city: "",
                mobile: "",
                message: "",
                document: null,
            });
            setErrors({
                name: "",
                email: "",
                city: "",
                mobile: "",
                message: "",
                document: "",
            });
        }
    };

    return (


        <div className="min-h-screen bg-gradient-to-br from-[#0A0D1A] via-[#13162D] to-[#1E2347] relative overflow-hidden">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10 pt-12 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            <span className="text-sm text-gray-300 font-medium">Excellence in Gold Refining</span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
                            Get in <span className="text-yellow-500 ">Touch</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                            Partner with us for top-tier gold refining services. Precision, purity, and trust in every process.
                        </p>

                        <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                <span>Available Now</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                                <span>Industry-Leading Standards</span>
                            </div>
                            <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2 text-blue-400" />
                                <span>5k+ Satisfied Partners</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-6 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                        {/* Left Side - Contact Information */}
                        <div className="lg:col-span-5 space-y-10">

                            {/* Introduction Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white/8 backdrop-blur-xl border border-white/20 rounded-3xl p-10 hover:bg-white/12 transition-all duration-500">
                                    <div className="flex items-start mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6">
                                            <Send className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-light text-white mb-2">
                                                Refine with Confidence
                                            </h2>
                                            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        Start your gold refining journey with us. From raw materials to pure gold, we deliver unmatched expertise and reliability.
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer group">
                                            <span className="text-sm font-semibold tracking-wide uppercase">Request a Quote</span>
                                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                                        </div>

                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-white">10-6</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wide">Daily Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Methods */}
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="group cursor-pointer max-w-full sm:max-w-md mx-auto">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                        <div className="relative bg-white/6 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-8 hover:bg-white/10 hover:border-white/25 transition-all duration-300">
                                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                                                    <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                                <div className="flex-1 text-center sm:text-left">
                                                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">Email Us</h3>
                                                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>

                                                    <p className="text-gray-400 text-xs sm:text-sm mb-3 mt-1 ">Prompt responses within 4 hours</p>
                                                    <p className="text-blue-400 font-semibold text-base sm:text-lg">connect@brightgold.com</p>
                                                </div>
                                                <div className="text-center sm:text-right mt-4 sm:mt-0">
                                                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Response Time</div>
                                                    <div className="text-sm font-semibold text-green-400">{"< 4 Hours"}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group cursor-pointer max-w-full sm:max-w-md mx-auto">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                        <div className="relative bg-white/6 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-8 hover:bg-white/10 hover:border-white/25 transition-all duration-300">
                                            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 group-hover:scale-110 transition-transform duration-300">
                                                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                                </div>
                                                <div className="flex-1 text-center sm:text-left">
                                                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">Call Us</h3>
                                                    <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400"></div>

                                                    <p className="text-gray-400 text-xs sm:text-sm mb-3 pt-2">Speak with our refining experts</p>
                                                    <p className="text-emerald-400 font-semibold text-base sm:text-lg">011 43093345</p>
                                                </div>
                                                <div className="text-center sm:text-right mt-4 sm:mt-0">
                                                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Availability

                                                        <div className="text-sm font-semibold text-emerald-400">Mon-Sat 10AM-6PM</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="group cursor-pointer">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                        <div className="relative bg-white/6 backdrop-blur-xl border border-white/15 rounded-2xl p-8 hover:bg-white/10 hover:border-white/25 transition-all duration-300">
                                            <div className="flex items-center">
                                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                                                    <MapPin className="w-7 h-7 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-white font-semibold text-xl mb-2">Visit Us</h3>
                                                    <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-purple-400"></div>

                                                    <p className="text-gray-400 text-sm mb-3 pt-2 ">Bright Metal Refiners</p>
                                                    <p className="text-purple-400 font-semibold text-lg">
                                                        416 World Trade Center,<br />
                                                        <span className="text-base">Babar Road, New Delhi - 110001</span>
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Floor</div>
                                                    <div className="text-sm font-semibold text-purple-400">4th</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                <div className="relative bg-white/6 backdrop-blur-xl border border-white/15 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex items-center mb-8">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-5">
                                            <Clock className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-2xl mb-2">Operating Hours</h3>
                                            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-purple-400"></div>

                                            <p className="text-gray-400 text-sm pt-2 ">Ready to serve you</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                                            <span className="text-gray-300 font-medium">Monday - Saturday</span>
                                            <span className="text-white font-semibold">10:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-white/10">
                                            <span className="text-gray-300 font-medium">Sunday</span>
                                            <span className="text-orange-400 font-semibold">Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image Section */}
                        <div className="lg:col-span-7">
                            <div className="relative h-full min-h-[700px] lg:min-h-[900px] rounded-3xl overflow-hidden group">
                                {/* Image Container */}
                                <div className="absolute inset-0">
                                    <img
                                        src="/contact.jpg"
                                        alt="State-of-the-art gold refinery facility"
                                        className="w-full h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-cyan-900/40"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50"></div>
                                </div>

                                {/* Floating Decorative Elements */}
                                <div className="absolute top-12 right-12 w-40 h-40 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-32 left-12 w-32 h-32 bg-purple-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
                                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-400/15 rounded-full blur-xl animate-pulse delay-500"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-16">
                                    <div className="max-w-lg">
                                        <div className="relative group/card">
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl"></div>
                                            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 hover:bg-white/15 transition-all duration-500">

                                                {/* Badge */}
                                                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
                                                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                                                    <span className="text-yellow-300 text-sm font-semibold">Bright Metal Refiners</span>
                                                </div>

                                                <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                                                    Transforming
                                                    <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent font-normal">
                                                        Gold into Purity
                                                    </span>
                                                </h2>

                                                <p className="text-gray-200 text-lg mb-10 leading-relaxed">
                                                    Join thousands of partners who trust our expertise in gold refining. Precision and reliability in every project.
                                                </p>

                                                {/* */}

                                                {/* Stats */}
                                                <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/20">
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-white">5k+</div>
                                                        <div className="text-xs text-gray-300 uppercase tracking-wide">Partners</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-white">99.9%</div>
                                                        <div className="text-xs text-gray-300 uppercase tracking-wide">Purity</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-white">50+</div>
                                                        <div className="text-xs text-gray-300 uppercase tracking-wide">Years Experience</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Grid Pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                                        backgroundSize: '60px 60px'
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default ContactComponent;