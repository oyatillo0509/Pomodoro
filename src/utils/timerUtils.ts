export const getInitialTime = (tab: string): string => {
  switch (tab) {
    case "shortBreak":
      return "24:22";
    case "longBreak":
      return "00:22";
    default:
      return "24:33";
  }
};

export const getBackgroundColor = (tab: string): string => {
  switch (tab) {
    case "shortBreak":
      return "bg-[#5F9B8B]";
    case "longBreak":
      return "bg-[#457CA3]";
    default:
      return "bg-[#BA4949]";
  }
};
