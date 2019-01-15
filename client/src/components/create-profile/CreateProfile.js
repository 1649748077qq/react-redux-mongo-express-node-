import React, { Component } from "react";
import TextFieldGroup from "../../common/TextFieldGroup";
class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      wechat: "",
      QQ: "",
      tengxunkt: "",
      wangyikt: "",
      errors: {}
    };
  }
  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">创建个人信息</h1>
              <p className="lead text-center">
                填写您的个人资料, 让我们更多的了解你!
              </p>
              <small className="d-block pb-3">* 表示必填项</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateProfile;
