import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoaderCircle, Plus } from "lucide-react";
import { registerSchema } from "../schemas/registerSchema";

const initialFormValues = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  terms: true,
};

function getPasswordStrength(password) {
  const rules = [
    password.length >= 8,
    /\d/.test(password),
    /[A-Za-z]/.test(password) && /[^A-Za-z0-9]/.test(password),
  ];
  const score = rules.filter(Boolean).length;

  if (score === 3) {
    return { label: "Strong password", helper: "8+ chars, 1 number", score };
  }

  if (score === 2) {
    return { label: "Medium password", helper: "Add a special character", score };
  }

  return { label: "Weak password", helper: "Use 8+ chars and 1 number", score };
}

export default function Registerpage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3faf8] px-4 py-10 text-slate-700">
      <section className="w-full max-w-113.75 rounded-sm bg-white px-8 py-9 shadow-sm sm:px-9">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex size-8 items-center justify-center rounded-md bg-primary text-white">
            <Plus size={22} strokeWidth={3} />
          </div>

          <h1 className="text-[25px] font-semibold leading-tight text-slate-900">
            Create an Account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Join Smart Clinic Booking System today.
          </p>
        </div>

        <Formik
          initialValues={initialFormValues}
          validationSchema={registerSchema}
          onSubmit={(_, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 1500);
          }}
        >
          {({ values, isSubmitting }) => {
            const passwordStrength = getPasswordStrength(values.password);
            const showPasswordStrength = values.password.length > 0;

            return (
              <Form className="space-y-4" noValidate>
                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Dr. Jane Doe"
                    className="h-10 w-full rounded border border-slate-300 bg-[#eef6f3] px-4 text-[15px] text-slate-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="p"
                    className="mt-1 text-xs font-medium text-red-500"
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane.doe@clinic.com"
                    className="h-10 w-full rounded border border-slate-300 bg-[#eef6f3] px-4 text-[15px] text-slate-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="mt-1 text-xs font-medium text-red-500"
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+2010 0000-0000"
                    className="h-10 w-full rounded border border-slate-300 bg-[#eef6f3] px-4 text-[15px] text-slate-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="mt-1 text-xs font-medium text-red-500"
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Tr0ub4dore&3"
                    className="h-10 w-full rounded border border-slate-300 bg-[#eef6f3] px-4 text-[15px] text-slate-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                  {showPasswordStrength && (
                    <>
                      <div className="mt-2 grid grid-cols-3 gap-1">
                        {[1, 2, 3].map((bar) => (
                          <span
                            key={bar}
                            className={`h-1 rounded-full ${
                              passwordStrength.score >= bar
                                ? "bg-primary"
                                : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs font-semibold">
                        <span className="text-primary">
                          {passwordStrength.label}
                        </span>
                        <span className="text-slate-500">
                          {passwordStrength.helper}
                        </span>
                      </div>
                    </>
                  )}
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="mt-1 text-xs font-medium text-red-500"
                  />
                </div>

                <div>
                  <label
                    className="mb-1.5 block text-xs font-semibold text-slate-700"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Tr0ub4dore&3"
                    className="h-10 w-full rounded border border-slate-300 bg-[#eef6f3] px-4 text-[15px] text-slate-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="mt-1 text-xs font-medium text-red-500"
                  />
                </div>

                <label className="flex items-start gap-2 pt-1 text-sm text-slate-600">
                  <Field
                    name="terms"
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm mt-0.5 rounded"
                  />
                  <span>
                    I agree to the{" "}
                    <a
                      className="font-medium text-primary hover:underline"
                      href="#"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      className="font-medium text-primary hover:underline"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                <ErrorMessage
                  name="terms"
                  component="p"
                  className="-mt-2 text-xs font-medium text-red-500"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#519f98] text-sm font-bold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {isSubmitting && (
                    <LoaderCircle className="animate-spin" size={20} />
                  )}
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </button>
              </Form>
            );
          }}
        </Formik>

        <p className="mt-9 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <a className="font-bold text-primary hover:underline" href="#">
            Login
          </a>
        </p>
      </section>
    </main>
  );
}
