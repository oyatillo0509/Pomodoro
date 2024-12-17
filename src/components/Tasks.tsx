
export default function Tasks() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold">Tasks</h2>
      </div>
      <button className="w-full border-2 border-dashed border-[#ffffff33] rounded-md py-4 flex items-center justify-center space-x-2 text-white opacity-70 hover:opacity-100 transition-opacity">
        <span>  +  Add Task</span>
      </button>
    </div>
  );
}
