import React, { useCallback, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { useDebounceCallback } from '@react-hook/debounce';

import { style } from './search.style';
import { POPUP_TYPE, popupManager } from '../popup/popupManager';

const DEBOUNCE_WAIT = 400;
const defaultValues = {
  query: '',
  isInCart: false,
};

const Search = (props) => {
  const query = useRef(null);
  const isInCart = useRef(null);
  const onChange = useDebounceCallback(props.onChange, DEBOUNCE_WAIT);
  const handleChange = useCallback(() => {
    const options = {
      query: query.current.value,
      isInCart: !!isInCart.current.checked,
    };

    onChange(options);
  }, [onChange]);

  useEffect(() => {
    popupManager.onPopup((name) => {
      if (name === POPUP_TYPE.BUYING_SUCCEED) {
        query.current.value = defaultValues.query;
        isInCart.current.checked = defaultValues.isInCart;
      }
    });
  }, []);

  return (
    <style.Root>
      <style.TextInput
        type="text"
        ref={query}
        defaultValue={defaultValues.query}
        onChange={handleChange}
        placeholder="Поиск"
      />
      <style.Checkmark>
        <style.CheckmarkText>куплено</style.CheckmarkText>
        <style.Checkbox
          ref={isInCart}
          type="checkbox"
          defaultValue={defaultValues.isInCart}
          onChange={handleChange}
        />
      </style.Checkmark>
    </style.Root>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export { Search };

export default Search;
