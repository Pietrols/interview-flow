import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../components/auth/AuthForm";

function HomePage() {
  const { isAuthenticated, user, signup, login, isLoading } = useAuth();

  const handleAuth = (email, password, isLogin) => {
    if (isLogin) {
      return login(email, password);
    } else {
      return signup(email, password);
    }
  };

  // Show auth form if not logged in
  if (!isAuthenticated) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Interview Prep 101
          </h1>
          <p className="text-lg text-gray-600">
            Master your interview skills with our comprehensive practice
            platform
          </p>
        </div>
        <AuthForm onSubmit={handleAuth} isLoading={isLoading} />
      </div>
    );
  }

  // Show dashboard if logged in
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">
          Welcome Back, {user.email}!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Ready to practice your interview skills?
        </p>

        <Link
          to="/roles"
          className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition text-lg"
        >
          Start Practicing
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Multiple Roles
          </h3>
          <p className="text-gray-600">
            Practice for various job positions and industries
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Timed Practice
          </h3>
          <p className="text-gray-600">
            Simulate real interview conditions with time tracking
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Instant Feedback
          </h3>
          <p className="text-gray-600">
            Get detailed explanations for every question
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
