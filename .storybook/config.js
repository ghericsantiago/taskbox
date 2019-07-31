import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'react-chromatic/storybook-addon';

// import compiled css to be used in storybook
import '../src/index.css';

// By default storybook will look for src/stories folder
/* 
function loadStories() {
    require('../src/stories'); 
}
*/

// Look for a file with extension name '.stories.js' (This will replace the default behavior above)
// const req = require.context('../src', true, /\.stories.js$/);

// Replace require.context to requireContext to run it properly in jest
const req = requireContext('../src', true, /\.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
