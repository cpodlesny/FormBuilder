/**
 * Class representing a MdrFieldset controller.
 * @class
 */
class MdrFieldsetController {
    /**
     * Injecting dependencies.
     * @param {number} $log - The angular service for logging.
     */
    /*@ngInject*/
    constructor(
        $log
    ) {
        this._$log = $log;
        this._name = 'MdrFieldsetController';
    }

    /**
     * Invoked when controller loaded.
     * @function $onInit
     */
    $onInit () {
        this._$log.info(this._name);
    }
}

export default MdrFieldsetController;
