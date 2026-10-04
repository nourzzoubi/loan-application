import { useState } from "react";
export default function Form() {
    const durations = ["6mo", "12mo", "24mo", "36mo", "48mo", "60mo"];
    const [formData, setFormData] = useState({
        fullName: "",
        nationalId: "",
        email: "",
        phone: "",
        employmentStatus: "",
        company: "",
        monthlyIncome: "",
        loanAmount: "",
        loanPurpose: "",
        duration: "",
        terms: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const inputStyle = `
        w-full h-12 px-4
        bg-white
        border border-gray-200
        rounded-lg
        text-gray-900
        outline-none
        transition-all duration-200
        placeholder:text-gray-400
        hover:border-gray-300
        focus:border-gray-900
        focus:ring-1 focus:ring-gray-900
    `;
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setSubmitted(false);
    };
    const calculateMonthlyPayment = () => {
        const amount = Number(formData.loanAmount);
        if (!amount || !formData.duration) {
            return null;
        }
        const months = Number(formData.duration.replace("mo", ""));
        const annualRate = 7.9 / 100;
        const monthlyRate = annualRate / 12;
        const payment =(amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /(Math.pow(1 + monthlyRate, months) - 1);
        return payment.toFixed(2);
    };
    const monthlyPayment = calculateMonthlyPayment();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName ||!formData.nationalId ||!formData.email ||!formData.phone ||!formData.employmentStatus ||!formData.monthlyIncome ||!formData.loanAmount ||!formData.loanPurpose ||!formData.duration ||!formData.terms ) {
            alert("Please complete all required fields.");
            return;
        }
        if (Number(formData.loanAmount) < 1000 ||Number(formData.loanAmount) > 250000) {
            alert("Loan amount must be between $1,000 and $250,000.");
            return;
        }
        setSubmitted(true);
        console.log("Loan Application:", formData);
    };
    return (
        <div className="min-h-screen bg-[#f7f7f5] py-10 px-4 md:px-8">
            <form onSubmit={handleSubmit}className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
                <div className="px-7 py-8 md:px-12 md:py-10 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[11px] tracking-[0.25em] uppercase text-gray-400 mb-3">
                                Premium Finance
                            </p>
                            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-950">
                                Loan Application
                            </h1>
                            <p className="mt-2 text-sm text-gray-400">
                                Complete your application in a few simple steps.
                            </p>
                        </div>
                        <div className="hidden sm:flex w-12 h-12 rounded-full border border-[#c9a96e] items-center justify-center text-[#b08d4f] text-lg">
                            $
                        </div>
                    </div>
                </div>
                <div className="px-7 py-9 md:px-12 md:py-12">
                    <section>
                        <div className="flex items-center gap-4 mb-7">
                            <span className="text-xs font-medium tracking-widest text-[#b08d4f]">
                                01
                            </span>
                            <div className="h-px flex-1 bg-gray-100" />
                            <h2 className="text-lg font-semibold text-gray-900">
                                Personal Information
                            </h2>
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            Let’s start with your basic details.
                        </p>
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full name
                                <span className="text-[#b08d4f] ml-1">*</span>
                            </label>
                            <input    type="text"    name="fullName"    value={formData.fullName}    onChange={handleChange}    placeholder="Enter your full name"    className={inputStyle}/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    National ID
                                    <span className="text-[#b08d4f] ml-1">*</span>
                                </label>
                                <input    type="text"    name="nationalId"    value={formData.nationalId} onChange={handleChange}    placeholder="National ID"    className={inputStyle} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email address
                                    <span className="text-[#b08d4f] ml-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={inputStyle}
                                />

                            </div>


                            {/* Phone */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone number
                                    <span className="text-[#b08d4f] ml-1">*</span>
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+962 7X XXX XXXX"
                                    className={inputStyle}
                                />
                            </div>
                        </div>
                    </section>
                    <div className="my-11 h-px bg-gray-100" />
                    <section>
                        <div className="flex items-center gap-4 mb-7">
                            <span className="text-xs font-medium tracking-widest text-[#b08d4f]">
                                02
                            </span>
                            <div className="h-px flex-1 bg-gray-100" />
                            <h2 className="text-lg font-semibold text-gray-900">
                                Employment Information
                            </h2>
                        </div>
                        <p className="text-sm text-gray-400 mb-6">
                            Help us understand your financial situation.
                        </p>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Employment status
                                <span className="text-[#b08d4f] ml-1">*</span>
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {[
                                    "Employed",
                                    "Self-employed",
                                    "Student",
                                    "Unemployed",
                                ].map((status) => (

                                    <label
                                        key={status}
                                        className="cursor-pointer"
                                    >

                                        <input
                                            type="radio"
                                            name="employmentStatus"
                                            value={status}
                                            checked={
                                                formData.employmentStatus === status
                                            }
                                            onChange={handleChange}
                                            className="peer hidden"
                                        />

                                        <div className="
                                            h-12
                                            flex items-center justify-center
                                            rounded-lg
                                            border border-gray-200
                                            text-sm text-gray-600
                                            transition-all
                                            hover:border-gray-400
                                            peer-checked:border-gray-900
                                            peer-checked:bg-gray-950
                                            peer-checked:text-white
                                        ">
                                            {status}
                                        </div>

                                    </label>

                                ))}

                            </div>

                        </div>


                        {/* Company + Income */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Company */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Company / employer

                                    <span className="text-gray-400 font-normal ml-2">
                                        Optional
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company name"
                                    className={inputStyle}
                                />

                            </div>


                            {/* Income */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Monthly income
                                    <span className="text-[#b08d4f] ml-1">*</span>
                                </label>

                                <div className="relative">

                                    <input
                                        type="number"
                                        name="monthlyIncome"
                                        value={formData.monthlyIncome}
                                        onChange={handleChange}
                                        placeholder="Enter amount"
                                        className={`${inputStyle} pr-12`}
                                    />

                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                        USD
                                    </span>

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* ================= DIVIDER ================= */}

                    <div className="my-11 h-px bg-gray-100" />


                    {/* ================= LOAN DETAILS ================= */}

                    <section>

                        <div className="flex items-center gap-4 mb-7">

                            <span className="text-xs font-medium tracking-widest text-[#b08d4f]">
                                03
                            </span>

                            <div className="h-px flex-1 bg-gray-100" />

                            <h2 className="text-lg font-semibold text-gray-900">
                                Loan Details
                            </h2>

                        </div>

                        <p className="text-sm text-gray-400 mb-6">
                            Choose the option that works best for you.
                        </p>


                        {/* Amount + Purpose */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Loan Amount */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Requested loan amount
                                    <span className="text-[#b08d4f] ml-1">*</span>
                                </label>

                                <div className="relative">

                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        $
                                    </span>

                                    <input
                                        type="number"
                                        name="loanAmount"
                                        value={formData.loanAmount}
                                        onChange={handleChange}
                                        min="1000"
                                        max="250000"
                                        placeholder="Enter amount"
                                        className={`${inputStyle} pl-9`}
                                    />

                                </div>

                                <p className="text-xs text-gray-400 mt-2">
                                    $1,000 – $250,000
                                </p>

                            </div>


                            {/* Purpose */}

                            <div>

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Loan purpose
                                    <span className="text-[#b08d4f] ml-1">*</span>
                                </label>

                                <select
                                    name="loanPurpose"
                                    value={formData.loanPurpose}
                                    onChange={handleChange}
                                    className={`${inputStyle} text-gray-600 cursor-pointer`}
                                >

                                    <option value="" disabled>
                                        Select purpose
                                    </option>

                                    <option value="Education">
                                        Education
                                    </option>

                                    <option value="Home">
                                        Home
                                    </option>

                                    <option value="Car">
                                        Car
                                    </option>

                                    <option value="Business">
                                        Business
                                    </option>

                                    <option value="Personal">
                                        Personal
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </div>

                        </div>


                        {/* Duration */}

                        <div className="mt-6">

                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Loan duration
                                <span className="text-[#b08d4f] ml-1">*</span>
                            </label>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">

                                {durations.map((duration) => (

                                    <label
                                        key={duration}
                                        className="cursor-pointer"
                                    >

                                        <input
                                            type="radio"
                                            name="duration"
                                            value={duration}
                                            checked={
                                                formData.duration === duration
                                            }
                                            onChange={handleChange}
                                            className="peer hidden"
                                        />

                                        <div className="
                                            h-12
                                            flex items-center justify-center
                                            rounded-lg
                                            border border-gray-200
                                            text-sm font-medium
                                            text-gray-600
                                            transition-all
                                            hover:border-gray-400
                                            peer-checked:border-gray-950
                                            peer-checked:bg-gray-950
                                            peer-checked:text-white
                                        ">
                                            {duration}
                                        </div>

                                    </label>

                                ))}

                            </div>

                        </div>


                        {/* ================= ESTIMATE ================= */}
                        <div className="mt-7 rounded-xl border border-gray-200 bg-[#fafafa] p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-400">
                                        Estimated monthly payment
                                    </p>
                                    <div className="mt-2 flex items-baseline gap-2">
                                        <span className="text-3xl font-semibold text-gray-950">
                                            {monthlyPayment
                                                ? `$${monthlyPayment}`
                                                : "—"}
                                        </span>
                                        <span className="text-sm text-gray-400">
                                            per month
                                        </span>
                                    </div>
                                </div>
                                <div className="md:border-l md:border-gray-200 md:pl-6">
                                    <p className="text-xs uppercase tracking-widest text-gray-400">
                                        Illustrative rate
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold text-gray-950">
                                        7.9%
                                        <span className="ml-1 text-sm font-normal text-gray-400">
                                            APR
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p className="mt-5 text-xs leading-5 text-gray-400">
                                This estimate is for guidance only. Your final rate
                                and payment may vary after review.
                            </p>
                        </div>
                    </section>
                    <div className="mt-11 border-t border-gray-100 pt-8">
                        <div className="flex items-start gap-3">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="mt-0.5 h-4 w-4 cursor-pointer accent-gray-950"
                            />

                            <label
                                htmlFor="terms"
                                className="text-sm text-gray-500"
                            >
                                I agree to the{" "}

                                <a
                                    href="#terms"
                                    className="font-medium text-gray-900 underline underline-offset-4"
                                >
                                    Terms & Conditions
                                </a>
                                .
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="
                                mt-7
                                w-full
                                h-14
                                rounded-lg
                                bg-gray-950
                                text-white
                                text-sm
                                font-semibold
                                tracking-wide
                                transition-all
                                duration-200
                                hover:bg-[#b08d4f]
                                hover:shadow-xl
                                hover:shadow-[#b08d4f]/20
                                active:scale-[0.99]
                            "
                        >
                            Submit Loan Application
                        </button>
                        {submitted && (
                            <div className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-center text-sm text-green-700">
                                Your loan application has been submitted successfully.
                            </div>
                        )}
                        <div className="mt-5 flex items-center justify-center gap-2">
                            <span className="text-[#b08d4f]">
                                ◆
                            </span>
                            <p className="text-xs text-gray-400">
                                Your information is secure and will only be used
                                to process your application.
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
