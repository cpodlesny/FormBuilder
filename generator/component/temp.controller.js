/**
 * Class representing a <%= upCaseName %> controller.
 * @class
 */
class <%= upCaseName %>Controller {
    /**
     * Injecting dependencies.
     * @param {number} $log - The angular service for logging.
     */
    /*@ngInject*/
    constructor(
        $log
    ) {
        this._$log = $log;
        this._name = '<%= upCaseName %>Controller';
    }

    /**
     * Invoked when controller loaded.
     * @function $onInit
     */
    $onInit () {
        this._$log.info(this._name);
    }
}

export default <%= upCaseName %>Controller;
