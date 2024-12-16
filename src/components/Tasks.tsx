import {MoreVertical, Plus} from "lucide-react";

export default function Tasks() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold">Tasks</h2>
        <button className="text-white opacity-70 hover:opacity-100">
          <MoreVertical size={24} />
        </button>
      </div>
      <button className="w-full border-2 border-dashed border-[#ffffff33] rounded-md py-4 flex items-center justify-center space-x-2 text-white opacity-70 hover:opacity-100 transition-opacity">
        <Plus size={18} />
        <span>Add Task</span>
      </button>
    </div>
  );
}
