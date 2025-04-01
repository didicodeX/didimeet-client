import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "./auth.interface";
import { useAuth } from "./useAuth";
import InputField from "../../shared/components/InputField";

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const onSubmit = (data: LoginFormValues) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
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
  );
}
