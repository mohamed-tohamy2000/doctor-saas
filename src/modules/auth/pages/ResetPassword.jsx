import {
  ArrowLeft,
  BriefcaseMedical,
  Circle,
  CircleCheck,
  Lock,
} from "lucide-react";

export default function ResetPassword() {
  return (
    <main className="min-h-screen bg-[#f3faf7] px-4 py-28 text-[#171d1c]">
      <section className="mx-auto flex w-full max-w-115 flex-col items-center">
        <div className="flex items-center gap-2 text-[#00746a]">
          <BriefcaseMedical className="h-7 w-7 fill-[#00746a] text-[#00746a]" />
          <h1 className="text-xl font-bold">Smart Clinic Booking</h1>
        </div>

        <form className="mt-6 w-full rounded-lg border border-[#bcc9c6] bg-white px-8 py-11 shadow-[0_1px_2px_rgba(15,23,42,0.12)]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Set New Password</h2>
            <p className="mx-auto mt-3 max-w-85 text-base leading-6 text-[#4f5c5a]">
              Please create a strong, secure password for your account.
            </p>
          </div>

          <label
            className="mt-8 block text-sm font-semibold"
            htmlFor="new-password"
          >
            New Password
          </label>
          <div className="mt-2 flex h-10 items-center gap-2 rounded-md border border-[#bcc9c6] bg-[#f0f5f2] px-3 text-[#7a8784]">
            <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
            <input
              id="new-password"
              type="password"
              placeholder="Enter new password"
              className="h-full min-w-0 flex-1 bg-transparent text-base text-[#171d1c] outline-none placeholder:text-[#b8c4c1]"
            />
          </div>

          <div className="mt-3 rounded-md border border-[#bcc9c6] bg-[#f3faf7] px-4 py-4 text-sm text-[#3f4d4b]">
            <p className="mb-2 font-medium text-[#171d1c]">
              Password must contain:
            </p>
            <p className="flex items-center gap-1.5 leading-6">
              <CircleCheck
                className="h-4 w-4 shrink-0 text-[#008b80]"
                aria-hidden="true"
              />
              At least 8 characters
            </p>
            <p className="flex items-center gap-1.5 leading-6">
              <Circle
                className="h-4 w-4 shrink-0 text-[#6a7775]"
                aria-hidden="true"
              />
              One uppercase letter
            </p>
            <p className="flex items-center gap-1.5 leading-6">
              <Circle
                className="h-4 w-4 shrink-0 text-[#6a7775]"
                aria-hidden="true"
              />
              One number or symbol
            </p>
          </div>

          <label
            className="mt-6 block text-sm font-semibold"
            htmlFor="confirm-new-password"
          >
            Confirm New Password
          </label>
          <div className="mt-2 flex h-10 items-center gap-2 rounded-md border border-[#bcc9c6] bg-[#f0f5f2] px-3 text-[#7a8784]">
            <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
            <input
              id="confirm-new-password"
              type="password"
              placeholder="Confirm your new password"
              className="h-full min-w-0 flex-1 bg-transparent text-base text-[#171d1c] outline-none placeholder:text-[#b8c4c1]"
            />
          </div>

          <button
            type="submit"
            className="mt-8 flex h-11 w-full items-center justify-center rounded-md bg-[#00776d] px-4 text-sm font-semibold text-white transition hover:bg-[#00685f] focus:outline-none focus:ring-2 focus:ring-[#00776d] focus:ring-offset-2"
          >
            Reset Password
          </button>
        </form>

        <a
          href="/login"
          className="mt-6 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[#00746a] transition hover:text-[#005c55]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Login
        </a>
      </section>
    </main>
  );
}