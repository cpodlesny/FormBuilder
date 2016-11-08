class <%= upCaseName %>Service {
    /*@ngInject*/
    constructor(
        $log
    ) {
        this._$log = $log;
        this._name = '<%= upCaseName %>Service';
    }
}

export default <%= upCaseName %>Service;
