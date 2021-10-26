import React, { useState } from 'react';
import classnames from 'classnames';
import { ThemeConsumer } from '../context/ThemeContext';
import useEventListener from '@use-it/event-listener';

type Props = {
  title?: string;
  subtext?: React.Component | string;
  children: React.Component | string;
  footer?: React.Component | string;
  animate?: boolean;
  notes?: string;
};

let hasSeenFirstNote = false;

const Slide = ({
  title,
  subtext,
  children,
  footer,
  animate = true,
  notes = '',
}: Props) => {
  const [showNotes, setShowNotes] = useState(false);

  useEventListener('keydown', (event: any) => {
    const { keyCode } = event;
    const isN = keyCode === 78;

    if (notes) setShowNotes(showNotes && isN ? false : true);

    if (isN) {
      hasSeenFirstNote = true;
    }
  });

  const getNoteIcon = (theme: any) => (
    <div className={theme['has-notes']}>
      📣 {!hasSeenFirstNote && <span>Press n for notes</span>}
    </div>
  );

  return (
    <ThemeConsumer>
      {(theme: any) => (
        <div className={classnames(theme.slide, { [theme.animate]: animate })}>
          {title && <h1>{title}</h1>}

          {subtext && <div className={theme.subtext}>{subtext}</div>}

          {children}

          {footer ? footer : null}

          {showNotes && <div className={theme.notes}>{notes}</div>}

          {notes && getNoteIcon(theme)}
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Slide;
