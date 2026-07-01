// Consistent max-width + horizontal padding wrapper.
export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
