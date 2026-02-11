import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "interview_prep_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem(STORAGE_KEY);
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Failed to load user from storage:", error);
        localStorage.removeItem(STORAGE_KEY);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  /**
   * Sign up new user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Object} Result with success status and message
   */
  const signup = useCallback((email, password) => {
    // Validate inputs
    if (!email || !password) {
      return { success: false, error: "Email and password are required" };
    }

    if (password.length < 6) {
      return {
        success: false,
        error: "Password must be at least 6 characters",
      };
    }

    // Check if user already exists
    const existingUsers = getAllUsers();
    if (existingUsers[email]) {
      return { success: false, error: "Email already registered" };
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password, // In production, this would be hashed
      createdAt: new Date().toISOString(),
    };

    // Save to users database
    existingUsers[email] = newUser;
    localStorage.setItem(
      "interview_prep_users_db",
      JSON.stringify(existingUsers),
    );

    // Set as current user
    const userSession = {
      id: newUser.id,
      email: newUser.email,
      createdAt: newUser.createdAt,
    };

    setUser(userSession);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userSession));

    return { success: true, user: userSession };
  }, []);

  /**
   * Login existing user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Object} Result with success status and message
   */
  const login = useCallback((email, password) => {
    // Validate inputs
    if (!email || !password) {
      return { success: false, error: "Email and password are required" };
    }

    // Get all users
    const existingUsers = getAllUsers();
    const foundUser = existingUsers[email];

    if (!foundUser) {
      return { success: false, error: "Invalid email or password" };
    }

    // Check password
    if (foundUser.password !== password) {
      return { success: false, error: "Invalid email or password" };
    }

    // Create session
    const userSession = {
      id: foundUser.id,
      email: foundUser.email,
      createdAt: foundUser.createdAt,
    };

    setUser(userSession);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userSession));

    return { success: true, user: userSession };
  }, []);

  /**
   * Logout current user
   */
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Helper function to get all users from localStorage
function getAllUsers() {
  try {
    const usersData = localStorage.getItem("interview_prep_users_db");
    return usersData ? JSON.parse(usersData) : {};
  } catch (error) {
    console.error("Failed to load users database:", error);
    return {};
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
