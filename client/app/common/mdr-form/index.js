import angular from 'angular';
import mdrFormComponent from './mdr-form.component';

let mdrFormModule = angular.module('mdr-form', [

])
    .constant('MODEL', {
        CUSTOMER: {
            FIRST_NAME: '',
            LAST_NAME: ''
        }
    })
    .component('mdrForm', mdrFormComponent)
    .name;

export default mdrFormModule;
