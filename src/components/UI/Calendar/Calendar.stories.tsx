import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar } from "./index";
import { Button } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

/**
 * Calendar component provides date selection with various modes and customization options.
 * Built on React Day Picker with comprehensive date handling.
 */
const meta = {
 title: "UI/Calendar",
 component: Calendar,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  mode: {
   control: { type: "select" },
   options: ["single", "multiple", "range"],
   description: "Selection mode",
  },
  disabled: {
   control: "boolean",
   description: "Whether the calendar is disabled",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default calendar
 */
export const Default: Story = {
 args: {
  mode: "single",
  selected: new Date(),
 },
};

/**
 * Single date selection
 */
export const SingleDate = {
 render: () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
   <div className="space-y-4">
    <Calendar
     mode="single"
     selected={date}
     onSelect={setDate}
     className="rounded-md border"
    />
    <p className="text-sm text-muted-foreground">
     Selected: {date ? format(date, "PPP") : "None"}
    </p>
   </div>
  );
 },
};

/**
 * Multiple date selection
 */
export const MultipleDates = {
 render: () => {
  const [dates, setDates] = useState<Date[] | undefined>([]);

  return (
   <div className="space-y-4">
    <Calendar
     mode="multiple"
     selected={dates}
     onSelect={setDates}
     className="rounded-md border"
    />
    <div className="text-sm text-muted-foreground">
     <p>Selected dates:</p>
     {dates && dates.length > 0 ? (
      <ul className="mt-1 space-y-1">
       {dates.map((date, index) => (
        <li key={index}>• {format(date, "PPP")}</li>
       ))}
      </ul>
     ) : (
      <p>None selected</p>
     )}
    </div>
   </div>
  );
 },
};

/**
 * Date range selection
 */
export const DateRange = {
 render: () => {
  const [range, setRange] = useState<{
   from: Date | undefined;
   to: Date | undefined;
  }>({
   from: undefined,
   to: undefined,
  });

  return (
   <div className="space-y-4">
    <Calendar
     mode="range"
     selected={range}
     onSelect={setRange}
     className="rounded-md border"
    />
    <div className="text-sm text-muted-foreground">
     <p>Selected range:</p>
     {range.from ? (
      <p>
       From: {format(range.from, "PPP")}
       {range.to && ` to ${format(range.to, "PPP")}`}
      </p>
     ) : (
      <p>None selected</p>
     )}
    </div>
   </div>
  );
 },
};

/**
 * Date picker with popover
 */
export const DatePicker = {
 render: () => {
  const [date, setDate] = useState<Date>();

  return (
   <Popover>
    <PopoverTrigger asChild>
     <Button
      variant="outline"
      className={cn(
       "w-[280px] justify-start text-left font-normal",
       !date && "text-muted-foreground"
      )}
     >
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : <span>Pick a date</span>}
     </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
     <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
    </PopoverContent>
   </Popover>
  );
 },
};

/**
 * Date range picker
 */
export const DateRangePicker = {
 render: () => {
  const [dateRange, setDateRange] = useState<{
   from: Date | undefined;
   to: Date | undefined;
  }>({
   from: undefined,
   to: undefined,
  });

  return (
   <div className="space-y-4">
    <Popover>
     <PopoverTrigger asChild>
      <Button
       variant="outline"
       className={cn(
        "w-[300px] justify-start text-left font-normal",
        !dateRange.from && "text-muted-foreground"
       )}
      >
       <CalendarIcon className="mr-2 h-4 w-4" />
       {dateRange.from ? (
        dateRange.to ? (
         <>
          {format(dateRange.from, "LLL dd, y")} -{" "}
          {format(dateRange.to, "LLL dd, y")}
         </>
        ) : (
         format(dateRange.from, "LLL dd, y")
        )
       ) : (
        <span>Pick a date range</span>
       )}
      </Button>
     </PopoverTrigger>
     <PopoverContent className="w-auto p-0" align="start">
      <Calendar
       mode="range"
       selected={dateRange}
       onSelect={setDateRange}
       numberOfMonths={2}
       initialFocus
      />
     </PopoverContent>
    </Popover>
   </div>
  );
 },
};

/**
 * Calendar with disabled dates
 */
export const WithDisabledDates = {
 render: () => {
  const [date, setDate] = useState<Date | undefined>();

  // Disable weekends
  const disableWeekends = (date: Date) => {
   const day = date.getDay();
   return day === 0 || day === 6; // Sunday or Saturday
  };

  // Disable past dates
  const disablePastDates = (date: Date) => {
   const today = new Date();
   today.setHours(0, 0, 0, 0);
   return date < today;
  };

  return (
   <div className="space-y-4">
    <Calendar
     mode="single"
     selected={date}
     onSelect={setDate}
     disabled={[disableWeekends, disablePastDates]}
     className="rounded-md border"
    />
    <div className="text-sm text-muted-foreground">
     <p>Weekends and past dates are disabled</p>
     <p>Selected: {date ? format(date, "PPP") : "None"}</p>
    </div>
   </div>
  );
 },
};

/**
 * Calendar with custom styling
 */
export const CustomStyling = {
 render: () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
   <div className="space-y-4">
    <Calendar
     mode="single"
     selected={date}
     onSelect={setDate}
     className="rounded-md border shadow-lg"
     classNames={{
      months: "space-y-4",
      month: "space-y-4",
      caption: "flex justify-center py-2 mb-4 relative items-center",
      caption_label: "text-lg font-semibold",
      nav: "space-x-1 flex items-center",
      nav_button: "h-8 w-8 bg-transparent p-0 hover:bg-primary/10 rounded-md",
      table: "w-full border-collapse space-y-1",
      head_row: "flex",
      head_cell: "text-muted-foreground rounded-md w-9 font-normal text-sm",
      row: "flex w-full mt-2",
      cell:
       "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
      day: "h-9 w-9 p-0 font-normal hover:bg-primary hover:text-primary-foreground rounded-md",
      day_selected:
       "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today: "bg-accent text-accent-foreground",
      day_outside: "text-muted-foreground opacity-50",
      day_disabled: "text-muted-foreground opacity-50 cursor-not-allowed",
      day_range_middle:
       "aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden: "invisible",
     }}
    />
    <p className="text-sm text-muted-foreground">
     Selected: {date ? format(date, "PPP") : "None"}
    </p>
   </div>
  );
 },
};

/**
 * Booking calendar example
 */
export const BookingCalendar = {
 render: () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [bookingType, setBookingType] = useState<"single" | "multiple">(
   "single"
  );

  // Mock booked dates
  const bookedDates = [
   new Date(2024, 0, 15),
   new Date(2024, 0, 16),
   new Date(2024, 0, 22),
   new Date(2024, 0, 23),
  ];

  const isBooked = (date: Date) => {
   return bookedDates.some(
    (bookedDate) => bookedDate.toDateString() === date.toDateString()
   );
  };

  const handleDateSelect = (date: Date | undefined) => {
   if (!date) return;

   if (bookingType === "single") {
    setSelectedDates([date]);
   } else {
    setSelectedDates((prev) => {
     const isAlreadySelected = prev.some(
      (selectedDate) => selectedDate.toDateString() === date.toDateString()
     );

     if (isAlreadySelected) {
      return prev.filter(
       (selectedDate) => selectedDate.toDateString() !== date.toDateString()
      );
     } else {
      return [...prev, date];
     }
    });
   }
  };

  return (
   <div className="space-y-4">
    <div className="flex gap-2">
     <Button
      variant={bookingType === "single" ? "default" : "outline"}
      size="sm"
      onClick={() => {
       setBookingType("single");
       setSelectedDates([]);
      }}
     >
      Single Date
     </Button>
     <Button
      variant={bookingType === "multiple" ? "default" : "outline"}
      size="sm"
      onClick={() => {
       setBookingType("multiple");
       setSelectedDates([]);
      }}
     >
      Multiple Dates
     </Button>
    </div>

    <Calendar
     mode={bookingType}
     selected={bookingType === "single" ? selectedDates[0] : selectedDates}
     onSelect={bookingType === "single" ? handleDateSelect : setSelectedDates}
     disabled={isBooked}
     className="rounded-md border"
     modifiers={{
      booked: bookedDates,
     }}
     modifiersClassNames={{
      booked: "bg-red-100 text-red-800 line-through",
     }}
    />

    <div className="space-y-2 text-sm">
     <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-red-100 border border-red-200 rounded"></div>
      <span>Booked (unavailable)</span>
     </div>
     <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-primary rounded"></div>
      <span>Selected</span>
     </div>

     {selectedDates.length > 0 && (
      <div className="mt-4 p-3 bg-muted rounded-lg">
       <p className="font-medium">Selected dates:</p>
       <ul className="mt-1 space-y-1">
        {selectedDates.map((date, index) => (
         <li key={index}>• {format(date, "PPP")}</li>
        ))}
       </ul>
      </div>
     )}
    </div>
   </div>
  );
 },
};

/**
 * Event calendar
 */
export const EventCalendar = {
 render: () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
   new Date()
  );

  // Mock events
  const events = [
   { date: new Date(2024, 0, 15), title: "Team Meeting", type: "meeting" },
   { date: new Date(2024, 0, 16), title: "Project Deadline", type: "deadline" },
   { date: new Date(2024, 0, 20), title: "Birthday Party", type: "personal" },
   { date: new Date(2024, 0, 25), title: "Conference", type: "event" },
  ];

  const getEventsForDate = (date: Date) => {
   return events.filter(
    (event) => event.date.toDateString() === date.toDateString()
   );
  };

  const hasEvents = (date: Date) => {
   return getEventsForDate(date).length > 0;
  };

  const eventDates = events.map((event) => event.date);

  return (
   <div className="flex gap-6">
    <div className="space-y-4">
     <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      className="rounded-md border"
      modifiers={{
       hasEvents: eventDates,
      }}
      modifiersClassNames={{
       hasEvents: "bg-blue-100 text-blue-800 font-semibold",
      }}
     />

     <div className="text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
       <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
       <span>Has events</span>
      </div>
     </div>
    </div>

    <div className="space-y-4 min-w-[250px]">
     <h3 className="font-medium">
      Events for {selectedDate ? format(selectedDate, "PPP") : "selected date"}
     </h3>

     {selectedDate && (
      <div className="space-y-2">
       {getEventsForDate(selectedDate).length > 0 ? (
        getEventsForDate(selectedDate).map((event, index) => (
         <div key={index} className="p-3 border rounded-lg">
          <div className="font-medium">{event.title}</div>
          <div className="text-sm text-muted-foreground capitalize">
           {event.type}
          </div>
         </div>
        ))
       ) : (
        <p className="text-muted-foreground">No events scheduled</p>
       )}
      </div>
     )}
    </div>
   </div>
  );
 },
};
