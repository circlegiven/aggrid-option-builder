class GridOptionBuilder {

    constructor() {
        // defulat option setting
    }

    columnDefs(array) {
        this._columnDefs = array;
        return this;
    }

    defaultColumnDef(obj) {
        this._defaultColDef = obj;
        return this;
    }


    build() {
        return new GridOption(this);
    }
}

class GridOption {
    constructor(builder) {
        if (builder._columnDefs) {
            this.columnDefs = builder._columnDefs;
        }

        if (builder._defaultColDef) {
            this.defaultColDef = builder._defaultColDef;
        }
    }
}