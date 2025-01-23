import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { KanbanData } from "@/types/kanban";
import Column from "./Column";
import { toast } from "sonner";

interface Props {
  initialData: KanbanData;
}

const KanbanBoard = ({ initialData }: Props) => {
  const [data, setData] = useState<KanbanData>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = data.columns[source.droppableId];
    const destColumn = data.columns[destination.droppableId];

    if (sourceColumn === destColumn) {
      const newCardIds = Array.from(sourceColumn.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        cardIds: newCardIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
    } else {
      const sourceCardIds = Array.from(sourceColumn.cardIds);
      sourceCardIds.splice(source.index, 1);
      const newSourceColumn = {
        ...sourceColumn,
        cardIds: sourceCardIds,
      };

      const destCardIds = Array.from(destColumn.cardIds);
      destCardIds.splice(destination.index, 0, draggableId);
      const newDestColumn = {
        ...destColumn,
        cardIds: destCardIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestColumn.id]: newDestColumn,
        },
      });

      toast(`Card moved to ${destColumn.title}`);
    }
  };

  const handleAddCard = (columnId: string, content: string) => {
    const newCardId = `card-${Date.now()}`;
    const newCard = { id: newCardId, content };
    
    const column = data.columns[columnId];
    const newCardIds = Array.from(column.cardIds);
    newCardIds.push(newCardId);

    setData({
      ...data,
      cards: {
        ...data.cards,
        [newCardId]: newCard,
      },
      columns: {
        ...data.columns,
        [columnId]: {
          ...column,
          cardIds: newCardIds,
        },
      },
    });

    toast("Card added successfully");
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 overflow-x-auto p-6">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const cards = column.cardIds.map((cardId) => data.cards[cardId]);

          return (
            <Column
              key={column.id}
              column={column}
              cards={cards}
              onAddCard={handleAddCard}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;