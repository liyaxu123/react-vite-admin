import { Iconify } from "@/components/icon";

const SearchButton = () => {
  return (
    <div className="flex items-center w-20 h-9 bg-[rgba(145,158,171,0.08)] justify-center gap-2 rounded-xl cursor-pointer hover:bg-[rgba(145,158,171,0.16)]">
      <Iconify icon="mingcute:search-line" size={20} color="#637381" />
      <span className="h-6 font-bold min-w-6 text-[#1C252E] bg-white text-xs flex items-center justify-center shadow-[0_1px_2px_0_rgba(145,158,171,0.16)] px-1.5 rounded-md w-8">
        ⌘K
      </span>
    </div>
  );
};

export default SearchButton;
