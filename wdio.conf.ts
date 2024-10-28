import type { Options } from '@wdio/types';
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './test/tsconfig.json',
            transpileOnly: true
        }
    },
    services: [
        [
          "lambdatest",
          {
            tunnel: false,
            lambdatestOpts: {
            logFile: "tunnel.log"
            }
          }
        ]
    ],
    hostname: 'hub.lambdatest.com',
    port: 80,
    path: '',
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    specs: [
        './test/specs/**/*.ts'
    ], 
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [
        {
            browserName: "Chrome",
            browserVersion: "122.0",
            path: "/wd/hub",
            hostname: "hub.lambdatest.com",
            port: 80,
            "LT:Options": {
                "username": "",
                "accessKey": "",               
                "platformName": "Windows 10",
            }
        },
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
