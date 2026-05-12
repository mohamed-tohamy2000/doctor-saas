import ErrorActions from "../components/ErrorActions";
import ErrorFooter from "../components/ErrorFooter";
import ErrorHeader from "../components/ErrorHeader";
import NotFoundIllustration from "../components/NotFoundIllustration";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4fbf8] text-slate-600">
      <ErrorHeader />
      <main className="flex flex-1 items-center justify-center px-5 py-14">
        <section className="flex w-full max-w-xl flex-col items-center text-center">
          <NotFoundIllustration />

          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff5b55]">
            404
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            It looks like this appointment slot is empty. The page you are looking for might have
            been removed, had its name changed, or is temporarily unavailable.
          </p>
          <ErrorActions />
        </section>
      </main>
      <ErrorFooter />
    </div>
  );
}
