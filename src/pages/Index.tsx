import KanbanBoard from "@/components/KanbanBoard";
import { initialData } from "@/lib/initial-data";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Kanban Board</h1>
        <KanbanBoard initialData={initialData} />
      </div>
    </div>
  );
};

export default Index;