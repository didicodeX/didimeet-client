// shared/components/Navbar.tsx
import { Link } from "react-router-dom";

import { fetchMe, useAuthStore, User } from "../../features/auth";
import { useQuery } from "@tanstack/react-query";
import Button from "./Button";
import CircleButton from "./CircleButton";

export default function Navbar() {
  const { user, setUser } = useAuthStore();

  const { isLoading } = useQuery<User>({
    queryKey: ["me"],
    queryFn: async () => {
      const data = await fetchMe();
      setUser(data); // ← plus besoin de useEffect
      return data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <header className="p-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">
        <img src="img/Logo3.png" alt="" />
      </Link>
      <nav className="space-x-4">
        {isLoading ? null : user ? (
          <div className="flex gap-0.5 items-center">
            <Button variant="none">
              <img src="/icons/bell.svg" alt="" />
            </Button>
            <CircleButton>
              <img src="/icons/user.svg" alt="" />
            </CircleButton>
          </div>
        ) : (
          <>
            <Button variant="outline" to="/login">Log in</Button>
            <Button to="/signup">Sign up</Button>
          </>
        )}
      </nav>
    </header>
  );
}
