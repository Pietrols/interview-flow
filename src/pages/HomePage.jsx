import { Link } from 'react-router';

function HomePage() {
  return (
    <div className='homepage-container flex flex-col items-center justify-center min-h-screen px-4 w-screen'>
      <h2 className='text-3xl font-bold mb-4 text-center'>
        Welcome to Interview Prep 101
      </h2>
      <p className='max-w-xl mx-auto mb-6 text-lg text-gray-700 text-center'>
        This app is designed to help you prepare for job interviews by providing
        curated questions, role-based practice, and a summary of your progress.
        Explore different roles, answer questions, and track your readiness for
        your next big opportunity!
      </p>
      <Link
        to='/roles'
        className='inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200'>
        Roles
      </Link>
    </div>
  );
}

export default HomePage;
