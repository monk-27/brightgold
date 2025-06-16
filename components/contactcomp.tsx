"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="min-h-screen  bg-[#13162D] flex items-center justify-center p-20">

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <main className="">
                    <span className="text-white py-6 text-center sm:text-lg sm:poppins-semibold">

                    </span>
                    <p className="text-white py-12  text-xl text-center sm:text-3xl sm:poppins-semibold">
                        Contact us
                    </p>

                    <div className="w-full rounded relative md:flex justify-end">
                        <div className="md:w-2/5 border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none rounded-lg p-6 mb-4 md:mb-0 md:absolute z-30 top-12 left-0 t hover:scale-110 ease-in-out" style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                        }}>
                            <p className="text-3xl text-white text-center text-gold01 extrabold">
                                Get in Touch
                            </p>
                            {/* Static Card 1: CALL US */}
                            <Link href="tel:9289480035">
                                <div className="py-6 sm:min-h-[110px] overflow-hidden flex flex-col items-center">
                                    <Image
                                        className="mb-1"
                                        src="https://www.brightdigigold.com/images/telephone-call.png"
                                        alt="CALL US"
                                        width={30}
                                        height={30}
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                    <div className="bold text-base mt-2 text-white">CALL US</div>
                                    <div className="px-4 py-2 text-center text-white">
                                        01143093345
                                    </div>
                                </div>
                            </Link>
                            {/* Static Card 2: MAIL US */}
                            <Link href="mailto:connect@brightgold.com">
                                <div className="py-6 sm:min-h-[110px] overflow-hidden flex flex-col items-center">
                                    <Image
                                        className="mb-1"
                                        src="https://brightdigigold.s3.ap-south-1.amazonaws.com/Mail+icon.png"
                                        alt="MAIL US"
                                        width={30}
                                        height={30}
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                    <div className="bold text-base mt-2 text-white">MAIL US</div>
                                    <div className="px-4 py-2 text-center text-white">
                                        connect@brightgold.com
                                    </div>
                                </div>
                            </Link>
                            {/* Static Card 3: REACH US */}
                            <Link href="">
                                <div className="py-6 sm:min-h-[110px] overflow-hidden flex flex-col items-center">
                                    <Image
                                        className="mb-1"
                                        src="https://www.brightdigigold.com/images/placeholder.png"
                                        alt="REACH US"
                                        width={30}
                                        height={30}
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                    <div className="bold text-base mt-2 text-white">REACH US</div>
                                    <div
                                        className="px-4 py-2 text-center text-white"
                                        dangerouslySetInnerHTML={{
                                            __html: "Bright Metal Refiners<br />416, 4th Floor, World Trade Center, Babar Road, New Delhi - 110001",
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>
                        <section className="w-full md:w-3/4 bg-gradient-to-br from-[#15425E] to-[#15425E]] px-4 py-4 sm:py-10 rounded-lg md:pl-40 lg:pl-40 xl:pl-56">
                            {/* <p className="pb-3 text-lg sm:text-xl poppins-semibold">
                                Please raise your query here
                            </p> */}
                            {/* <form className="pt-2" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="">Name*</label>
                                        <br />
                                        <input
                                            name="name"
                                            type="text"
                                            className=" border-2 border-gray-800 rounded-md px-4 py-3 w-full text-white"
                                            placeholder="Enter Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <div className="text-red-500">{errors.name}</div>}
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="">Email ID*</label>
                                        <br />
                                        <input
                                            name="email"
                                            type="email"
                                            className="  border-2 border-gray-800 rounded-md px-4 py-3 w-full text-white"
                                            placeholder="Enter Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <div className="text-red-500">{errors.email}</div>}
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="">City*</label>
                                        <br />
                                        <input
                                            name="city"
                                            type="text"
                                            className="border-2  border-gray-800 rounded-md px-4 py-3 w-full text-white"
                                            placeholder="Enter Your City"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                        {errors.city && <div className="text-red-500">{errors.city}</div>}
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="text-black">Mobile No.*</label>
                                        <br />
                                        <input
                                            name="mobile"
                                            type="text"
                                            className=" border-2  border-gray-800 rounded-md px-4 py-3 w-full text-white"
                                            placeholder="Enter Your Mobile No."
                                            value={formData.mobile}
                                            onChange={handleChange}
                                        />
                                        {errors.mobile && <div className="text-red-500">{errors.mobile}</div>}
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-black">Message*</label>
                                        <br />
                                        <textarea
                                            name="message"
                                            placeholder="Write Your Query Here"
                                            className="border-2  border-gray-800 rounded-md px-4 py-3 w-full text-white"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                        {errors.message && <div className="text-red-500">{errors.message}</div>}
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-black">Attachment</label>
                                        <br />
                                        <input
                                            type="file"
                                            id="document"
                                            className=" border-2  border-gray-800 rounded-md px-4 py-3 w-full text-white"
                                            name="document"
                                            onChange={handleFileChange}
                                        />
                                        {formData.document && (
                                            <p className="text-black">{formData.document.name}</p>
                                        )}
                                        {errors.document && <div className="text-red-500">{errors.document}</div>}
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="button text-white py-2 px-6 bg-theme cursor-pointer rounded-lg"
                                            type="submit"
                                        >
                                            SEND
                                        </button>
                                    </div>
                                </div>
                                <p className="pt-2">Thank you for choosing Bright DiGi Gold.</p>
                            </form> */}
                            <img src="/contact.gif" alt="Contact Us" className="w-[100%] h-auto" />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ContactComponent;