import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, XIcon } from "lucide-react";

interface Props {
  onAdd: (content: string) => void;
}

const AddCard = ({ onAdd }: Props) => {
  const [isAdding, setIsAdding] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAdd(content.trim());
      setContent("");
      setIsAdding(false);
    }
  };

  if (!isAdding) {
    return (
      <button
        onClick={() => setIsAdding(true)}
        className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors p-2 w-full rounded-md hover:bg-gray-50 dark:hover:bg-gray-700/50"
      >
        <PlusIcon size={16} />
        <span>Add a card</span>
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        autoFocus
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter card content..."
        className="w-full bg-white dark:bg-gray-800"
      />
      <div className="flex gap-2">
        <Button type="submit" size="sm" variant="default">
          Add Card
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setIsAdding(false)}
        >
          <XIcon size={16} />
        </Button>
      </div>
    </form>
  );
};

export default AddCard;