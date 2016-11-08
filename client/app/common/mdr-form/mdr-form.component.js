import template from './mdr-form.html';
import controller from './mdr-form.controller';
import './mdr-form.scss';

let mdrFormComponent = {
    restrict: 'E',
    bindings: {
        config: '<'
    },
    template,
    controller
};

export default mdrFormComponent;
