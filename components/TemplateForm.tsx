import { useState } from 'react';

interface TemplateFormProps {
  templateId?: string; // Optional for editing existing templates
}

const TemplateForm: React.FC<TemplateFormProps> = ({ templateId }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch(`/api/templates${templateId ? `/${templateId}` : ''}`, {
      method: templateId ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    if (!res.ok) {
      // Handle error (e.g., display message)
      console.error(data.message);
    } else {
      // Handle successful creation/editing (e.g., redirect to template list)
      console.log(data.message);
      // Redirect logic can be added here
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Content</label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">{templateId ? 'Update Template' : 'Create Template'}</button>
    </form>
  );
};

export default TemplateForm;