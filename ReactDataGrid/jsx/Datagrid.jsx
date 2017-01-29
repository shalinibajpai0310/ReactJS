import React from 'react';
import ReactDataGrid from 'react-data-grid';
const { Editors, Toolbar, Formatters } = require('react-data-grid-addons');
import Header from './Header.jsx'
// cell Draggable
// const {
//     Draggable: { Container: DraggableContainer, RowActionsCell, DropTargetRowContainer }
// } = require('react-data-grid-addons');

// custom filters
const { Filters: { NumericFilter, AutoCompleteFilter } } = require('react-data-grid-addons');
// place progress bar to show the progress 
var ProgressFormatter = React.createClass({
    PropTypes: {
        value: React.PropTypes.number.isRequired
    },
    render() {
        const percentComplete = this.props.value + '%';
        return (
            <div className="progress" style={{ marginTop: '20px' }}>
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: percentComplete }}>
                    {percentComplete}
                </div>
            </div>);
    }

});

// bulit-in editors and dropdown
const { AutoComplete: AutoCompleteEditor, DropDownEditor } = Editors;
const { DropDownFormatter } = Formatters;
const {Data: {Selectors}} = require('react-data-grid-addons');
// options for operators autocomplete editor
const priorities = [{ id: 0, title: 'Critical' }, { id: 1, title: 'High' }, { id: 2, title: 'Medium' }, { id: 3, title: 'Low' }];
const PrioritiesEditor = <AutoCompleteEditor options={priorities} />;

const titles = [{ id: 0, title: 'Dr' }, { id: 1, title: 'Mr' }, { id: 2, title: 'Ms' }, { id: 3, title: 'Mrs' }];
const TitleEditor = <AutoCompleteEditor options={titles} />;

// options for IssueType dropdown editor
// these can either be an array of strings, or an object that matches the schema below.
const issueTypes = [
    { id: 'bug', value: 'bug', text: 'Bug', title: 'Bug' },
    { id: 'improvement', value: 'improvement', text: 'Improvement', title: 'Improvement' },
    { id: 'epic', value: 'epic', text: 'Epic', title: 'Epic' },
    { id: 'story', value: 'story', text: 'Story', title: 'Story' }
];
const IssueTypesEditor = <DropDownEditor options={issueTypes} />;

const IssueTypesFormatter = <DropDownFormatter options={issueTypes} />;
// const RowRenderer = DropTargetRowContainer(ReactDataGrid.Row);
var Datagrid = React.createClass({
    propTypes: {
        rowKey: React.PropTypes.string.isRequired
    },
    getInitialState() {
        this._columns = [
            {
                key: 'id',
                name: 'ID',
                resizable: true,
                locked: true,
                filterable: true,
                filterRenderer: NumericFilter
            },
            {
                key: 'title',
                name: 'Title',
                editor: TitleEditor,
                resizable: true,
                filterable: true,
                filterRenderer: AutoCompleteFilter
            },
            {
                key: 'firstName',
                name: 'First Name',
                editable: true,
                resizable: true,
                filterable: true,

            },
            {
                key: 'lastName',
                name: 'Last Name',
                editable: true,
                resizable: true,
                filterable: true,
                events: {
          onKeyDown: function(ev) {
            if (ev.key === 'Enter') {
              alert('Thanks for commiting a result with Enter');
            }
          }
        }
            },
            {
                key: 'count',
                name: '% Coverage',
                resizable: true,
                editable:true,
                formatter: ProgressFormatter,
                filterable: true,
                filterRenderer: NumericFilter
            },
            {
                key: 'priority',
                name: 'priority',
                resizable: true,
                editor: PrioritiesEditor,
                filterable: true,
                filterRenderer: AutoCompleteFilter
            },
            {
                key: 'issueType',
                name: 'Issue Type',
                resizable: true,
                editor: IssueTypesEditor,
                formatter: IssueTypesFormatter,
                sortable: true,
                filterable: true,
                filterRenderer: AutoCompleteFilter
            }
        ];
        return { rows: this.createRows(), filters: {}, selectedIndexes: []  };
    },
    getDefaultProps() {
        return { rowKey: 'id' };
    },
    createRows() {
        let rows = [];
        for (let i = 0; i < 15; i++) {
            rows.push({
                id: i,
                title: 'Title ' + i,
                firstName: 'FName' + i,
                lastName: 'LName' + i,
                count: i*5,
                priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
                issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)]
            });
        }

        return rows;
    },

    handleCellDrag({ fromRow, toRow, cellKey, value }) {
        let rows = this.state.rows.slice(0);
        for (let i = fromRow; i <= toRow; i++) {
            let rowToUpdate = rows[i];
            rowToUpdate[cellKey] = value;
        }
        this.setState({ rows });
    },

    handleDragHandleDoubleClick({ idx, rowIdx, rowData }) {
        let rows = this.state.rows.map(r => Object.assign({}, r));
        const column = this._columns[idx-1];

        for (let i = rowIdx; i <= rows.length - 1; i++) {
            let rowToUpdate = rows[i];
            rowToUpdate[column.key] = rowData[column.key];
        }
        this.setState({ rows });
    },
    getColumns() {
        let clonedColumns = this._columns.slice();
        clonedColumns[2].events = {
            onClick: (ev, args) => {
                const idx = args.idx;
                const rowIdx = args.rowIdx;
                this.refs.grid.openCellEditor(rowIdx, idx);
            }
        };

        return clonedColumns;
    },


    rowsCount() {
        return Selectors.getRows(this.state).length;
    },

    // editable row
    handleRowUpdated({ rowIdx, updated }) {
        // merge updated row with current row and rerender by setting state
        const rows = this.state.rows;
        Object.assign(rows[rowIdx], updated);
        this.setState({ rows: rows });
    },
    handleAddRow({ newRowIndex }) {
    const newRow = {
      id: newRowIndex,
      userStory: '',
      developer: '',
      epic: ''
    };

    let rows = this.state.rows.concat([newRow]);
    this.setState({ rows });
  },

    rowGetter(index) {
        return Selectors.getRows(this.state)[index];
    },
    // isDraggedRowSelected: function (selectedRows, rowDragSource) {
    //     if (selectedRows && selectedRows.length > 0) {
    //         let key = this.props.rowKey;
    //         return selectedRows.filter(r => r[key] === rowDragSource.data[key]).length > 0;
    //     }
    //     return false;
    // }, reorderRows: function (e) {
    //     let selectedRows = Selectors.getSelectedRowsByKey({ rowKey: this.props.rowKey, selectedKeys: this.state.selectedIds, rows: this.state.rows });
    //     let draggedRows = this.isDraggedRowSelected(selectedRows, e.rowSource) ? selectedRows : [e.rowSource.data];
    //     let undraggedRows = this.state.rows.filter(function (r) {
    //         return draggedRows.indexOf(r) === -1;
    //     });
    //     let args = [e.rowTarget.idx, 0].concat(draggedRows);
    //     Array.prototype.splice.apply(undraggedRows, args);
    //     this.setState({ rows: undraggedRows });
    // },

    onRowsSelected: function (rows) {
        this.setState({ selectedIds: this.state.selectedIds.concat(rows.map(r => r.row[this.props.rowKey])) });
    },

    onRowsDeselected: function (rows) {
        let rowIds = rows.map(r => r.row[this.props.rowKey]);
        this.setState({ selectedIds: this.state.selectedIds.filter(i => rowIds.indexOf(i) === -1) });
    },

    // sortable columns
    handleGridSort(sortColumn, sortDirection) {
        const comparer = (a, b) => {
            if (sortDirection === 'ASC') {
                return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
            } else if (sortDirection === 'DESC') {
                return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
            }
        };

        const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

        this.setState({ rows });
    },
    // filter columns
    handleFilterChange(filter) {

        let newFilters = Object.assign({}, this.state.filters);
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }
        this.setState({ filters: newFilters });
    },
    getValidFilterValues(columnId) {
        let values = this.state.rows.map(r => r[columnId]);
        return values.filter((item, i, a) => { return i === a.indexOf(item); });
    },

    onClearFilters: function () {

        // all filters removed
        this.setState({ filters: {} });
    },
    onRowsSelected(rows) {
    this.setState({selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx))});
  },

  onRowsDeselected(rows) {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
  },
  onRowClick(rowIdx, row) {
    let rows = this.state.rows;
    rows[rowIdx] = Object.assign({}, row, {isSelected: !row.isSelected});
    this.setState({ rows });
  },

  onKeyDown(e) {
    if (e.ctrlKey && e.keyCode === 65) {
      e.preventDefault();

      let rows = [];
      this.state.rows.forEach((r) =>{
        rows.push(Object.assign({}, r, {isSelected: true}));
      });

      this.setState({ rows });
    }
  },
    render: function () {
         const rowText = this.state.selectedIndexes.length === 1 ? 'row' : 'rows';
        return (<div><Header></Header><div className="container"> <span>{this.state.selectedIndexes.length} {rowText} selected</span><ReactDataGrid
            ref='grid'
            rowKey="id"
            enableCellSelect={true}
            columns={this.getColumns()}
            rowGetter={this.rowGetter}
            rowsCount={this.rowsCount()}
            minHeight={500}
            onRowUpdated={this.handleRowUpdated}
            onGridSort={this.handleGridSort}
            enableRowSelect={true}
            toolbar={<Toolbar enableFilter={true} onAddRow={this.handleAddRow}/>}
            onAddFilter={this.handleFilterChange}
            getValidFilterValues={this.getValidFilterValues}
            onClearFilters={this.onClearFilters}
            rowScrollTimeout={200}
            onDragHandleDoubleClick={this.handleDragHandleDoubleClick}
            onCellsDragged={this.handleCellDrag}
            rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.state.selectedIndexes,
            }
          }}
            /></div></div>)
    }
})

export default Datagrid