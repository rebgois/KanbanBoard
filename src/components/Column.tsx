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
    <div className="w-[300px] min-w-[300px] bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h2 className="font-semibold text-gray-700 dark:text-gray-200 mb-4">
          {column.title}
        </h2>
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`min-h-[100px] transition-colors rounded-lg ${
                snapshot.isDraggingOver
                  ? "bg-gray-50 dark:bg-gray-700/50"
                  : ""
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
    </div>
  );
};

export default Column;