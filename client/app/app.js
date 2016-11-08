import angular from 'angular';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'angular-material/angular-material.css';

angular.module('app', [
    ngAria,
    ngAnimate,
    ngMaterial,
    uiRouter,
    Common,
    Components
])
    .config((
        $locationProvider,
        $mdIconProvider
    ) => {
        'ngInject';

        $mdIconProvider
            .icon('menu', '/assets/icons/ic_menu_black_24px.svg', 24)
            .icon('arrow_drop_down', '/assets/icons/ic_arrow_drop_down_black_24px.svg', 24);

        $locationProvider.html5Mode(true).hashPrefix('!');
    })

    .component('app', AppComponent);