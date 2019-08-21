import React from 'react';
import TextButton from './components/Buttons/TextButton';

/**
 * Detemines what type of user interaction has occured.
 */
import whatInput from 'what-input';
whatInput.ask();

const App: React.FC = () => {
  return (
    <>
      <TextButton
        id="button1"
        label="Primary button"
        buttonType="primary"
        onClick={() => console.log('clicked')}
      />
      <br />
      <br />
      <TextButton
        id="button2"
        label="Seondary button"
        buttonType="secondary"
        onClick={() => console.log('clicked')}
      />
      <br />
      <br />
      <TextButton
        id="button3"
        label="Disabled primary button"
        buttonType="primary"
        onClick={() => console.log('clicked')}
        disabled
      />
    </>
  );
};

export default App;
