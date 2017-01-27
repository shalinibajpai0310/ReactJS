import React from 'react';
import D3PieChart from './DonutChart.jsx'
import BarChart from './BarChart.jsx';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <div >
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                            <div className="panel panel-default tiles">
                                <div className="panel-heading">
                                    <h3 className="panel-title tile-box-title">
                                        Inbox
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <table>
                                        <tbody className="table-display">
                                            <tr>
                                                <td><i className="fa fa-envelope-o tile-icon" aria-hidden="true"></i></td>
                                                <td className="tile-link-font"><a href="">12</a><div><small>Messages</small></div></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-file-text-o tile-icon" aria-hidden="true"></i></td>
                                                <td className="tile-link-font"><a href="">06</a><div><small>Upcoming Task</small></div></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="panel panel-default tiles">
                                <div className="panel-heading">
                                    <h3 className="panel-title tile-box-title">
                                        Facebook Proposal
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <D3PieChart data={data}></D3PieChart>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                            <div className="panel panel-default tiles">
                                <div className="panel-heading">
                                    <h3 className="panel-title tile-box-title">
                                        Performance by Region
                                        <div><small>Last 7 Days</small></div>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-md-6 dd-container">
                                        <div className="form-group">
                                            <select className="dropdown-tile3 form-control" id="sel1">
                                                <option>EMEA</option>
                                                <option>Americana</option>
                                                <option>APJ</option>
                                                <option>LA</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                            <BarChart></BarChart>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default tiles">
                                <div className="panel-heading">
                                    <h3 className="panel-title tile-box-title">
                                        Margin Monitoring
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div >
                                        <div className="col-md-6">
                                            <table className="table-margin">
                                                <thead><tr>Your Sales Territory</tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Projected Profit</td>
                                                        <td>90K USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Current Margin</td>
                                                        <td>32%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-6">
                                            <table className="table-margin">
                                                <thead><tr>Your Contracts</tr></thead>
                                                <tbody>
                                                    <tr>
                                                        <td>HSBC</td>
                                                        <td>20K USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Google</td>
                                                        <td>22K USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Facebook</td>
                                                        <td>18K USD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                            <div className="panel panel-default tiles">
                                <div className="panel-heading">
                                    <h3 className="panel-title tile-box-title">
                                        Quick Links
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div >
                                        <div className="col-md-12 quick-link-title"><a href="">Build Offer</a></div>
                                        <div className="col-md-12 quick-link-title"><a href="">Document Preparation</a></div>
                                        <div className="col-md-12 quick-link-title"><a href="">Margin Simulation</a></div>
                                    </div>

                                </div>
                            </div>

                            <div className="panel panel-default tiles">
                                <div className="panel-heading">
                                    <h3 className="panel-title tile-box-title">
                                        Alerts
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div >
                                        <div className="col-md-12 alert-link-title">
                                            <a href="">FF12368</a>
                                            <div><small>Price Increased</small></div>
                                        </div>
                                        <div className="col-md-12 alert-link-title">
                                            <a href="">HH12487</a>
                                            <div><small>New Route promotion price 0.154</small></div>
                                        </div>
                                        <div className="col-md-12 alert-link-title">
                                            <a href="">GG14579</a>
                                            <div><small>Price Increased</small></div>
                                        </div>
                                        <div className="col-md-12 alert-link-title">
                                            <a href="">RE88948</a>
                                            <div><small>Price Increased</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default tiles">
                                <div className="panel-heading">
                                    <h3 className="panel-title tile-box-title">
                                        Offer Management
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <div >
                                        <div className="col-md-9 col-sm-9 alert-link-title">
                                            <a href="">Price Change Notification</a>
                                        </div>
                                        <div className="col-md-3 col-sm-3 alert-link-title link-align">
                                            <a href="">04</a>
                                        </div>
                                        <div className="col-md-12 col-sm-12 alert-link-title">
                                            <a href="">Recent Offers</a>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <table className="table-offers table-responsive">
                                                <tbody>
                                                    <tr><td><small>Airtel 3G pack</small></td><td><small>submitted</small></td></tr>
                                                    <tr><td><small>Vodafone Plan</small></td><td><small>under review</small></td></tr>
                                                    <tr><td><small>Thanksgiving offer</small></td><td><small>accepted</small></td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                        </div>
                    </div>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
        );
    }
}

var data = [
    { name: "Completed", count: 20 },
    { name: "Pending", count: 30 }
];
export default Dashboard;