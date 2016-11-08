import angular from 'angular';
import <%= upCaseName %>Service from './<%= pathName %>.service';

let <%= name %>Module = angular.module('<%= pathName %>', [

])
    .service('<%= upCaseName %>Service', <%= upCaseName %>Service)

.name;

export default <%= name %>Module;
