export default function Footer() {
    return (
        <footer className="bg-[#0b0b0b] text-white">

            {/* ================= TOP DECORATIVE LINE ================= */}

            <div className="h-px w-full  from-transparent via-[#b89b62] to-transparent" />


            {/* ================= MAIN FOOTER ================= */}

            <div className="relative overflow-hidden">

                {/* Decorative glow */}
                <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#b89b62]/5 blur-3xl" />
                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#b89b62]/5 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">


                    {/* ================= BRAND SECTION ================= */}

                    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">


                        {/* BRAND */}

                        <div className="lg:col-span-5">

                            {/* Logo */}

                            <div className="flex items-center gap-3">

                                <div className="
                                    flex h-12 w-12
                                    items-center justify-center
                                    rounded-full
                                    border border-[#b89b62]
                                    text-[#d4b878]
                                    shadow-[0_0_25px_rgba(184,155,98,0.12)]
                                ">
                                    <span className="text-lg font-serif">
                                        N
                                    </span>
                                </div>


                                <div>

                                    <h2 className="
                                        text-xl
                                        font-semibold
                                        tracking-[0.18em]
                                    ">
                                        NOBLE
                                    </h2>

                                    <p className="
                                        text-[9px]
                                        uppercase
                                        tracking-[0.38em]
                                        text-[#b89b62]
                                    ">
                                        Financial
                                    </p>

                                </div>

                            </div>


                            {/* Description */}

                            <p className="
                                mt-7
                                max-w-md
                                text-sm
                                leading-7
                                text-white/45
                            ">
                                Thoughtful financial solutions designed around
                                your goals, your ambitions, and your future.
                                Experience finance with a more personal touch.
                            </p>


                            {/* Luxury Quote */}

                            <div className="mt-8 border-l border-[#b89b62]/60 pl-5">

                                <p className="
                                    max-w-sm
                                    font-serif
                                    text-lg
                                    italic
                                    leading-7
                                    text-white/70
                                ">
                                    “Your future deserves more than a number.”
                                </p>

                            </div>

                        </div>


                        {/* ================= LINKS ================= */}

                        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-4">

                            {/* Company */}

                            <div>

                                <p className="
                                    mb-6
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#b89b62]
                                ">
                                    Company
                                </p>

                                <div className="space-y-4">

                                    <a
                                        href="#about"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        About us
                                    </a>

                                    <a
                                        href="#services"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        Our services
                                    </a>

                                    <a
                                        href="#careers"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        Careers
                                    </a>

                                    <a
                                        href="#contact"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        Contact
                                    </a>

                                </div>

                            </div>


                            {/* Resources */}

                            <div>

                                <p className="
                                    mb-6
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#b89b62]
                                ">
                                    Resources
                                </p>

                                <div className="space-y-4">

                                    <a
                                        href="#faq"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        FAQ
                                    </a>

                                    <a
                                        href="#guides"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        Financial guides
                                    </a>

                                    <a
                                        href="#terms"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        Terms
                                    </a>

                                    <a
                                        href="#privacy"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        Privacy
                                    </a>

                                </div>

                            </div>


                            {/* Contact */}

                            <div>

                                <p className="
                                    mb-6
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#b89b62]
                                ">
                                    Contact
                                </p>

                                <div className="space-y-4">

                                    <p className="text-sm leading-6 text-white/50">
                                        Amman, Jordan
                                    </p>

                                    <a
                                        href="mailto:hello@noble.com"
                                        className="
                                            block
                                            break-all
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        hello@noble.com
                                    </a>

                                    <a
                                        href="tel:+962700000000"
                                        className="
                                            block
                                            text-sm
                                            text-white/50
                                            transition-colors
                                            hover:text-white
                                        "
                                    >
                                        +962 7X XXX XXXX
                                    </a>

                                </div>

                            </div>

                        </div>


                        {/* ================= NEWSLETTER ================= */}

                        <div className="lg:col-span-3">

                            <p className="
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-[#b89b62]
                            ">
                                Stay informed
                            </p>

                            <h3 className="
                                mt-4
                                font-serif
                                text-2xl
                                leading-tight
                                text-white
                            ">
                                Insights worth
                                <br />
                                knowing.
                            </h3>

                            <p className="
                                mt-4
                                text-sm
                                leading-6
                                text-white/40
                            ">
                                Receive occasional financial insights,
                                product updates, and useful guidance.
                            </p>


                            {/* Email */}

                            <div className="
                                mt-6
                                flex
                                overflow-hidden
                                rounded-lg
                                border
                                border-white/10
                                transition-all
                                focus-within:border-[#b89b62]/70
                            ">

                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="
                                        min-w-0
                                        flex-1
                                        bg-transparent
                                        px-4
                                        py-3
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-white/25
                                    "
                                />

                                <button
                                    type="button"
                                    className="
                                        m-1
                                        flex
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-md
                                        bg-[#b89b62]
                                        text-black
                                        transition-all
                                        hover:bg-[#d4b878]
                                    "
                                >
                                    →
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* ================= DIVIDER ================= */}

                    <div className="
                        my-14
                        h-px
                        from-transparent
                        via-white/10
                        to-transparent
                    " />


                    {/* ================= TRUST ROW ================= */}

                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-6
                        md:flex-row
                    ">

                        <div className="flex items-center gap-4">

                            <div className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#b89b62]/40
                                text-[#b89b62]
                            ">
                                ◇
                            </div>

                            <div>

                                <p className="text-xs font-medium text-white/70">
                                    Your privacy matters
                                </p>

                                <p className="mt-1 text-[11px] text-white/30">
                                    Secure & confidential application process
                                </p>

                            </div>

                        </div>


                        {/* Social */}

                        <div className="flex items-center gap-3">

                            <a
                                href="#linkedin"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    text-xs
                                    text-white/40
                                    transition-all
                                    hover:border-[#b89b62]
                                    hover:text-[#b89b62]
                                "
                            >
                                in
                            </a>

                            <a
                                href="#instagram"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    text-xs
                                    text-white/40
                                    transition-all
                                    hover:border-[#b89b62]
                                    hover:text-[#b89b62]
                                "
                            >
                                ig
                            </a>

                            <a
                                href="#facebook"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/10
                                    text-xs
                                    text-white/40
                                    transition-all
                                    hover:border-[#b89b62]
                                    hover:text-[#b89b62]
                                "
                            >
                                f
                            </a>

                        </div>

                    </div>


                    {/* ================= BOTTOM ================= */}

                    <div className="
                        mt-10
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-3
                        border-t
                        border-white/5
                        pt-6
                        text-[11px]
                        text-white/25
                        md:flex-row
                    ">

                        <p>
                            © 2026 Noble Financial. All rights reserved.
                        </p>

                        <div className="flex items-center gap-5">

                            <a
                                href="#privacy"
                                className="transition-colors hover:text-white/60"
                            >
                                Privacy
                            </a>

                            <a
                                href="#terms"
                                className="transition-colors hover:text-white/60"
                            >
                                Terms
                            </a>

                            <a
                                href="#cookies"
                                className="transition-colors hover:text-white/60"
                            >
                                Cookies
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}
