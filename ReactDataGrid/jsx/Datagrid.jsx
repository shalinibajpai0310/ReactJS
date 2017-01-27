import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {Editors, Formatters} from 'react-data-grid-addons'
import Header from './Header.jsx'

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

// options for operators autocomplete editor
const priorities = [{ id: 0, title: 'Critical' }, { id: 1, title: 'High' }, { id: 2, title: 'Medium' }, { id: 3, title: 'Low' }];
const PrioritiesEditor = <AutoCompleteEditor options={priorities} />;

// options for IssueType dropdown editor
// these can either be an array of strings, or an object that matches the schema below.
const issueTypes = [
    { id: 'bug', value: 'bug', text: 'Bug', title: 'Bug' },
    { id: 'improvement', value: 'improvement', text: 'Improvement', title: 'Improvement' },
    { id: 'epic', value: 'epic', text: 'Epic', title: 'Epic' },
    { id: 'story', value: 'story', text: 'Story', title: 'Story' }
];
const IssueTypesEditor = <DropDownEditor options={issueTypes}/>;

const IssueTypesFormatter = <DropDownFormatter options={issueTypes}/>;

var Datagrid = React.createClass({

    getInitialState() {
        this._columns = [
            {
                key: 'id',
                name: 'ID',
                resizable: true
            },
            {
                key: 'title',
                name: 'Title',
                editable: true,
                resizable: true
            },
            {
                key: 'count',
                name: '% Coverage',
                resizable: true,
                formatter: ProgressFormatter
            },
            {
                key: 'priority',
                name: 'priority',
                resizable: true,
                editor: PrioritiesEditor,
            },
            {
                key: 'issueType',
                name: 'Issue Type',
                resizable: true,
                editor: IssueTypesEditor,
                formatter: IssueTypesFormatter,
                sortable: true
            }
        ];
        return { rows: this.createRows() };
    },

    createRows() {
        let rows = [];
        for (let i = 1; i < 500; i++) {
            rows.push({
                id: i,
                title: 'Title ' + i,
                count: i * 500 / 1000,
                priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
                issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)]
            });
        }

        return rows;
    },

    rowGetter(i) {
        return this.state.rows[i];
    },
    // editable row
    handleRowUpdated({ rowIdx, updated }) {
        // merge updated row with current row and rerender by setting state
        debugger
        const rows = this.state.rows;
        Object.assign(rows[rowIdx], updated);
        debugger
        this.setState({ rows: rows });
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
    render: function () {
        return (<div><Header></Header><div className="container"><ReactDataGrid
            enableCellSelect={true}
            columns={this._columns}
            rowGetter={this.rowGetter}
            rowsCount={this.state.rows.length}
            minHeight={500}
            onRowUpdated={this.handleRowUpdated}
            onGridSort={this.handleGridSort} /></div></div>)
    }
})

export default Datagrid