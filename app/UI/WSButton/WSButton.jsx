import { Button } from "@/components/ui/button";

export default function WSButton({ ...props }) {
  return (
    <Button className="relative bg-[#0a49eb] hover:bg-[#0f3bbe]   lg:w-[150px] xl:w-[150px] lg:p-2 xl:p-4 group transition-all duration-300 flex items-center gap-2 lg:text-[12px]  ">
      {props.value}

      {/* Wrapper for both icons at same position */}
      <span className="relative w-5 h-5">
        {/* Default icon */}
        <span className="font-[600]">{props.icon}</span>

        {/* Hover icon */}
        <span className="font-[600]">{props.hovericon}</span>
      </span>
    </Button>
  );
}
