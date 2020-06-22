import React, { Component } from 'react'
import './index.css'

export default class ReactInfiniteImageLinkCorousal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: [],
            img_1: 0,
            img0: 1,
            img1: 2,
            img2: 3,
            img3: 4
        }
    }
    componentDidMount() {
        if (this.props.autoInfiniteSlider) {
            this.infiniteSlide();
        }
    }


    infiniteSlide() {
        this.clickNext();
        setTimeout(() => {
            this.infiniteSlide();
        }, this.props.infiniteSlideTimeScaleInMs)
    }




    clickNext() {


        setTimeout(() => {
            document.getElementById(this.state.img_1).classList.add('ticktokMux');
            document.getElementById(this.state.img0).classList.add('ticktokRight1');
            document.getElementById(this.state.img1).classList.add('ticktokRight');
            document.getElementById(this.state.img2).classList.add('ticktokRight');
            document.getElementById(this.state.img3).classList.add('ticktokRight2');

        }, 0);

        setTimeout(() => {
            this.setState((state, props) => {
                if (((state.img2 + 1) < props.imageList.length) &&
                    ((state.img1 + 1) < props.imageList.length) &&
                    ((state.img0 + 1) < props.imageList.length) &&
                    ((state.img_1 + 1) < props.imageList.length) &&
                    ((state.img3 + 1) < props.imageList.length)
                ) {
                    state.img_1 = state.img_1 + 1;
                    state.img0 = state.img0 + 1;
                    state.img1 = state.img1 + 1;
                    state.img2 = state.img2 + 1;
                    state.img3 = state.img3 + 1;
                    return state;
                }

                if ((state.img3 + 1) === props.imageList.length) {
                    state.img_1 = props.imageList.length - 4;
                    state.img0 = props.imageList.length - 3;
                    state.img1 = props.imageList.length - 2;
                    state.img2 = props.imageList.length - 1;
                    state.img3 = 0;
                    return state;

                }

                if ((state.img2 + 1) === props.imageList.length) {
                    state.img_1 = props.imageList.length - 3;
                    state.img0 = props.imageList.length - 2;
                    state.img1 = props.imageList.length - 1;
                    state.img2 = 0;
                    state.img3 = 1;
                    return state;
                }
                if ((state.img1 + 1) === props.imageList.length) {
                    state.img_1 = props.imageList.length - 2;
                    state.img0 = props.imageList.length - 1;
                    state.img1 = 0;
                    state.img2 = 1;
                    state.img3 = 2;
                    return state;
                }
                if ((state.img0 + 1) === props.imageList.length) {
                    state.img_1 = props.imageList.length - 1;
                    state.img0 = 0;
                    state.img1 = 1;
                    state.img2 = 2;
                    state.img3 = 3;
                    return state;

                }
                if ((state.img_1 + 1) === props.imageList.length) {
                    state.img_1 = 0;
                    state.img0 = 1;
                    state.img1 = 2;
                    state.img2 = 3;
                    state.img3 = 4;
                    return state;

                }
            })

            document.getElementById(this.state.img_1).classList.remove('ticktokMux');
            document.getElementById(this.state.img0).classList.remove('ticktokRight1');
            document.getElementById(this.state.img1).classList.remove('ticktokRight');
            document.getElementById(this.state.img2).classList.remove('ticktokRight');
            document.getElementById(this.state.img3).classList.remove('ticktokRight2');

        }, 960);
    }

    clickPrev() {


        setTimeout(() => {
            document.getElementById(this.state.img_1).classList.add('ticktokMuxBk');
            document.getElementById(this.state.img0).classList.add('ticktokRight1Bk');
            document.getElementById(this.state.img1).classList.add('ticktokRightBk');
            document.getElementById(this.state.img2).classList.add('ticktokRightBk');
            document.getElementById(this.state.img3).classList.add('ticktokRight2Bk');

        }, 0);

        setTimeout(() => {
            this.setState((state, props) => {
                if (((state.img2 - 1) > -1) &&
                    ((state.img1 - 1) > -1) &&
                    ((state.img0 - 1) > -1) &&
                    ((state.img3 - 1) > -1) &&
                    ((state.img_1 - 1) > -1)
                ) {
                    state.img_1 = state.img_1 - 1;
                    state.img0 = state.img0 - 1;
                    state.img1 = state.img1 - 1;
                    state.img2 = state.img2 - 1;
                    state.img3 = state.img3 - 1;
                    return state;
                }

                if ((state.img3 - 1) === -1) {
                    state.img_1 = props.imageList.length - 5;
                    state.img0 = props.imageList.length - 4;
                    state.img1 = props.imageList.length - 3;
                    state.img2 = props.imageList.length - 2;
                    state.img3 = props.imageList.length - 1;
                    return state;

                }

                if ((state.img2 - 1) === -1) {
                    state.img_1 = props.imageList.length - 4;
                    state.img0 = props.imageList.length - 3;
                    state.img1 = props.imageList.length - 2;
                    state.img2 = props.imageList.length - 1;
                    state.img3 = 0;
                    return state;
                }
                if ((state.img1 - 1) === -1) {
                    state.img_1 = props.imageList.length - 3;
                    state.img0 = props.imageList.length - 2;
                    state.img1 = props.imageList.length - 1;
                    state.img2 = 0;
                    state.img3 = 1;
                    return state;
                }
                if ((state.img0 - 1) === -1) {
                    state.img_1 = props.imageList.length - 2;
                    state.img0 = props.imageList.length - 1;
                    state.img1 = 0;
                    state.img2 = 1;
                    state.img3 = 2;
                    return state;
                }
                if ((state.img_1 - 1) === -1) {
                    state.img_1 = props.imageList.length - 1;
                    state.img0 = 0;
                    state.img1 = 1;
                    state.img2 = 2;
                    state.img3 = 3;
                    return state;
                }
            })

            document.getElementById(this.state.img_1).classList.remove('ticktokMuxBk');
            document.getElementById(this.state.img0).classList.remove('ticktokRight1Bk');
            document.getElementById(this.state.img1).classList.remove('ticktokRightBk');
            document.getElementById(this.state.img2).classList.remove('ticktokRightBk');
            document.getElementById(this.state.img3).classList.remove('ticktokRight2Bk');

        }, 960);
    }

    render() {
        const { img0, img1, img2, img3, img_1 } = this.state;
        const { heightOfImage, imageList } = this.props;
        return (
            <div className="jnh">
                <div className="ingh">
                    <div className="spc">
                        <div onClick={this.clickPrev.bind(this)} className="butgy1" style={{ height: heightOfImage }}>
                            <span className="nhui">&lt;</span>
                        </div>
                        <div onClick={this.clickNext.bind(this)} className="butgy2" style={{ height: heightOfImage }}>
                            <span className="nhui">&gt;</span>
                        </div>
                    </div>
                </div>

                <div className="in" style={{ position: "relative" }}>
                    <div className="widm jk0" id={img_1}>
                        <a href={imageList[img_1].href}>
                            <img src={imageList[img_1].image} className="asimg" alt={imageList[img_1].image} style={{ height: heightOfImage }}></img>

                        </a></div>
                    <div className="widm jk1" id={img0}>
                        <a href={imageList[img0].href}> <img src={imageList[img0].image} className="asimg" alt={imageList[img0].image} style={{ height: heightOfImage }}></img>
                        </a></div>
                    <div className="tfgf jk3" id={img1}>
                        <a href={imageList[img1].href}> <img src={imageList[img1].image} className="asimg" alt={imageList[img1].image} style={{ height: heightOfImage }}></img>
                        </a></div>
                    <div className="widm jk3" id={img2}>
                        <a href={imageList[img2].href}>  <img src={imageList[img2].image} className="asimg" alt={imageList[img2].image} style={{ height: heightOfImage }}></img>
                        </a></div>
                    <div className="widm jk4" id={img3}>
                        <a href={imageList[img3].href}>  <img src={imageList[img3].image} className="asimg" alt={imageList[img3].image} style={{ height: heightOfImage }}></img>
                        </a></div>
                </div>

            </div>
        )
    }
}

