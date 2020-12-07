var postcss = require('postcss');

postcss.plugin('postcss-plugin-namespace', function() {
  return function(css) {
      css.walkRules(rule => {
          if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name !== 'media') return
          const filePath = rule.source && rule.source.input.file
          const appName = /src\/(\S*?)\//.exec(filePath)[1] || ''
          const namespace = appName.split('.')[0] || ''

          rule.selectors = rule.selectors.map(s => `#${namespace} ${s === 'body' ? '' : s}`)
      })
  }
})