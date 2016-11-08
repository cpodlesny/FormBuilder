import template from './mdr-fieldset.html';
import controller from './mdr-fieldset.controller';
import './mdr-fieldset.scss';

let mdrFieldsetComponent = {
    restrict: 'E',
    bindings: {
        fieldset: '<',
        form: '<'
    },
    transclude: true,
    template,
    controller
};

export default mdrFieldsetComponent;
