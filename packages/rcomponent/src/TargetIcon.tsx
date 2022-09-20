import React, { memo } from 'react';

interface TargetIconType {
  name: string;
  width?: string;
  height?: string;
  type?: number;
  padding?: string;
}

export const TargetIcon = memo(
  ({
    name,
    width = '100px',
    height = '100px',
    type = 1,
    padding = '25px 20px 0 20px'
  }: TargetIconType) => {
    return (
      <div
        style={{ width: width, height: height, padding: padding }}
        className={`target-icon target-icon${type}`}
      >
        {name}
      </div>
    );
  }
);
