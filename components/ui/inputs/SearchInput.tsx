import { SearchIcon } from "@/public/SVGs";

export function SearchInput() {
  return (
    <div className="flex  py-2 px-2 space-between items-center border-[0.5px] border-Neutra20 rounded-[8px] w-[100%]">
      <SearchIcon />
      <input
        className=" mx-4 flex grow active:border-0 p-1 focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
}
