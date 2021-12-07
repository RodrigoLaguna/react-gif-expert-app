import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';


/**==========================================
 **          COMPONENTE INPUT
=============================================**/

export const AddCategory = ({ setCategories }) => {
  
  const [inputValue, setInputValue] = useState('');

  //* Función para detectar cambios en el input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //* Función para agregar valores al estado del componente  
  const handleSubmit = (event)=> {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories( catgs => [ inputValue,  ...catgs ] );
      setInputValue('');
    }
  }
  
  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
};


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}


