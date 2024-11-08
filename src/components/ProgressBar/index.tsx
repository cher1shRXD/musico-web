import React, { useState } from "react";
import * as S from "./style";

interface ProgressBarProps {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const ProgressBar = ({ progress, onProgressChange } : ProgressBarProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = clickX / rect.width;
    onProgressChange(newProgress);
  };

  const handlePointerMouseDown = () => {
    setIsDragging(true);
  };

  const handlePointerMouseUp = () => {
    setIsDragging(false);
  };

  const handlePointerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newProgress = clickX / rect.width;
      onProgressChange(newProgress);
    }
  };

  return (
    <S.ProgressBarContainer
      onClick={handleProgressBarClick}
      onMouseMove={handlePointerMouseMove}
    >
      <S.ProgressBar progress={progress} />
      <S.ProgressPointer
        progress={progress}
        onMouseDown={handlePointerMouseDown}
        onMouseUp={handlePointerMouseUp}
      />
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
