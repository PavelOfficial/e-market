import { React } from 'react';
import { PropTypes } from 'prop-types';

import { style } from './article.style';

const Article = ({ article, count, onChangeCount }) => {
  const result = (
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
          onChange={(event) => onChangeCount(+event.target.value)}
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

  return result;
};

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
