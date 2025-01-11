import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
<<<<<<< HEAD
  { languageOptions: { globals: globals.browser } },
=======
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
>>>>>>> 830f8be6b870cd26c773335c3572f04b403cf706
  pluginJs.configs.recommended,
  daStyle,
];
