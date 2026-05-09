import { ArrowLeft, Hospital, Mail, MailCheck } from "lucide-react";

export default function ForgotPassword() {
  return (
    <main className="min-h-screen bg-[#f3faf7] px-4 py-8 text-[#171d1c]">
      <section className="mx-auto flex w-full max-w-105 flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#008b80] text-white">
          <Hospital className="h-6 w-6" aria-hidden="true" />
        </div>

        <h1 className="mt-5 text-center text-3xl font-bold text-[#00746a]">
          Smart Clinic
        </h1>

        <div className="mt-8 w-full overflow-hidden rounded-lg border border-[#bcc9c6] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.12)]">
          <div className="h-1 bg-[#00776d]" />

          <form className="px-8 py-8">
            <h2 className="text-2xl font-semibold tracking-normal">
              Forgot Password
            </h2>
            <p className="mt-3 max-w-[320px] text-base leading-6 text-[#4f5c5a]">
              Enter your email address and we'll send you instructions to reset
              your password.
            </p>

            <label
              className="mt-6 block text-sm font-semibold"
              htmlFor="forgot-password-email"
            >
              Email Address
            </label>
            <div className="mt-2 flex h-11 items-center gap-2 rounded-md border border-[#bcc9c6] bg-[#f0f5f2] px-2 text-[#7a8784]">
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              <input
                id="forgot-password-email"
                type="email"
                placeholder="name@example.com"
                className="h-full min-w-0 flex-1 bg-transparent text-base text-[#171d1c] outline-none placeholder:text-[#7a8784]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex h-10 w-full items-center justify-center rounded-md bg-[#00776d] px-4 text-sm font-semibold text-white transition hover:bg-[#00685f] focus:outline-none focus:ring-2 focus:ring-[#00776d] focus:ring-offset-2"
            >
              Send Reset Link
            </button>
          </form>
        </div>

        <div className="mt-8 w-full rounded-lg border border-[#bcc9c6] bg-white px-8 py-8 text-center shadow-[0_1px_2px_rgba(15,23,42,0.12)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#008b80] text-white">
            <MailCheck className="h-6 w-6" aria-hidden="true" />
          </div>

          <h2 className="mt-5 text-xl font-semibold">Check your email</h2>
          <p className="mt-3 text-sm leading-5 text-[#4f5c5a]">
            If an account exists for this email, you will receive reset
            instructions shortly.
          </p>

          <a
            href="/login"
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#00746a] transition hover:text-[#005c55]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Login
          </a>
        </div>
      </section>
    </main>
  );
}
