export default function InputSempil({ text, type, placeholder ,className }) {
  return (
    <div className={`${className} flex flex-col`}>
      <span className=" text-black">{text}</span>
      <input
        type={type}
        className="border bg-[#F0F5F2] rounded-lg h-10 p-2 placeholder:p-2 placeholder:text-[#6e6e6e88] border-[#BCC9C6]"
        placeholder={placeholder}
      />
    </div>
  );
}
