import React, {useState} from 'react';

function App () {
  const [tech, setTech] = useState (['ReactJS', 'ReactNative']);
  const [newTech, setNewTech] = useState (['']);

  function handleAdd () {
    setTech ([...tech, newTech]);
    setNewTech ('');
  }

  return (
    <nav>
      <ul>
        {tech.map (t => <li key={t}>{t}</li>)}
      </ul>
      <input value={newTech} onChange={e => setNewTech (e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </nav>
  );
}

export default App;
