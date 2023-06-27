


import { readString, display } from '../../../../../lib/dom-io.js';
import { searchQuery} from './utils/search.js'

const searchForQuery = () => {
  // get user inputs
  const text = readString('user-text');
  const query = readString('query');

  const result = searchQuery(text, query);

  display('message', result)
};

document.getElementById('search').addEventListener('click', searchForQuery);
