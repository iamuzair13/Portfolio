import { Button } from "@/components/ui/button";

export default function WSButton({ ...props }) {
  return (
    <Button className="relative bg-[#0a49eb] hover:bg-[#0f3bbe] ml-auto h-10  w-40 max-lg:w-50  group transition-all duration-300 flex items-center gap-2 lg:text-[12px]  ">
      {props.value}

      {/* Wrapper for both icons at same position */}
      <span className="relative w-1 h-5 mt-[2.5px] ">
        {/* Default icon */}
        <span className="font-[600]">{props.icon}</span>

        {/* Hover icon */}
        <span className="font-[600]">{props.hovericon}</span>
      </span>
    </Button>
  );
}
