import NxWelcome from './nx-welcome';
import { Header } from '@nxdev-course/store/ui-shared';

export function App() {
  return (
    <>
      <Header />
      <NxWelcome title="hello" />
    </>
  );
}

export default App;
