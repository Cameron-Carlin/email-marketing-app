import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Template } from '../types/template'; // Adjust the import path accordingly

const TemplateList: React.FC = () => {
  const [templates, setTemplates] = useState<Template[]>([]); // Use the defined Template type

  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await fetch('/api/templates');
      if (res.ok) {
        const data: Template[] = await res.json(); // Specify the expected data type
        setTemplates(data);
      } else {
        console.error('Failed to fetch templates');
      }
    };

    fetchTemplates();
  }, []);

  return (
    <div>
      <h2>Your Templates</h2>
      <ul>
        {templates.map(template => (
          <li key={template._id}>
            <Link href={`/templates/${template._id}`}>
              {template.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/templates/new">Create New Template</Link>
    </div>
  );
};

export default TemplateList;