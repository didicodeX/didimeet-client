import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpFormValues } from "./auth.interface";
import { useAuth } from "./useAuth";
import InputField from "../../shared/components/InputField";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const { signup } = useAuth();

  const onSubmit = (data: signUpFormValues) => {
    signup(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <InputField
        label="name"
        type="name"
        {...register("name")}
        error={errors.name}
      />
      <InputField
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email}
      />

      <InputField
        label="Mot de passe"
        type="password"
        {...register("password")}
        error={errors.password}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  )
}
