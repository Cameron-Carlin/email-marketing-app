import MainLayout from '../../../components/layouts/MainLayout';
import TemplateForm from '../../../components/TemplateForm';

const EditTemplatePage = ({ params }: { params: { id: string } }) => {
  return (
    <MainLayout>
      <h1>Edit Template: {params.id}</h1>
      <TemplateForm templateId={params.id} />
    </MainLayout>
  );
};

export default EditTemplatePage;