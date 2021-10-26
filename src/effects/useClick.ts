import useEventListener from '@use-it/event-listener';

export default (forwards: () => void) => {
  useEventListener('onclick', (event) => {
    forwards();
  });
};
