import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import Cookies from "js-cookie";
import axios from 'axios';

interface User {
  email: string;
  email_verified: number;
  name: string;
  image: string;
  id: string;
}

export interface AuthContext {
  isAuthenticated: boolean;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resendVerification: (email: string) => Promise<void>;
  recoverPassword: (email: string) => Promise<void>;
  resetPassword: (code: string, newPassword: string) => Promise<void>;
  verifyEmail: (email: string, code: string) => Promise<void>;
  user: User | null;
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const signup = useCallback(async (email: string, password: string) => {
    const options = {
      method: "POST",
      url: "/api/auth/signup",
      headers: { "Content-Type": "application/json" },
      data: { email, password },
      withCredentials: true,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const options = {
      method: "POST",
      url: "/api/auth/login",
      headers: { "Content-Type": "application/json" },
      data: { email, password },
      withCredentials: true,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      setUser(data.user); // Assuming your API returns the user object or relevant info
      Cookies.set("auth_session", data.auth_session, { sameSite: "None", secure: true });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const logout = useCallback(async () => {
    const options = {
      method: "GET",
      url: "/api/auth/logout",
      withCredentials: true,
    };

    try {
      await axios.request(options);
      setUser(null); // Clear user state upon logout
      Cookies.remove("auth_session"); // Remove the session cookie
    } catch (error) {
      console.error(error);
    }
  }, []);

  const resendVerification = useCallback(async (email: string) => {
    const options = {
      method: "POST",
      url: "/api/auth/resend-verification",
      headers: { "Content-Type": "application/json" },
      data: { email },
      withCredentials: true,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const recoverPassword = useCallback(async (email: string) => {
    const options = {
      method: "POST",
      url: "/api/auth/password-recovery",
      headers: { "Content-Type": "application/json" },
      data: { email },
      withCredentials: true,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const resetPassword = useCallback(async (code: string, password: string) => {
    const options = {
      method: "POST",
      url: "/api/auth/password-reset",
      headers: { "Content-Type": "application/json" },
      data: { code, password },
      withCredentials: true,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const verifyEmail = useCallback(async (email: string, code: string) => {
    const options = {
      method: "POST",
      url: "/api/auth/verify-email",
      headers: { "Content-Type": "application/json" },
      data: { email, code },
      withCredentials: true,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      setUser(data.user); // Assuming your API returns the user object or relevant info
      Cookies.set("auth_session", data.auth_session, { sameSite: "None", secure: true });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    // Check if a user is already authenticated on initial load
    const sessionCookie = Cookies.get("auth_session");
    if (sessionCookie) {
      // Optionally fetch user info from the server to validate the session
      axios
        .get("/me", { withCredentials: true })
        .then((response) => {
          const { user } = response.data;
          setUser(user);
        })
        .catch(() => {
          Cookies.remove("auth_session");
        });
    }
  }, []);

  const contextValue: AuthContext = {
    isAuthenticated,
    user,
    signup,
    login,
    logout,
    resendVerification,
    recoverPassword,
    resetPassword,
    verifyEmail,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
