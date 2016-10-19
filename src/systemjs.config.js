/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',

        '@angular': 'node_modules/@angular',
        'angular-in-memory-web-api': 'node_modules/angular-in-memory-web-api',
        'moment': 'node_modules/moment',
        'ng2-bootstrap': 'node_modules/ng2-bootstrap',
        'ng2-uploader': 'node_modules/ng2-uploader',
        'ng2-spin-kit': 'node_modules/ng2-spin-kit',
        'rxjs': 'node_modules/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},

        'angular-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'},
        'moment': {main: 'moment.js', defaultExtension: 'js'},
        'ng2-bootstrap': {main: 'ng2-bootstrap.js', defaultExtension: 'js'},
        'ng2-uploader': {main: 'ng2-uploader.js', defaultExtension: 'js'},
        'ng2-spin-kit': {main: 'spinners.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'}
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    // No umd for router yet
    //packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
