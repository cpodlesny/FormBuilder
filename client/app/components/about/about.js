import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
    uiRouter
])

    .config(($stateProvider, $mdThemingProvider) => {
        'ngInject';
        $stateProvider
            .state('about', {
                url: '/about',
                component: 'about'
            });

        $mdThemingProvider.theme('mdr-form--default')
            .primaryPalette('purple')
            .accentPalette('green');

    })

    .component('about', aboutComponent)

    .name;

export default aboutModule;
