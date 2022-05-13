import { React } from 'react';
import { PropTypes } from 'prop-types';

import { style } from './article.style';

function Article({ article, count, onChangeCount }) {
  return (
    <style.Root>
      <style.Picture
        src={article.pic}
      />

      <style.Name>
        {article.name}
      </style.Name>

      <style.Price>
        {`${article.price} ${article.currency}`}
      </style.Price>

      <style.MultiplySign>
        x
      </style.MultiplySign>

      <style.Count>
        <style.NumberInput
          type="number"
          value={count}
          onChange={(event) => {
            const value = +event.target.value;

            if (value >= 0) {
              onChangeCount(value);
            }
          }}
        />
      </style.Count>
      <style.Checkmark>
        <style.Checkbox
          type="checkbox"
          checked={!!count}
          onChange={() => (count ? onChangeCount(0) : onChangeCount(1))}
        />
      </style.Checkmark>
    </style.Root>
  );
}

Article.propTypes = {
  onChangeCount: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  count: PropTypes.number,
};

Article.defaultProps = {
  count: 0,
};

export { Article };

export default Article;
