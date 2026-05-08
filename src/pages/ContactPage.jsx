import { BadgeCheck, Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import Button from "../components/ui/Button/Button";
import img from "../assets/ContactPage/sss.png";

export default function ContactPage() {
  return (
    <div className="container m-auto flex flex-col gap-12 pt-16">
      <div>
        <h1 className="font-bold text-[36px]">Get in Touch</h1>
        <p className="text-[#3D4947]">
          Whether you have a question about our services, need to schedule an{" "}
          <br />
          appointment, or require technical support, our team is ready to assist
          you.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full justify-items-center">
        <div className="border border-[#BCC9C6] rounded-xl p-6">
          {/* <div className="bg-[#008378] rounded-lg p-4 text-white flex flex-col gap-3">
            <span className="flex gap-3">
              <BadgeCheck />
              Message Sent Successfully
            </span>
            <p>
              Thank you for reaching out. A clinic representative will contact
              you shortly.
            </p>
            </div> */}
          <div className="flex gap-8">
            <form className="flex flex-col gap-6 w-full">
              <div className="grid grid-cols-2 w-186.25 gap-3">
                <div className="flex flex-col">
                  <span className=" text-black">Full Name</span>
                  <input
                    type="text"
                    className="border bg-[#F0F5F2] rounded-lg h-10 placeholder:p-2 placeholder:text-[#6e6e6e88] border-[#BCC9C6]"
                    placeholder="Ahmed aly"
                  />
                </div>
                <div className="flex flex-col">
                  <span className=" text-black">Email</span>
                  <input
                    type="email"
                    className="border bg-[#F0F5F2] rounded-lg h-10 placeholder:p-2 placeholder:text-[#6e6e6e88] border-[#BCC9C6]"
                    placeholder="export@smartclinic.com"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className=" text-black">subject</span>
                <input
                  type="url"
                  className="border bg-[#F0F5F2] rounded-lg h-10 placeholder:p-2 placeholder:text-[#6e6e6e88] border-[#BCC9C6]"
                />
              </div>
              <div className="flex flex-col">
                <span className=" text-black">Message</span>
                <textarea
                  className="border bg-[#F0F5F2] rounded-lg placeholder:p-2 placeholder:text-[#6e6e6e88] border-[#BCC9C6]"
                  placeholder="How can we help you today?"
                />
              </div>
              <Button className="bg-[#00685F] text-white flex w-fit gap-2">
                <SendHorizontal />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="p-8 flex flex-col gap-6 rounded-lg border border-[#BCC9C6] w-fit">
          <h2 className="border-b font-semibold text-[20px] border-[#BCC9C6]">
            Contact Information
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <span className="bg-[#EAEFED] rounded-lg p-2 text-[#00685F] flex h-fit w-fit">
                <MapPin />
              </span>
              <div>
                <h3 className="font-semibold">Main Clinic</h3>
                <p className="text-[#3D4947]">
                  123 Healthway Drive, Suite 400 <br />
                  Medical District, Cityville 90210
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#EAEFED] rounded-lg p-2 text-[#00685F] flex h-fit w-fit">
                <Phone />
              </span>
              <div>
                <h3 className="font-semibold">Phone Support</h3>
                <p className="text-[#3D4947]">
                  1-800-SMART-MED <br />
                  Mon-Fri, 8am - 6pm EST
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#EAEFED] rounded-lg p-2 text-[#00685F] flex h-fit w-fit">
                <Mail />
              </span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-[#3D4947]">
                  support@smartclinic.com <br />
                  appointments@smartclinic.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
