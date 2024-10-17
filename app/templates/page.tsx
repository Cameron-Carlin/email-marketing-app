import MainLayout from '../../components/layouts/MainLayout';
import TemplateList from '../../components/TemplateList'

const TemplatePage: React.FC = () => {
  return (
    <MainLayout>
      <h1>Email Templates</h1>
      <TemplateList />
    </MainLayout>
  );
};

export default TemplatePage;