import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
}

export default function InputField({ label, error, ...rest }: InputFieldProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input {...rest} className="w-full px-4 py-2 border rounded" />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  )
}
