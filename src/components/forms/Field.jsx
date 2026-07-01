// Shared form primitives used by the contact and consultation forms.

export function Field({ label, children, required }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-700">
        {label} {required && <span className="text-gold-600">*</span>}
      </span>
      {children}
    </label>
  );
}

const base =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-gold-400 focus:ring-2 focus:ring-gold-100";

export function Input(props) {
  return <input className={base} {...props} />;
}

export function Textarea(props) {
  return <textarea rows={4} className={`${base} resize-none`} {...props} />;
}

export function SelectField({ options, placeholder, ...props }) {
  return (
    <select className={base} defaultValue="" {...props}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
