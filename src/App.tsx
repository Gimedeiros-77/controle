import { useState, useEffect } from 'react';
import * as C from './App.styles'; // Aqui estão seus estilos personalizados
import { Item } from './types/Item'; // Definição do tipo Item
import { categories } from './data/categories'; // Dados de categorias (se necessário)
import { items } from './data/items'; // Dados de itens (lista inicial)
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'; // Funções de filtro de data
import { TableArea } from './components/TableArea'; // Componente de tabela

const App = () => {
  const [list, setList] = useState<Item[]>(items); // Lista de itens
  const [filteredList, setFilteredList] = useState<Item[]>([]); // Lista filtrada
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); // Mês atual

  // Atualiza a lista filtrada sempre que a lista ou o mês mudar
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informações, pode ser usada para exibir resumos ou gráficos */}

        {/* Área de inserção de novos itens, você pode criar um formulário aqui */}

        {/* Componente TableArea para exibir os itens filtrados */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
