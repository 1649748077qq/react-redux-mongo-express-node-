import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/proFileActions";
import Spinner from "../../common/Spinner";
class Dashboard extends Component {
  componentDidMount() {
    //调用action 请求数据
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;

    //判断profile是否为空或者loading是否为真
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //检查对象中是否有数据
      if (Object.keys(profile).length > 0) {
        //有数据
        dashboardContent = <h4>展示数据</h4>;
      } else {
        //用户已经登录，但没有任何信息
        dashboardContent = (
          <div>
            <p className="lead text-muted">欢迎{user.name}</p>
            <p>没有任何相关信息，请添加一些你的个人信息</p>
            <Link className="btn btn-lg btn-info" to="/create-profile">
              创建个人信息
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.PropTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
