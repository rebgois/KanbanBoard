import { KanbanCard } from "@/types/kanban";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  card: KanbanCard;
  index: number;
}

const Card = ({ card, index }: Props) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-4 mb-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700
            ${snapshot.isDragging 
              ? 'shadow-lg ring-2 ring-blue-500/50 dark:ring-blue-400/50' 
              : 'shadow-sm hover:shadow-md'}
            transition-all duration-200 text-gray-700 dark:text-gray-200`}
        >
          {card.content}
        </div>
      )}
    </Draggable>
  );
};

export default Card;