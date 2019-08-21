import React from 'react';
import { action } from '@storybook/addon-actions';
import TextButton from '../components/Buttons/TextButton';

export default {
  title: 'Button',
};

export const text = () =>
  <TextButton
    id="button1"
    label="Primary button"
    buttonType="primary"
    onClick={action('clicked')}
  />
;
