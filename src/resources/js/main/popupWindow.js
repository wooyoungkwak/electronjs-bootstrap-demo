/* popupWindow.js */

const { BrowserWindow } = require("electron");
const path = require('path');

const rootPath = path.join(__dirname, '/../../../..');
const htmlPath = rootPath + '/src/html';
const resourcePath = rootPath + '/src/resources';

const env = require(resourcePath + '/js/config/env');

// theme window 열기
exports.themeWindow = function (message) { 
    const modalFile = htmlPath + '/demo/theme.html';

    var themeWin = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        },
        width: 1024,
        height: 768,
        title: '부트스트랩-태마',
        resizable: false,   // 크기 재조정
        focusable: true,    // 팝업창 
        frame: true,
        parent: mainWindow,
        modal: true
    });

    // themeWin.maximize();    // 최대 크기로 열기
    
    themeWin.setMenuBarVisibility(false);   // 팝업창의 메뉴 제거 
    themeWin.on('close', () => { themeWin = null });
    themeWin.loadFile(modalFile);
    themeWin.show();

    // dev tool 열어라 !!
    if (env.isOpenDevTools)
        themeWin.webContents.openDevTools();

    if (typeof message !== 'undefined') {
        themeWin.webContents.on('dom-ready', () => {
            themeWin.webContents.send("themeWindow", {text:message});
        });
    }

};

// theme2 window 열기
exports.theme2Window = function (message) { 

    const modalFile = htmlPath + '/demo/theme2.html';

    var themeWin = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        },
        width: 1024,
        height: 768,
        title: '부트스트랩-태마',
        resizable: false,   // 크기 재조정
        focusable: true,    // 팝업창 
        frame: true,
        parent: mainWindow,
        modal: true
    });

    // themeWin.maximize();    // 최대 크기로 열기
    
    themeWin.setMenuBarVisibility(false);   // 팝업창의 메뉴 제거 
    themeWin.on('close', () => { themeWin = null });
    themeWin.loadFile(modalFile);
    themeWin.show();

    // dev tool 열어라 !!
    if (env.isOpenDevTools)
        themeWin.webContents.openDevTools();

    if (typeof message !== 'undefined') {
        themeWin.webContents.on('dom-ready', () => {
            themeWin.webContents.send("theme2Window", {text:message});
        });
    }

};

// grid window 열기
exports.gridWindow = function (message) { 

    const modalFile = htmlPath + '/demo/grid.html';

    var gridWin = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        },
        width: 1024,
        height: 768,
        title: '부트스트랩-태마',
        resizable: false,   // 크기 재조정
        focusable: true,    // 팝업창 
        frame: true,
        parent: mainWindow,
        modal: true
    });

    // themeWin.maximize();    // 최대 크기로 열기
    
    gridWin.setMenuBarVisibility(false);   // 팝업창의 메뉴 제거 
    gridWin.on('close', () => { gridWin = null });
    gridWin.loadFile(modalFile);
    gridWin.show();

    // dev tool 열어라 !!
    if (env.isOpenDevTools)
        gridWin.webContents.openDevTools();

    if (typeof message !== 'undefined') {
        gridWin.webContents.on('dom-ready', () => {
            gridWin.webContents.send("gridWindow", {text:message});
        });
    }

};

// product window 열기
exports.productWindow = function (message) { 

    const modalFile = htmlPath + '/demo/product.html';

    var productWin = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        },
        width: 1024,
        height: 768,
        title: '부트스트랩-태마',
        resizable: false,   // 크기 재조정
        focusable: true,    // 팝업창 
        frame: true,
        parent: mainWindow,
        modal: true
    });

    // productWin.maximize();    // 최대 크기로 열기
    
    productWin.setMenuBarVisibility(false);   // 팝업창의 메뉴 제거 
    productWin.on('close', () => { productWin = null });
    productWin.loadFile(modalFile);
    productWin.show();

    // dev tool 열어라 !!
    if (env.isOpenDevTools)
        productWin.webContents.openDevTools();

    if (typeof message !== 'undefined') {
        productWin.webContents.on('dom-ready', () => {
            productWin.webContents.send("productWindow", {text:message});
        });
    }

};

// navBar window 열기
exports.navBarWindow = function (message) { 
    const modalFile = htmlPath + '/demo/navBar.html';

    var navBarWin = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        },
        width: 1024,
        height: 768,
        title: '부트스트랩-태마',
        resizable: false,   // 크기 재조정
        focusable: true,    // 팝업창 
        frame: true,
        parent: mainWindow,
        modal: true
    });

    // navBarWin.maximize();    // 최대 크기로 열기
    
    navBarWin.setMenuBarVisibility(false);   // 팝업창의 메뉴 제거 
    navBarWin.on('close', () => { navBarWin = null });
    navBarWin.loadFile(modalFile);
    navBarWin.show();

    // dev tool 열어라 !!
    if (env.isOpenDevTools)
        navBarWin.webContents.openDevTools();

    if (typeof message !== 'undefined') {
        navBarWin.webContents.on('dom-ready', () => {
            navBarWin.webContents.send("navBarWindow", {text:message});
        });
    }

};
