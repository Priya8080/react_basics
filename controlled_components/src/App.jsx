

import ControlledInput from './ControlledInput';
import UncontrolledInput from './UncontrolledInput';

function App() {
  return (
    <div className='container'>
      <h1>Controlled vs Uncontrolled Input</h1> 
      <ControlledInput />
      <hr />
      <UncontrolledInput />
    </div>
  );
}
export default App;
