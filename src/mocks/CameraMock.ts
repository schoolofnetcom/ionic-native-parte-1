import { Camera } from '@ionic-native/camera';

export class CameraMock extends Camera {
    getPicture(options) {
        return new Promise((resolve, reject) => {
            resolve("https://assets.schoolofnet.com/img/logo-top.png");
        })
    }

    digaOiParaOErik(){
        console.log('oi erik');
    }
}
