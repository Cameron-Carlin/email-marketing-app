import AuthForm from '../../../components/AuthForm';
import MainLayout from '../../../components/layouts/MainLayout';

const SignupPage = () => {
  return (
    <MainLayout>
      <h1>Sign Up</h1>
      <AuthForm type="signup" />
    </MainLayout>
  );
};

export default SignupPage;