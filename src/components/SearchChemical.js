import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Input, Table } from 'reactstrap';

const SearchChemical = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const chemicals = useSelector(state => state.chemicals);

  // Lọc danh sách hóa chất dựa trên từ khóa tìm kiếm
  const filteredChemicals = chemicals.filter(chemical =>
    chemical.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Input 
        type="text" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        placeholder="Search by name" 
        className="mb-3"
      />
      {/* Hiển thị danh sách hợp chất chỉ khi có từ khóa tìm kiếm */}
      {searchTerm && (
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Formula</th>
            </tr>
          </thead>
          <tbody>
            {filteredChemicals.length > 0 ? (
              filteredChemicals.map(chemical => (
                <tr key={chemical.id}>
                  <td>{chemical.id}</td>
                  <td>{chemical.name}</td>
                  <td>{chemical.formula}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No results found</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default SearchChemical;
