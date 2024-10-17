import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <h1>Welcome to the Email Marketing Application</h1>
      <p>Your all-in-one solution for managing email campaigns.</p>
      <div style={{ marginBottom: '20px' }}>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
          <li>
            <Link href="/auth/signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/templates">View Templates</Link>
          </li>
          <li>
            <Link href="/templates/new">Create New Template</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Featured Templates</h2>
        {/* Placeholder for featured templates or any other content */}
        <p>Check out our best practices for email marketing!</p>
      </div>
    </MainLayout>
  );
};

export default HomePage;