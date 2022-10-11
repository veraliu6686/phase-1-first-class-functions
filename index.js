

function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction(){
    return function callBack(){};
}

function returnsAnAnonymousFunction() {
    return function () {};
}
