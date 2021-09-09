import React, { useCallback, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { useDebounceCallback } from '@react-hook/debounce';

import { style } from './search.style';

const DEBOUNCE_WAIT = 400;

const Search = (props) => {
  const query = useRef(null);
  const isItInCart = useRef(null);
  const onChange = useDebounceCallback(props.onChange, DEBOUNCE_WAIT);
  const handleChange = useCallback(() => {
    const options = {
      query: query.current.value,
      isInCart: !!isItInCart.current.checked,
    };

    onChange(options);
  }, [onChange]);

  return (
    <style.Root>
      <style.TextInput
        type="text"
        ref={query}
        defaultValue=""
        onChange={handleChange}
        placeholder="Поиск"
      />
      <style.Checkmark>
        <style.CheckmarkText>куплено</style.CheckmarkText>
        <style.Checkbox
          ref={isItInCart}
          type="checkbox"
          defaultValue={false}
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
