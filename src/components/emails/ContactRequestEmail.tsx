import * as React from 'react';

interface ContactRequestEmailProps {
  name: string;
  agency: string;
  email: string;
  phone?: string;
  projectDescription: string;
}

export const ContactRequestEmail: React.FC<Readonly<ContactRequestEmailProps>> = ({
  name,
  agency,
  email,
  phone,
  projectDescription,
}) => (
  <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
    <h1 style={{ color: '#0A2540' }}>New RFP Request from {name}</h1>
    <p>A new request for proposal has been submitted through the website contact form.</p>
    <hr />
    <h2>Contact Details:</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Agency/Organization:</strong> {agency}</li>
      <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
      {phone && <li><strong>Phone:</strong> {phone}</li>}
    </ul>
    <h2>Project Description:</h2>
    <p style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>{projectDescription}</p>
  </div>
);
