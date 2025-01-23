import KanbanBoard from "@/components/KanbanBoard";
import { initialData } from "@/lib/initial-data";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Kanban Board
        </h1>
        <KanbanBoard initialData={initialData} />
      </div>
    </div>
  );
};

export default Index;