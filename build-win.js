const builder = require('electron-builder')
const Platform = builder.Platform

builder.build({
  targets: Platform.WINDOWS.createTarget(),
  config: {
    'appId': 'local.test.app1',
    'files': [],
    'win': {
      // 'target': {
      //   'target': 'zip',
      //   'arch': [
      //     'x64',
      //   ]
      // }
      'target': 'nsis',
    }
  }
})