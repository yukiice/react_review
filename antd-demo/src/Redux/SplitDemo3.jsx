import React, { PureComponent } from "react";
import axios from 'axios'
import { connect } from "react-redux";

import { Button } from "antd";
import { addAction, subAction, addNullAction,changeBannersAction,changeRecommendsAction } from "../flow/actionCreators";
class SplitDemo3 extends PureComponent {
    componentDidMount() {
        axios({
            url:'http://123.207.32.32:8000/home/multidata'
        }).then(res=>{
            const data = res.data.data
            console.log(data);
            this.props.changeBanners(data.banner.list)
            this.props.changeRecommends(data.recommend.list)
        })
    }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <br />
        <h2>当前计数：{this.props.count}</h2>
        <br />

        <Button type="primary" onClick={() => this.props.addFiveClick(5)}>
          +5
        </Button>
        <br />
        <Button onClick={() => this.props.delFiveClick(5)}>-5</Button>
        <br />
        <Button type="danger" onClick={() => this.props.addOneClick()}>
          +1
        </Button>
        <br/>
        <h2>Banners</h2>
        <div>
        {
            this.props.banners.map((item,index)=>{
                return  <li key={index}>
                    <div>
                        {item.title}
                    </div>
                    <img src={item.image} alt=""/>
                </li>
            })
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      count: state.count,
      banners: state.banners,
      recommend: state.recommends
  }
};

const mapDispatchToProps = (dispatch) => ({
  addFiveClick() {
    dispatch(addAction());
  },
  delFiveClick(){
    dispatch(subAction());
  },
  addOneClick() {
    dispatch(addNullAction());
  },
  changeRecommends(recommends){
      dispatch(changeRecommendsAction(recommends))
  },
  changeBanners(banners){
      dispatch(changeBannersAction(banners))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SplitDemo3);
