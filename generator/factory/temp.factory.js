let <%= upCaseName %>Factory = ($log) => {
    'ngInject';
    let init = (param) => {
        $log.debug(param);
    };

    return { init };
};

export default <%= upCaseName %>Factory;
