const FormatDate = ({ date, time = true }: { date: number; time?: boolean }) => {
  if (isNaN(new Date(date).getTime())) {
    return <span className="block text-sm text-red-500">Invalid date</span>;
  }

  return (
    <span className="block text-sm text-[#808086]">
      {new Date(date).toLocaleDateString("en-US")}
      {time &&
        ` • ${new Date(date).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}`}
    </span>
  );
};

export default FormatDate;
