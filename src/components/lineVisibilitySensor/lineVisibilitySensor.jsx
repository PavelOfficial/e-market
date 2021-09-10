import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { style } from './lineVisibilitySensor.style';

export const useVisibilityChange = ({
  isLastPage,
  propsPending,
  process,
  content,
  onLoadPage,
}) => {
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(propsPending);
  }, [propsPending, process]);

  const visible = useRef(false);
  const activeSensor = !pending && !isLastPage;
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

  return {
    pending,
    activeSensor,
    onVisibleChange,
  };
};

export function LineVisibilitySensor(props) {
  return (
    <VisibilitySensor {...props}>
      <style.Root />
    </VisibilitySensor>
  );
}

export default VisibilitySensor;
