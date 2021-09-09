import React, { useCallback, useEffect, useRef } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { style } from './lineVisibilitySensor.style';

export const useVisibilityChange = ({
  activeSensor,
  content,
  setPending,
  onLoadPage,
}) => {
  const visible = useRef(false);

  const handleVisibleChange = useCallback(() => {
    if (visible.current && activeSensor) {
      onLoadPage();
      setPending(true);
    }
  }, [activeSensor, content, visible]);

  useEffect(handleVisibleChange, [handleVisibleChange]);

  const onVisibleChange = (isVisible) => {
    visible.current = isVisible;
    handleVisibleChange();
  };

  return onVisibleChange;
};

export const LineVisibilitySensor = (props) => (
  <VisibilitySensor {...props}>
    <style.Root />
  </VisibilitySensor>
);

export default VisibilitySensor;
