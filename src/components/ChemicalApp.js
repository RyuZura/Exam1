import React from 'react';
import AddChemicalForm from './AddChemicalForm';
import ChemicalList from './ChemicalList';
import SearchChemical from './SearchChemical';

const ChemicalApp = () => {
  return (
    <div>
      <h1>Chemical Management</h1>
      <SearchChemical />
      <AddChemicalForm />
      <ChemicalList />
    </div>
  );
};

export default ChemicalApp;
