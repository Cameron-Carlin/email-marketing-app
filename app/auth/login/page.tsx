import AuthForm from '../../../components/AuthForm';
import MainLayout from '../../../components/layouts/MainLayout';

const LoginPage = () => {
  return (
    <MainLayout>
      <h1>Login</h1>
      <AuthForm type="login" />
    </MainLayout>
  );
};

export default LoginPage;