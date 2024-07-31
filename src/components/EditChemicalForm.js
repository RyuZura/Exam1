import React, { useState } from 'react';

const EditChemicalForm = ({ chemical, onClose, onUpdate }) => {
  const [name, setName] = useState(chemical.name);
  const [formula, setFormula] = useState(chemical.formula);

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(chemical.id, name, formula);
  };

  return (
    <div className="edit-chemical-form">
      <h2>Edit Chemical</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Chemical Name" 
          required 
        />
        <input 
          type="text" 
          value={formula} 
          onChange={e => setFormula(e.target.value)} 
          placeholder="Chemical Formula" 
          required 
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
      </form>
    </div>
  );
};

export default EditChemicalForm;
