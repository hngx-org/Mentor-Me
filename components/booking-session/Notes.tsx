// src/components/NotesTextarea.tsx
import React from 'react';

interface NotesTextareaProps {
  notes: string;
  onChange: (value: string) => void;
}

const NotesTextarea: React.FC<NotesTextareaProps> = ({ notes, onChange }) => {
  return (
    <div className="w-full">
    <label htmlFor="notes" className="font-Hanken font-bold text-lg">
      Add Notes
    </label>
    <input
      id="notes"
      name="notes"
      className=" p-2 w-full focus:outline-none border border-Neutra30 rounded-md"
      placeholder=".ask questions, share resources"
      value={notes}
      onChange={(e) => onChange(e.target.value)}
      
    />
  </div>
  );
};

export default NotesTextarea;
