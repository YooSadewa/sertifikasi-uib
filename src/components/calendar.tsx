"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  highlightedDates?: Date[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  highlightedDates = [],
  ...props
}: CalendarProps) {
  const modifierStyles = {
    highlighted: {
      backgroundColor: "rgb(34 197 94)",
      color: "white",
      borderRadius: "9999px",
    },
  };

  return (
    <div className="w-[30vw] aspect-square">
      <DayPicker
        showOutsideDays={showOutsideDays}
        modifiers={{
          highlighted: highlightedDates,
        }}
        modifiersStyles={modifierStyles}
        className={cn("p-3 w-full h-full", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 h-full",
          month: "space-y-4 w-full",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-[1.4vw] font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-[2vw] w-[2vw] bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-full font-normal text-[1vw]",
          row: "flex w-full mt-2",
          cell: cn(
            "relative p-0 text-center text-[1.2vw] focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md flex-1",
            props.mode === "range"
              ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
              : "[&:has([aria-selected])]:rounded-md"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-full w-full aspect-square p-0 font-normal aria-selected:opacity-100 hover:rounded-full text-[1.2vw]"
          ),
          day_range_start: "day-range-start",
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "!bg-[#272e4f] !text-white !rounded-full hover:!bg-[#272e4f] focus:!bg-[#272e4f]",
          day_outside:
            "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft
              className={cn("h-[1.4vw] w-[1.4vw]", className)}
              {...props}
            />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight
              className={cn("h-[1.4vw] w-[1.4vw]", className)}
              {...props}
            />
          ),
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };