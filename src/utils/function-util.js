Function.prototype.before = function (func) {
    let self = this;
    return function () {
        if (func.apply(this, arguments) === false) {
            return false;
        }
        return self.apply(this, arguments);
    }
}

Function.prototype.after = function (func) {
    let self = this;
    return function () {
        let ret = self.apply(this, arguments);
        if (ret === false) {
            return false;
        }
        func.apply(this, arguments);
        return ret
    }
}