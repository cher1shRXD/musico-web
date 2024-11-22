const useFormatTime = () => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds.toFixed(0)}`;
    } else {
      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds.toFixed(0)}`;
    }
  };

  return formatTime
}

export default useFormatTime