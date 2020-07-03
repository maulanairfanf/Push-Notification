var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BPRnNzC17tPq-5y5jpSriogyRepZJzpEcZ0LPF8GKrZd2mQzaCr1UkEUNVoesvK4nAvn5spaikKgCZFGbaiUr8A",
    "privateKey": "nC54vjBRDiixCMGdZiDE6MgfaMKQLsUjJH_bmn0RX-0"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/e-zHvQlegXc:APA91bEoBflb9b1J0kbH3kOQl7_mmpTI_Mxm2VPYMl4AEBgr298HFsV98I2Ofnb63LsvGNk74UwTAhosXPk7k0LY9Qc6IC3v6teoropXQW7e7qzW-rlbLPwnmvnnLRD9_LJsDrmKcO3F",
    "keys": {
        "p256dh": "BCRcd0gw5SECTsBiRXwB5vEY5L9N47AEIVo390G4+MZ039jOsGo8b0iHpNVAQxMhM8XTOSnZxqkayHiS4fk7+mI=",
        "auth": "V4ckIcaNT7KO6r333R69dA=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '385677704871',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);