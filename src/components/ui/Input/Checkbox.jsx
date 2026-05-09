export default function Checkbox({ text }) {
  return (
    <div className="flex items-center">
      <input type="checkbox" className="mr-2 checkbox checkbox-success  " />
      <span className="">{text}</span>
    </div>
  );
}
