import React from 'react';

import { ThemeConsumer } from '../context/ThemeContext';

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <ThemeConsumer>
      {(theme: any) => (
        <div
          style={{ width: `${progress}%` }}
          className={theme['progress-bar']}
        />
      )}
    </ThemeConsumer>
  );
};

export default ProgressBar;
