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
let appKey = 'ZTj8bC8XUUDNEtNw0FBLR6KYbhi7JO9S';
let publicApiKey = 'FE2fZlpOwydIcvlGGg3vtLJMCDvweuPe';
let serviceEncryptionKey = 'MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfex9n+3uUvLm9fEaqOTy4szQjP/uEwdeFu6LYhJHjuJAf0xREbMNC5kNRHVjMinh+VSAjNKPn6y2tT2wgQvFPQ==';

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    Keyri = window.plugins.CordovaKeyri;

    initializePlugin();
}

function initializePlugin() {
    Keyri.initialize({appKey: appKey, publicApiKey: publicApiKey, serviceEncryptionKey: serviceEncryptionKey, blockEmulatorDetection: true})
        .then((message) => {
            console.log('CordovaKeyri.initialize', message);
            isInitialized();
        })
        .catch((e) => {
            console.log('CordovaKeyri.initialize', e);
        });
}

function isInitialized() {
    Keyri.isInitialized()
        .then(() => {
            console.log('CordovaKeyri.isInitialized', "ok");
        })
        .catch((e) => {
            console.log('CordovaKeyri.isInitialized', e);
        });
}

function easyKeyriAuth() {
    Keyri.easyKeyriAuth('Payload', 'kulagin.andrew38@gmail.com')
        .then(() => {
            console.log('CordovaKeyri.easyKeyriAuth', 'ok');
            alert('Authorized');
        })
        .catch((e) => {
            console.log('CordovaKeyri.easyKeyriAuth', e);
        });
}

function generateAssociationKey() {
    Keyri.generateAssociationKey('kuliahin.andrew@gmail.com')
        .then((key) => {
            console.log('CordovaKeyri.generateAssociationKey', key);
            alert('Key generated: ' + key)
        })
        .catch((e) => {
            console.log('CordovaKeyri.generateAssociationKey', e);
        });
}

function generateUserSignature() {
    Keyri.generateUserSignature('kuliahin.andrew@gmail.com', 'Custom data')
        .then((signature) => {
            console.log('CordovaKeyri.generateUserSignature', signature);
            alert('Signature generated: ' + signature)
        })
        .catch((e) => {
            console.log('CordovaKeyri.generateUserSignature', e);
        });
}

function listAssociationKeys() {
    Keyri.listAssociationKeys()
        .then((keys) => {
            console.log('CordovaKeyri.listAssociationKeys', keys);
            alert('Association keys: ' + keys);
        })
        .catch((e) => {
            console.log('CordovaKeyri.listAssociationKeys', e);
        });
}

function listUniqueAccounts() {
    Keyri.listUniqueAccounts()
        .then((keys) => {
            console.log('CordovaKeyri.listUniqueAccounts', keys);
            alert('Unique accounts: ' + keys);
        })
        .catch((e) => {
            console.log('CordovaKeyri.listUniqueAccounts', e);
        });
}

function getAssociationKey() {
    Keyri.getAssociationKey('kuliahin.andrew@gmail.com')
        .then((key) => {
            console.log('CordovaKeyri.getAssociationKey', key);
            alert('Association key: ' + key);
        })
        .catch((e) => {
            console.log('CordovaKeyri.getAssociationKey', e);
        });
}

function removeAssociationKey() {
    Keyri.removeAssociationKey('kuliahin.andrew@gmail.com')
        .then(() => {
            console.log('CordovaKeyri.removeAssociationKey', 'ok');
            alert('Association key removed!');
        })
        .catch((e) => {
            console.log('CordovaKeyri.removeAssociationKey', e);
        });
}

function sendEvent() {
    Keyri.sendEvent({publicUserId: 'kuliahin.andrew@gmail.com', eventType: 'visits', success: true})
        .then(() => {
            console.log('CordovaKeyri.sendEvent', 'ok');
            alert('Event sent!');
        })
        .catch((e) => {
            console.log('CordovaKeyri.sendEvent', e);
        });
}

function initiateQrSession(sessionId, publicUserId, payload) {
    Keyri.initiateQrSession(sessionId, publicUserId)
        .then(() => {
            console.log('CordovaKeyri.initiateQrSession', 'ok');

            Keyri.initializeDefaultConfirmationScreen(payload)
                .then(() => {
                    console.log('CordovaKeyri.initializeDefaultScreen', 'ok');
                    alert('Authenticated!');
                })
                .catch((e) => {
                    console.log('CordovaKeyri.initializeDefaultScreen', e);
                });
        })
        .catch((e) => {
            console.log('CordovaKeyri.initiateQrSession', e);
        });
}

function processLink(link, publicUserId, payload) {
    Keyri.processLink(link, payload, publicUserId)
        .then(() => {
            console.log('CordovaKeyri.processLink', 'ok');
            alert('Link processed');
        })
        .catch((e) => {
            console.log('CordovaKeyri.processLink', e);
        });
}
