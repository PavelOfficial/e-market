import { React } from 'react';
import { PropTypes } from 'prop-types';

import { style } from './article.style';

export const Article = ({ article, count }) => (
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
      {count}
    </style.Count>
    <style.Checkmark>
      <style.Checkbox
        type="checkbox"
        checked={!!count}
      />
    </style.Checkmark>
  </style.Root>
);

Article.propTypes = {
  article: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default Article;
