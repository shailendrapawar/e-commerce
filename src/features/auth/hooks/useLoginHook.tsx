import { useState } from "react";
import type { LoginPayload } from "../auth.types";
import AuthService from "../auth.api";

const useLoginHook = (credentials: LoginPayload) => {
  const [user] = useState(null);
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  const result = AuthService.login(credentials);
  console.log(result);

  return {
    user,
    isLoading,
    error,
  };
};
export default useLoginHook;
