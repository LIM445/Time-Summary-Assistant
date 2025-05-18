import { useRef } from 'react';
export function useLatest(value) {
  var ref = useRef(value);
  ref.current = value;
  return ref;
}