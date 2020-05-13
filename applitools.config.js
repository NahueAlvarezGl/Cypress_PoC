module.exports = {
    appName: 'cypress-applitools',
    showLogs: true,
    batchName: 'blacksmith-' + Date.now(),
    concurrency: 10,
    apiKey: 'C9899xljT1jhD8spHc4Anq6v17KDwJrZOUxSC7n3dw1D0110',
    serverUrl: 'https://everfieyes.applitools.com/',
    browser: [
        {width: 1366, height: 768, name: 'firefox'},
        {width: 1366, height: 768, name: 'chrome'},
        {width: 1366, height: 768, name: 'safari'},
        {width: 1366, height: 768, name: 'edge'},
        { deviceName: 'iPhone X', screenOrientation: 'landscape'},
        { deviceName: 'iPhone X', screenOrientation: 'portrait' } 
    ]
  }