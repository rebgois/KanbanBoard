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
          className={`p-4 mb-2 rounded-lg bg-white shadow-sm border border-gray-200 
            ${snapshot.isDragging ? 'shadow-lg ring-2 ring-primary ring-opacity-50' : ''}
            hover:shadow-md transition-shadow duration-200`}
        >
          {card.content}
        </div>
      )}
    </Draggable>
  );
};

export default Card;