"use client";

import { useEffect, useRef, useState } from "react";

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let currentIndex = 0;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayed(text.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === text.length) {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const { displayed, done } = useTypewriter(
    "Glad you stopped in. Good taste tends to find us. Now, what are we building?"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let prevX = 0;
    let isSeeking = false;
    let targetTime = 0;
    let pendingSeek = false;

    const SENSITIVITY = 0.8;

    const handleMouseMove = (e: MouseEvent) => {
      if (!prevX) {
        prevX = e.clientX;
        return;
      }
      const delta = e.clientX - prevX;
      prevX = e.clientX;

      if (!video.duration) return;

      targetTime += (delta / window.innerWidth) * SENSITIVITY * video.duration;
      targetTime = Math.max(0, Math.min(targetTime, video.duration));

      if (!isSeeking) {
        isSeeking = true;
        video.currentTime = targetTime;
      } else {
        pendingSeek = true;
      }
    };

    const handleSeeked = () => {
      isSeeking = false;
      if (pendingSeek) {
        pendingSeek = false;
        isSeeking = true;
        video.currentTime = targetTime;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@mainframe.co");
  };

  const navLinks = ["Labs", "Studio", "Openings", "Shop"];

  return (
    <main className="relative min-h-screen w-full">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4"
        className="fixed inset-0 z-0 h-full w-full object-cover object-[70%_center]"
        muted
        playsInline
        preload="auto"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center pointer-events-auto">
        {/* Logo */}
        <div className="flex flex-row gap-3 items-center">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Mainframe&reg;
          </span>
          <span className="text-[25px] sm:text-[30px] text-white select-none tracking-[-0.02em]">
            ✳︎
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-row text-[23px] text-white">
          {navLinks.map((link, i) => (
            <span key={link}>
              <a href="#" className="hover:opacity-60 transition-opacity">
                {link}
              </a>
              {i < navLinks.length - 1 && ", "}
            </span>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:block text-[23px] text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] relative z-20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-[9] flex flex-col justify-center px-8 gap-8 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[32px] font-medium text-white hover:opacity-60 transition-opacity"
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          className="text-[32px] font-medium text-white underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative z-[1] flex flex-col h-screen overflow-hidden justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 pointer-events-none">
        <div className="max-w-xl relative z-10 pointer-events-auto">
          {/* Blurred intro label */}
          <div className="pointer-events-none select-none mb-5 sm:mb-6 text-white blur-[4px] font-normal leading-[1.3] text-[clamp(18px,4vw,26px)]">
            Hey there, meet A.R.I.A,<br />
            Mainframe&apos;s Adaptive Response Interface Agent
          </div>

          {/* Typewriter text */}
          <p className="text-white mb-5 sm:mb-6 font-normal leading-[1.35] text-[clamp(18px,4vw,26px)] min-h-[54px]">
            {displayed}
            {!done && (
              <span className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink"></span>
            )}
          </p>

          {/* Action pill buttons */}
          <div
            className="flex flex-wrap gap-y-1"
            style={{
              opacity: showButtons ? 1 : 0,
              transform: showButtons ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {["Pitch us an idea", "Come work here", "Send a brief hello", "See how we operate"].map(
              (label) => (
                <button
                  key={label}
                  className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200"
                >
                  {label}
                </button>
              )
            )}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center bg-transparent text-white border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 group"
            >
              <span>
                Reach us: <span className="underline underline-offset-1">hello@mainframe.co</span>
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-black"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
