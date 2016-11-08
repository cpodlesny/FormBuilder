import angular from 'angular';
import <%= name %>Component from './<%= pathName %>.component';

let <%= name %>Module = angular.module('<%= pathName %>', [

])
    .component('<%= name %>', <%= name %>Component)

.name;

export default <%= name %>Module;
