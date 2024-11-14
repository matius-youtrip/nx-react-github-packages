import { useAtomValue, useSetAtom } from 'jotai';
import { counterAtom } from './atom';

const IncreaseButton = () => {
  const setAtom = useSetAtom(counterAtom);

  return (
    <button onClick={() => setAtom((prevCount) => prevCount + 1)}>
      Increase
    </button>
  );
};

export function HelloWorld() {
  const count = useAtomValue(counterAtom);

  return (
    <div>
      <p>Hello World! Count is: {count}</p>
      <IncreaseButton />
    </div>
  );
}

export default HelloWorld;
