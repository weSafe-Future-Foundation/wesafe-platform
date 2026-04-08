"use client";

import { useState } from "react";
import Link from "next/link";

type AuthTab = "email" | "phone";

export default function LoginPage() {
  const [tab, setTab] = useState<AuthTab>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpSent, setOtpSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      // TODO: signIn("credentials", { email, password, redirect: false })
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Invalid email or password.");
        setStatus("error");
        return;
      }
      window.location.href = "/community/dashboard";
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(phone)) {
      setErrorMsg("Enter a valid 10-digit phone number.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Failed to send OTP.");
        setStatus("error");
        return;
      }
      setOtpSent(true);
      setStatus("idle");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: phone, otp: otpCode, method: "phone" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Invalid OTP.");
        setStatus("error");
        return;
      }
      window.location.href = "/community/dashboard";
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`login-otp-${index + 1}`)?.focus();
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#062550] via-blue-800 to-[#062550] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Welcome Back
          </h1>
          <p className="mt-3 text-blue-200">
            Log in to your weSafe Community account.{" "}
            <Link
              href="/community/register"
              className="text-green-300 hover:text-green-200 font-semibold underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Google Sign In */}
        <button
          className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all font-semibold text-gray-700"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button
            onClick={() => { setTab("email"); setErrorMsg(""); setOtpSent(false); }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === "email"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {"\u{2709}\u{FE0F}"} Email
          </button>
          <button
            onClick={() => { setTab("phone"); setErrorMsg(""); }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === "phone"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {"\u{1F4F1}"} Phone OTP
          </button>
        </div>

        {/* ── Email Tab ── */}
        {tab === "email" && (
          <form onSubmit={handleEmailLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrorMsg(""); setStatus("idle"); }}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrorMsg(""); setStatus("idle"); }}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
              <div className="text-right mt-1">
                <Link
                  href="/community/forgot-password"
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                {errorMsg}
              </div>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}

        {/* ── Phone Tab ── */}
        {tab === "phone" && !otpSent && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Phone Number
              </label>
              <div className="flex gap-2">
                <span className="flex items-center px-3 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-600">
                  +91
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                    setErrorMsg("");
                    setStatus("idle");
                  }}
                  placeholder="10-digit mobile number"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                {errorMsg}
              </div>
            )}
            <button
              onClick={handleSendOtp}
              disabled={status === "loading" || phone.length !== 10}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending OTP..." : "Send OTP"}
            </button>
          </div>
        )}

        {tab === "phone" && otpSent && (
          <div className="text-center space-y-5">
            <p className="text-gray-600">
              Enter the 6-digit code sent to{" "}
              <strong>+91 {phone}</strong>
            </p>
            <div className="flex justify-center gap-3">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`login-otp-${i}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !digit && i > 0) {
                      document.getElementById(`login-otp-${i - 1}`)?.focus();
                    }
                  }}
                  className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              ))}
            </div>
            {errorMsg && (
              <p className="text-red-500 text-sm">{errorMsg}</p>
            )}
            <button
              onClick={handleVerifyOtp}
              disabled={otp.join("").length !== 6 || status === "loading"}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Verifying..." : "Verify & Log In"}
            </button>
            <button
              onClick={() => setOtpSent(false)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Change number
            </button>
          </div>
        )}

        <p className="text-center text-sm text-gray-500 mt-8">
          Don&apos;t have an account?{" "}
          <Link
            href="/community/register"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </>
  );
}
