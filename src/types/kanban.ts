export interface KanbanCard {
  id: string;
  content: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  cardIds: string[];
}

export interface KanbanData {
  cards: { [key: string]: KanbanCard };
  columns: { [key: string]: KanbanColumn };
  columnOrder: string[];
}