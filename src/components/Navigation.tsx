import React from 'react';

import { ThemeConsumer } from '../context/ThemeContext';

type Props = {
  forwards: () => void;
  backwards: () => void;
};

const Navigation = ({ forwards, backwards }: Props) => (
  <ThemeConsumer>
    {(theme: any) => (
      <div className={theme.navigation}>
        <button onClick={backwards} className={theme['left-arrow']}>
          {'<'}
        </button>
        <button onClick={forwards} className={theme['right-arrow']}>
          {'>'}
        </button>
      </div>
    )}
  </ThemeConsumer>
);

export default Navigation;
