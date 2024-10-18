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
    // hostname: 'hub.lambdatest.com',
     port: 80,
    //path: '',
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    specs: [
        './test/mobile-app-specs/**/*.ts'
    ], 
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,



    capabilities: [
        {
          
            port: 80,
            "LT:Options": {
                deviceName: "Galaxy.*",
                name: "android_ltOptions",
                isRealMobile: true,
                build: 'sample-build-4',
                app: "lt://proverbial-android",
                platformName: "Android",
            }
        },
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    path: "/wd/hub",
    hostname: "mobile-hub.lambdatest.com",
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
