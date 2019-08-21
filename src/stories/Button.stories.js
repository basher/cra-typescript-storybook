import React from 'react';
import TextButton from '../components/Buttons/TextButton';

export default {
  title: 'Button',
};

export const text = () =>
  <TextButton
    id="button1"
    label="Primary button"
    buttonType="primary"
    onClick={() => console.log('clicked')}
  />
;
