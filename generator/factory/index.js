import angular from 'angular';
import <%= upCaseName %>Factory from './<%= pathName %>.factory';

let <%= name %>Module = angular.module('<%= pathName %>', [

])
    .factory('<%= upCaseName %>Factory', <%= upCaseName %>Factory)

    .name;

export default <%= name %>Module;
