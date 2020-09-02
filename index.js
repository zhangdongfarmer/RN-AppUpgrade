
import { NativeModules, DeviceEventEmitter } from 'react-native';

const { RNAppUpgrade } = NativeModules;


class AppUpgrade {

    clearEventListners = () => {
        DeviceEventEmitter.removeListener('AppUpgrade_DownloadStart')
        DeviceEventEmitter.removeListener('AppUpgrade_DownloadProgress')
        DeviceEventEmitter.removeListener('AppUpgrade_DownloadComplete')
        DeviceEventEmitter.removeListener('AppUpgrade_DownloadError')
    }

    onDownloadStart = (func) => {
        this.addEventListener('AppUpgrade_DownloadStart', func)
    }

    onDownloadProgress = (func) => {
        this.addEventListener('AppUpgrade_DownloadProgress', func)
    }

    onDownloadComplete = (func) => {
        this.addEventListener('AppUpgrade_DownloadComplete', func)
    }

    onDownloadError = (func) => {
        this.addEventListener('AppUpgrade_DownloadError', func)
    }

    addEventListener = (event, func) => {
        DeviceEventEmitter.addListener(event, func)
    }

    upgrade = (params) => {
        //先清除之前的listener
        RNAppUpgrade.upgrade(JSON.stringify(params))
    }

};

export default AppUpgrade;
