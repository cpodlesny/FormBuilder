/**
 * Class representing a MdrForm controller.
 * @class
 */
class MdrFormController {
    /**
     * Injecting dependencies.
     * @param {number} $log - The angular service for logging.
     */
    /*@ngInject*/
    constructor(
        $log,
        $element,
        $attrs,
        $timeout
    ) {
        this._$log     = $log;
        this._$element = $element;
        this._$attrs   = $attrs;
        this._$timeout = $timeout;
        this._name     = 'MdrFormController';
        this.form      = this.config.form.name;
    }

    /**
     * Invoked when controller loaded.
     * @function $onInit
     */
    $onInit () {
        this._$log.info(this._name);
    }
}

export default MdrFormController;
