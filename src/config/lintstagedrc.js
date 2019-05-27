const {resolveAdaScripts, resolveBin, isOptedOut} = require('../utils')

const adaScripts = resolveAdaScripts()
const doctoc = resolveBin('doctoc')

module.exports = {
  concurrent: false,
  linters: {
    'README.md': [`${doctoc} --maxlevel 3 --notitle`, 'git add'],
    '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
      isOptedOut('autoformat', null, `${adaScripts} format`),
      `${adaScripts} lint`,
      `${adaScripts} test --findRelatedTests`,
      isOptedOut('autoformat', null, 'git add'),
    ].filter(Boolean),
  },
}
