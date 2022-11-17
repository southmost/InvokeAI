import React from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from 'app/store';
import IAIIconButton from 'common/components/IAIIconButton';
import {
  canvasSelector,
  setShouldShowBoundingBox,
} from 'features/canvas/canvasSlice';
import { createSelector } from '@reduxjs/toolkit';

const boundingBoxVisibilitySelector = createSelector(
  canvasSelector,
  (canvas) => canvas.shouldShowBoundingBox
);

export default function BoundingBoxVisibility() {
  const shouldShowBoundingBox = useAppSelector(boundingBoxVisibilitySelector);
  const dispatch = useAppDispatch();

  const handleShowBoundingBox = () =>
    dispatch(setShouldShowBoundingBox(!shouldShowBoundingBox));
  return (
    <IAIIconButton
      aria-label="Toggle Bounding Box Visibility"
      icon={shouldShowBoundingBox ? <BiShow size={22} /> : <BiHide size={22} />}
      onClick={handleShowBoundingBox}
      background={'none'}
      padding={0}
    />
  );
}
