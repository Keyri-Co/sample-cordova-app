/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

let Keyri;
let appKey = 'dev_ZTj8bC8XUUDNEtNw0FBLR6KYbhi7JO9S';
let publicAppKey  = 'development_FE2fZlpOwydIcvlGGg3vtLJMCDvweuPe';

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    Keyri = cordova.plugins.CordovaKeyri;

    initializePlugin();
}

function initializePlugin() {
    Keyri.initialize(appKey, publicAppKey, true, (message) => {
        console.log('CordovaKeyri.initialize', message);
    }, (e) => {
        console.log('CordovaKeyri.initialize', e);
    })
}

function easyKeyriAuth() {
    Keyri.easyKeyriAuth(appKey, publicAppKey, 'Payload', 'kulagin.andrew38@gmail.com', () => {
        console.log('CordovaKeyri.easyKeyriAuth', 'ok');
        alert('Authorized');
    }, (e) => {
        console.log('CordovaKeyri.easyKeyriAuth', e);
    })
}

function generateAssociationKey() {
    Keyri.generateAssociationKey('kuliahin.andrew@gmail.com', (key) => {
        console.log('CordovaKeyri.generateAssociationKey', key);
        alert('Key generated: ' + key)
    }, (e) => {
        console.log('CordovaKeyri.generateAssociationKey', e);
    })
}

function getUserSignature() {
    Keyri.getUserSignature('kuliahin.andrew@gmail.com', 'Custom data', (signature) => {
        console.log('CordovaKeyri.getUserSignature', signature);
        alert('Signature generated: ' + signature);
    }, (e) => {
        console.log('CordovaKeyri.getUserSignature', e);
    })
}

function listAssociationKey() {
    Keyri.listAssociationKey((keys) => {
        console.log('CordovaKeyri.listAssociationKey', keys);
        alert('Association keys: ' + keys);
    }, (e) => {
        console.log('CordovaKeyri.listAssociationKey', e);
    })
}

function listUniqueAccounts() {
    Keyri.listUniqueAccounts((keys) => {
        console.log('CordovaKeyri.listUniqueAccounts', keys);
        alert('Unique accounts: ' + keys);
    }, (e) => {
        console.log('CordovaKeyri.listUniqueAccounts', e);
    })
}

function getAssociationKey() {
    Keyri.getAssociationKey('kuliahin.andrew@gmail.com', (key) => {
        console.log('CordovaKeyri.getAssociationKey', key);
        alert('Association key: ' + key);
    }, (e) => {
        console.log('CordovaKeyri.getAssociationKey', e);
    })
}

function removeAssociationKey() {
    Keyri.removeAssociationKey('kuliahin.andrew@gmail.com', () => {
        console.log('CordovaKeyri.removeAssociationKey', 'ok');
        alert('Association key removed!');
    }, (e) => {
        console.log('CordovaKeyri.removeAssociationKey', e);
    })
}

function sendEvent() {
    Keyri.sendEvent('kuliahin.andrew@gmail.com', 'visits', 'success', () => {
        console.log('CordovaKeyri.sendEvent', 'ok');
        alert('Event sent!');
    }, (e) => {
        console.log('CordovaKeyri.sendEvent', e);
    })
}

function initiateQrSession(sessionId, publicUserId, payload) {
    Keyri.initiateQrSession(sessionId, publicUserId, (session) => {
        console.log('CordovaKeyri.initiateQrSession', 'ok');

        Keyri.initializeDefaultScreen(session.sessionId, payload, () => {
            console.log('CordovaKeyri.initializeDefaultScreen', 'ok');
            alert('Authenticated!');
        }, (e) => {
            console.log('CordovaKeyri.initializeDefaultScreen', e);
        })
    }, (e) => {
        console.log('CordovaKeyri.initiateQrSession', e);
    })
}

function processLink(link, publicUserId, payload) {
    Keyri.processLink(link, payload, publicUserId, () => {
        console.log('CordovaKeyri.processLink', 'ok');
        alert('Link processed');
    }, (e) => {
        console.log('CordovaKeyri.processLink', e);
    })
}
