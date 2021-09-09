import { connect } from 'react-redux';

import { Search } from './search';
import { ArticlesThunk } from '../redux/articles/articles.thunk';

const mapDispatchToProps = (dispatch) => ({

  onChange(options) {
    options = {
      page: 1,
      ...options,
    };

    const thunk = new ArticlesThunk(dispatch, options);
    return thunk.invoke();
  },

});

export const SearchConnect = connect(null, mapDispatchToProps)(Search);

export default SearchConnect;
