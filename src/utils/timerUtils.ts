export const getInitialTime = (tab: string): string => {
  switch (tab) {
    case "shortBreak":
      return "00:05";
    case "longBreak":
      return "00:06";
    default:
      return "00:07";
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
