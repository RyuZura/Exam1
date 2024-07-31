import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addChemical } from '../redux/chemicalSlice';

const AddChemicalForm = () => {
  const [name, setName] = useState('');
  const [formula, setFormula] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && formula) {
      const newChemical = {
        id: Date.now(),
        name,
        formula,
      };
      dispatch(addChemical(newChemical));
      setName('');
      setFormula('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <h1>Chemical List</h1>
        <Label for="chemicalName">Name</Label>
        <Input
          type="text"
          id="chemicalName"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="chemicalFormula">Formula</Label>
        <Input
          type="text"
          id="chemicalFormula"
          value={formula}
          onChange={e => setFormula(e.target.value)}
        />
      </FormGroup>
      <Button color="primary">Add Chemical</Button>
    </Form>
  );
};

export default AddChemicalForm;
