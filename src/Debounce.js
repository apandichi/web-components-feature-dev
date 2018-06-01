import _ from 'lodash';

class Debounce {
    constructor({func, wait}) {
        this.debouncedSearchFunction = _.debounce(func, wait);
    }

    debouncedSearch = (value) => {
        this.debouncedSearchFunction(value)
    };
}

export default Debounce;
