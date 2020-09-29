import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './style';

function FieldForm({
  type, name, onChange, value, label,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';
  const hasValue = Boolean(value);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>

        <Input
          as={tag}
          value={value}
          id={fieldId}
          type={type}
          name={name}
          onChange={onChange}
          hasValue={hasValue}
        />

        <span>
          {label}
          :
        </span>

      </Label>
    </FormFieldWrapper>
  );
}

FieldForm.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FieldForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FieldForm;
