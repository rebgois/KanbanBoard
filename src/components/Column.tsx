import { KanbanColumn, KanbanCard } from "@/types/kanban";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import AddCard from "./AddCard";

interface Props {
  column: KanbanColumn;
  cards: KanbanCard[];
  onAddCard: (columnId: string, content: string) => void;
}

const Column = ({ column, cards, onAddCard }: Props) => {
  return (
    <div className="w-[300px] min-w-[300px] bg-gray-50 rounded-lg p-4">
      <h2 className="font-semibold mb-4">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[100px] transition-colors ${
              snapshot.isDraggingOver ? "bg-gray-100" : ""
            }`}
          >
            {cards.map((card, index) => (
              <Card key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="mt-2">
        <AddCard onAdd={(content) => onAddCard(column.id, content)} />
      </div>
    </div>
  );
};

export default Column;