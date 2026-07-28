import { createContext, useContext, useEffect, useState } from "react";
import { getToken, getUser, removeAuth } from "@/utils/storage";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = getToken();
    const storedUser = getUser();

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }

    setLoading(false);
  }, []);

  const login = (token, user) => {
    localStorage.setItem("kartik_ai_token", token);

    localStorage.setItem("kartik_ai_user", JSON.stringify(user));

    setToken(token);

    setUser(user);
  };

  const logout = () => {
    removeAuth();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
