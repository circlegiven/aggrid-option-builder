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

    defaultColumnGroupDef(obj) {
        this._defaultColGroupDef = obj;
        return this;
    }

    columnTypes(obj) {
        this._columnTypes = obj;
        return this;
    }

    columnResizeDefaultShift() {
        this._colResizeDefault = 'shift';
        return this;
    }

    enableAutoSizeColumns() {
        this._suppressAutoSize = false;
        return this;
    }
    disableAutoSizeColumns() {
        this._suppressAutoSize = true;
        return this;
    }

    setAutoSizePadding(number) {
        this._autoSizePadding = number;
        return this;
    }

    enableSkipHeaderOnAutoSize() {
        this._skipHeaderOnAutoSize = true;
        return this;
    }
    disableSkipHeaderOnAutoSize() {
        this._skipHeaderOnAutoSize = false;
        return this;
    }

    enableColumnMoveAnimation() {
        this._suppressColumnMoveAnimation = false;
        return this;
    }
    disableColumnMoveAnimation() {
        this._suppressColumnMoveAnimation = true;
        return this;
    }

    enableMovableColumns() {
        this._suppressMovableColumns = false;
        return this;
    }
    disableMovableColumns() {
        this._suppressMovableColumns = true;
        return this;
    }

    enableFieldDotNotation() {
        this._suppressFieldDotNotation = false;
        return this;
    }
    disableFieldDotNotation() {
        this._suppressFieldDotNotation = true;
        return this;
    }

    enableUnSortIcon() {
        this._unSortIcon = true;
        return this;
    }
    disableUnSortIcon() {
        this._unSortIcon = false;
        return this;
    }

    enableMultiSort() {
        this._suppressMultiSort = false;
        return this;
    }
    disableMultiSort() {
        this._suppressMultiSort = true;
        return this;
    }

    enableMenuHide() {
        this._suppressMenuHide = false;
        return true;
    }
    disableMenuHide() {
        this._suppressMenuHide = true;
        return this;
    }

    autoGroupColumnDef() {

    }

    enableColumnStateEvents() {
        this._suppressColumnStateEvents = false;
        return this;
    }
    disableColumnStateEvents() {
        this._suppressColumnStateEvents = true;
        return this;
    }

    enableAllowDragFromColumnsToolPanel() {
        this._allowDragFromColumnsToolPanel = true;
        return this;
    }
    disableAllowDragFromColumnsToolPanel() {
        this._allowDragFromColumnsToolPanel = false;
        return this;
    }

    enableApplyColumnDefOrder() {
        this._applyColumnDefOrder = true;
        return this;
    }
    disableApplyColumnDefOrder() {
        this._applyColumnDefOrder = false;
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