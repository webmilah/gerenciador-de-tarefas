import React, { useState } from 'react';
import { TarefaProvider, useTarefas } from './context/TarefaContext';
import ListaDeTarefas from './components/ListaDeTarefas';

function MainApp() {
  const [texto, setTexto] = useState('');
  const [filtro, setFiltro] = useState('todas');
  const { dispatch } = useTarefas();

  const adicionarTarefa = () => {
    if (texto.trim()) {
      dispatch({ type: 'ADICIONAR_TAREFA', payload: texto });
      setTexto('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Gerenciador de Tarefas</h1>
      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <div style={{ marginTop: 10 }}>
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('concluidas')}>Concluídas</button>
        <button onClick={() => setFiltro('pendentes')}>Pendentes</button>
      </div>

      <ListaDeTarefas filtro={filtro} />
    </div>
  );
}

export default function App() {
  return (
    <TarefaProvider>
      <MainApp />
    </TarefaProvider>
  );
}