import { Item } from '../types/Item';

// Função para obter o mês atual no formato "YYYY-MM"
export const getCurrentMonth = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`; // Exemplo: "2024-12"
};

// Função para filtrar a lista de itens pelo mês
export const filterListByMonth = (list: Item[], currentMonth: string): Item[] => {
  return list.filter(item => {
    const itemDate = new Date(item.date);
    const itemMonth = `${itemDate.getFullYear()}-${(itemDate.getMonth() + 1).toString().padStart(2, '0')}`;
    return itemMonth === currentMonth;
  });
};

// Função para formatar a data no formato desejado (ex: "30/12/2024")
export const formatDate = (date: string): string => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};
