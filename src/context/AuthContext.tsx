// src/context/AuthContext.tsx
import axios, { AxiosError } from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

// Step 1: Define the interfaces for your types
interface IUser {
  id: string;
  fullName: string;
  email: string;
  profileImg?: string;
  role: string;
  isConnectAccount: boolean;
}

interface IAuthContext {
  token: string | null;
  user: IUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: IUser) => void;
  logout: () => void;
}

// Define the shape of a successful API response
interface AuthResponse {
  message: string;
  user: IUser;
}

// Define the shape of an error API response
interface ErrorResponse {
  message: string;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Start true on app load

  useEffect(() => {
    const validateTokenOnLoad = async () => {
      const storedToken = localStorage.getItem("auth_token");

      if (storedToken) {
        try {
          const response = await axios.get<AuthResponse>(
            `${BASE_URL}/api/shopFloor/check-token`,
            {
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            }
          );

          const data = response.data;
          setUser(data.user);
          setToken(storedToken);
        } catch (error) {
          // Type guard to check if it's an Axios error
          if (axios.isAxiosError(error)) {
            const errorData = error.response?.data as ErrorResponse;
            console.log("errorDataerrorData", errorData);

            // Use toast.error for errors
            if (errorData?.message) {
              toast.error(errorData.message);
            } else {
              toast.error("Session expired or invalid. Please log in again.");
            }
          } else {
            console.error("An unexpected error occurred:", error);
            toast.error("An unexpected error occurred.");
          }

          // Clean up on any failure
          localStorage.removeItem("auth_token");
          setUser(null);
          setToken(null);
        }
      }

      // We're done checking, whether it succeeded or failed
      setIsLoading(false);
    };

    validateTokenOnLoad();
  }, []);

  const login = (newToken: string, userData: IUser) => {
    localStorage.setItem("auth_token", newToken);
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
    setUser(null);
  };

  // Step 3: Provide the complete value to the context
  // Also add a derived `isAuthenticated` boolean for convenience
  const value = {
    token,
    user,
    isLoading,
    isAuthenticated: !!user, // true if user is not null, false otherwise
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Step 4: Create a robust `useAuth` hook that checks for context existence
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
