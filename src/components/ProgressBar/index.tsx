import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";

interface ProgressBarProps {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const ProgressBar = ({ progress, onProgressChange }: ProgressBarProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const clampProgress = (value: number): number => {
    return Math.min(Math.max(value, 0), 1);
  };

  const getProgressFromEvent = (
    e: MouseEvent | React.MouseEvent<HTMLDivElement>
  ) => {
    if (!progressBarRef.current) return progress;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    return clampProgress(clickX / rect.width);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newProgress = getProgressFromEvent(e);
    onProgressChange(newProgress);
  };

  const handlePointerMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDragging(true);
    // 드래그 시작 시에도 현재 위치의 progress 값을 바로 적용
    const newProgress = getProgressFromEvent(e);
    onProgressChange(newProgress);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && progressBarRef.current) {
        e.preventDefault(); // 텍스트 선택 방지
        const newProgress = getProgressFromEvent(e);
        onProgressChange(newProgress);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, onProgressChange]);

  return (
    <S.ProgressBarContainer
      ref={progressBarRef}
      className="progress-bar-container"
      onClick={handleProgressBarClick}
    >
      <S.ProgressBar progress={clampProgress(progress)} />
      <S.ProgressPointer
        progress={clampProgress(progress)}
        onMouseDown={handlePointerMouseDown}
      />
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
