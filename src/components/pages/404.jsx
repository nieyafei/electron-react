import React, { Component } from 'react';
import img_404 from "../../style/imgs/404.png";

class Main extends Component {
    componentDidMount(){}
    render() {
        return (
            <div className={"page-section-oth"}>
              <div className="page-404">
                <div>
                    <img src={img_404} alt={""} /><br /><br />
                    页面找不到了
                </div>
              </div>
            </div>
        )
    }
}

export default Main;
