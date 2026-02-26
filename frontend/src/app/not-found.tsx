export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0A0A0F]" />
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="relative text-center container-xl">
                <div
                    className="text-8xl md:text-[12rem] font-black gradient-text leading-none mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    404
                </div>
                <h1
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Page Not Found
                </h1>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Looks like this route took a wrong turn. Let&apos;s get you back on
                    track.
                </p>
                <a href="/" className="btn-primary">
                    Back to Home
                </a>
            </div>
        </section>
    );
}
