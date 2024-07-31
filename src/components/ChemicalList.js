import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';
import { removeChemical, updateChemical } from '../redux/chemicalSlice';

const ChemicalList = () => {
  const chemicals = useSelector(state => state.chemicals);
  const dispatch = useDispatch();
  
  const [editingChemical, setEditingChemical] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [name, setName] = React.useState('');
  const [formula, setFormula] = React.useState('');

  const toggleModal = () => setModal(!modal);

  const handleRemove = id => {
    dispatch(removeChemical(id));
  };

  const handleEdit = chemical => {
    setName(chemical.name);
    setFormula(chemical.formula);
    setEditingChemical(chemical);
    toggleModal();
  };

  const handleUpdateChemical = () => {
    if (editingChemical) {
      dispatch(updateChemical({ id: editingChemical.id, name, formula }));
      toggleModal();
    }
  };

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Formula</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {chemicals.map(chemical => (
            <tr key={chemical.id}>
              <td>{chemical.id}</td>
              <td>{chemical.name}</td>
              <td>{chemical.formula}</td>
              <td>
                <Button color="warning" onClick={() => handleEdit(chemical)}>Edit</Button>
                <Button color="danger" onClick={() => handleRemove(chemical.id)} className="ml-2">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {editingChemical && (
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Edit Chemical</ModalHeader>
          <ModalBody>
            <FormGroup>
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
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdateChemical}>Update</Button>
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

export default ChemicalList;
