"use client";

import { useState } from "react";
import Link from "next/link";

type UserRole = "STUDENT" | "COMPANY" | "VOLUNTEER" | "DONOR";
type AuthMethod = "google" | "email" | "phone";
type Step = "role" | "method" | "details" | "verify";

const roles = [
  {
    id: "STUDENT" as UserRole,
    title: "Student",
    icon: "\u{1F393}",
    desc: "Learn, compete, earn badges, and build your career",
    gradient: "from-blue-500 to-blue-600",
    border: "border-blue-200 hover:border-blue-400",
    bg: "bg-blue-50",
  },
  {
    id: "COMPANY" as UserRole,
    title: "Company",
    icon: "\u{1F3E2}",
    desc: "Recruit talent, sponsor events, and CSR partnerships",
    gradient: "from-green-500 to-green-600",
    border: "border-green-200 hover:border-green-400",
    bg: "bg-green-50",
  },
  {
    id: "VOLUNTEER" as UserRole,
    title: "Volunteer",
    icon: "\u{1F91D}",
    desc: "Mentor students, organize events, make an impact",
    gradient: "from-purple-500 to-purple-600",
    border: "border-purple-200 hover:border-purple-400",
    bg: "bg-purple-50",
  },
  {
    id: "DONOR" as UserRole,
    title: "Donor",
    icon: "\u{1F49A}",
    desc: "Support the mission, fund scholarships, drive change",
    gradient: "from-amber-500 to-orange-500",
    border: "border-amber-200 hover:border-amber-400",
    bg: "bg-amber-50",
  },
];

export default function RegisterPage() {
  const [step, setStep] = useState<Step>("role");
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    college: "",
    degree: "",
    graduationYear: "",
    companyName: "",
    designation: "",
  });
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setStep("method");
  };

  const handleMethodSelect = (method: AuthMethod) => {
    setAuthMethod(method);
    if (method === "google") {
      // Will trigger Google OAuth
      setStatus("loading");
      // TODO: signIn("google", { callbackUrl: "/community/dashboard" })
      setTimeout(() => setStatus("idle"), 1500); // placeholder
    } else {
      setStep("details");
    }
  };

  const handleSubmitDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    // Validate
    if (authMethod === "email") {
      if (!formData.name || !formData.email || !formData.password) {
        setErrorMsg("Please fill in all required fields.");
        setStatus("error");
        return;
      }
      if (formData.password.length < 8) {
        setErrorMsg("Password must be at least 8 characters.");
        setStatus("error");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMsg("Passwords do not match.");
        setStatus("error");
        return;
      }
    }
    if (authMethod === "phone") {
      if (!formData.name || !formData.phone) {
        setErrorMsg("Please fill in all required fields.");
        setStatus("error");
        return;
      }
      if (!/^\d{10}$/.test(formData.phone)) {
        setErrorMsg("Please enter a valid 10-digit phone number.");
        setStatus("error");
        return;
      }
    }

    try {
      // Step 1: Create the account
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role: selectedRole,
          authMethod,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Registration failed. Please try again.");
        setStatus("error");
        return;
      }

      // Step 2: Send OTP to phone or email
      if (authMethod === "phone" || authMethod === "email") {
        const otpRes = await fetch("/api/auth/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: authMethod === "phone" ? formData.phone : undefined,
            email: authMethod === "email" ? formData.email : undefined,
            purpose: "register",
          }),
        });
        const otpData = await otpRes.json();
        if (!otpRes.ok) {
          // Account created but OTP failed — still show verify step
          console.warn("OTP send failed:", otpData.error);
        }
      }

      setStep("verify");
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

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: authMethod === "phone" ? formData.phone : formData.email,
          otp: otpCode,
          method: authMethod,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Invalid OTP. Please try again.");
        setStatus("error");
        return;
      }
      // Redirect to dashboard
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
    // Auto-focus next
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg("");
    setStatus("idle");
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#062550] via-blue-800 to-[#062550] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-green-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Join the weSafe Community
          </h1>
          <p className="mt-3 text-blue-200 max-w-lg mx-auto">
            Create your account and start your journey. Already have an account?{" "}
            <Link
              href="/community/login"
              className="text-green-300 hover:text-green-200 font-semibold underline"
            >
              Log in
            </Link>
          </p>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {["Role", "Method", "Details", "Verify"].map((s, i) => {
              const stepOrder: Step[] = ["role", "method", "details", "verify"];
              const isActive = stepOrder.indexOf(step) >= i;
              return (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive
                        ? "bg-green-500 text-white"
                        : "bg-white/20 text-white/50"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`text-xs hidden sm:inline ${isActive ? "text-green-300" : "text-white/40"}`}
                  >
                    {s}
                  </span>
                  {i < 3 && (
                    <div
                      className={`w-8 h-0.5 ${isActive ? "bg-green-500/50" : "bg-white/10"}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* ═════════ STEP 1: SELECT ROLE ═════════ */}
        {step === "role" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              I want to join as a...
            </h2>
            <p className="text-gray-500 text-center mb-8">
              Choose your role. You can always update this later.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleSelect(role.id)}
                  className={`text-left rounded-2xl border-2 p-6 transition-all hover:shadow-lg ${role.border} ${
                    selectedRole === role.id
                      ? `${role.bg} border-2`
                      : "bg-white"
                  }`}
                >
                  <span className="text-4xl">{role.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3">
                    {role.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{role.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ═════════ STEP 2: AUTH METHOD ═════════ */}
        {step === "method" && (
          <div>
            <button
              onClick={() => setStep("role")}
              className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-flex items-center gap-1"
            >
              &larr; Change role
            </button>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              How would you like to sign up?
            </h2>
            <p className="text-gray-500 text-center mb-8">
              Joining as{" "}
              <span className="font-semibold text-gray-700">
                {roles.find((r) => r.id === selectedRole)?.title}
              </span>
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              {/* Google */}
              <button
                onClick={() => handleMethodSelect("google")}
                disabled={status === "loading"}
                className="w-full flex items-center gap-4 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all disabled:opacity-50"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="font-semibold text-gray-700">
                  Continue with Google
                </span>
              </button>

              <div className="flex items-center gap-4 my-2">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Email */}
              <button
                onClick={() => handleMethodSelect("email")}
                className="w-full flex items-center gap-4 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{"\u{2709}\u{FE0F}"}</span>
                <span className="font-semibold text-gray-700">
                  Sign up with Email
                </span>
              </button>

              {/* Phone */}
              <button
                onClick={() => handleMethodSelect("phone")}
                className="w-full flex items-center gap-4 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{"\u{1F4F1}"}</span>
                <span className="font-semibold text-gray-700">
                  Sign up with Phone OTP
                </span>
              </button>
            </div>
          </div>
        )}

        {/* ═════════ STEP 3: DETAILS FORM ═════════ */}
        {step === "details" && (
          <div>
            <button
              onClick={() => setStep("method")}
              className="text-sm text-gray-500 hover:text-gray-700 mb-6 inline-flex items-center gap-1"
            >
              &larr; Change method
            </button>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Create your account
            </h2>
            <p className="text-gray-500 text-center mb-8">
              {roles.find((r) => r.id === selectedRole)?.icon}{" "}
              {roles.find((r) => r.id === selectedRole)?.title} &middot;{" "}
              {authMethod === "email" ? "Email signup" : "Phone OTP signup"}
            </p>

            <form
              onSubmit={handleSubmitDetails}
              className="max-w-md mx-auto space-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              {/* Email (for email method) */}
              {authMethod === "email" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              )}

              {/* Phone (for phone method, or optional for email) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Phone Number{" "}
                  {authMethod === "phone" && (
                    <span className="text-red-500">*</span>
                  )}
                  {authMethod === "email" && (
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  )}
                </label>
                <div className="flex gap-2">
                  <span className="flex items-center px-3 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-600">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      updateField(
                        "phone",
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    placeholder="10-digit mobile number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required={authMethod === "phone"}
                  />
                </div>
              </div>

              {/* Password (email only) */}
              {authMethod === "email" && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => updateField("password", e.target.value)}
                      placeholder="Min 8 characters"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      minLength={8}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        updateField("confirmPassword", e.target.value)
                      }
                      placeholder="Re-enter password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>
                </>
              )}

              {/* Role-specific fields */}
              {selectedRole === "STUDENT" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        College / School
                      </label>
                      <input
                        type="text"
                        value={formData.college}
                        onChange={(e) => updateField("college", e.target.value)}
                        placeholder="Institution name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Graduation Year
                      </label>
                      <input
                        type="number"
                        value={formData.graduationYear}
                        onChange={(e) =>
                          updateField("graduationYear", e.target.value)
                        }
                        placeholder="2027"
                        min="2024"
                        max="2040"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Degree / Class
                    </label>
                    <input
                      type="text"
                      value={formData.degree}
                      onChange={(e) => updateField("degree", e.target.value)}
                      placeholder="e.g. B.Tech CSE, Class 10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </>
              )}

              {selectedRole === "COMPANY" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        updateField("companyName", e.target.value)
                      }
                      placeholder="Your company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Designation
                    </label>
                    <input
                      type="text"
                      value={formData.designation}
                      onChange={(e) =>
                        updateField("designation", e.target.value)
                      }
                      placeholder="Your role"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Error */}
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Creating account..." : "Create Account"}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-blue-500 underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-500 underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        )}

        {/* ═════════ STEP 4: VERIFY OTP ═════════ */}
        {step === "verify" && (
          <div className="max-w-md mx-auto text-center">
            <span className="text-5xl">
              {authMethod === "phone" ? "\u{1F4F1}" : "\u{2709}\u{FE0F}"}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">
              Verify your{" "}
              {authMethod === "phone" ? "phone number" : "email address"}
            </h2>
            <p className="text-gray-500 mt-2">
              We sent a 6-digit code to{" "}
              <strong>
                {authMethod === "phone"
                  ? `+91 ${formData.phone}`
                  : formData.email}
              </strong>
            </p>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-3 mt-8">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !digit && i > 0) {
                      const prev = document.getElementById(`otp-${i - 1}`);
                      prev?.focus();
                    }
                  }}
                  className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              ))}
            </div>

            {errorMsg && (
              <p className="text-red-500 text-sm mt-4">{errorMsg}</p>
            )}

            <button
              onClick={handleVerifyOtp}
              disabled={otp.join("").length !== 6 || status === "loading"}
              className="w-full mt-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Verifying..." : "Verify & Continue"}
            </button>

            <button
              onClick={async () => {
                setErrorMsg("");
                try {
                  const otpRes = await fetch("/api/auth/send-otp", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      phone: authMethod === "phone" ? formData.phone : undefined,
                      email: authMethod === "email" ? formData.email : undefined,
                      purpose: "register",
                    }),
                  });
                  if (otpRes.ok) {
                    setErrorMsg("");
                    alert("OTP resent successfully!");
                  } else {
                    const d = await otpRes.json();
                    setErrorMsg(d.error || "Failed to resend OTP.");
                  }
                } catch {
                  setErrorMsg("Failed to resend OTP.");
                }
              }}
              className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Didn&apos;t receive the code? Resend
            </button>
          </div>
        )}
      </div>
    </>
  );
}
