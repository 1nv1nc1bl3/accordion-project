import { useState } from 'react';
import Accordion from './components/Accordion';

function App() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Accordion selected={selected} setSelected={setSelected} />
        </>
    );
}

export default App;
