import { useField } from '@unform/core';
import { lighten } from 'polished';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { StyledInput, ErrorText } from './styles';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledInput
        ref={inputRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        placeholderTextColor={lighten(0.25, '#0279DB')}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        error={!!error}
        {...rest}
      />
      {error && <ErrorText className="error">{error}</ErrorText>}
    </>
  );
}
export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
