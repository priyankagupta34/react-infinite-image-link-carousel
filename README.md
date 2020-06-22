# star-based-rating

[![npm version][npm-main]][npm-main]
[![license][license]][license]


## Install

```bash
npm install react-infinite-image-link-carousel --save
```

## Demo

<!-- <a href="https://imgflip.com/gif/45z92n"><img src="https://imgflip.com/gif/45z92n" title="made at imgflip.com"/></a> -->
<div style="width:100px;max-width:100%;"><div style="height:0;padding-bottom:27%;position:relative;"><iframe width="100" height="27" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/45z92n"></iframe></div><p><a href="https://imgflip.com/gif/45z92n">via Imgflip</a></p></div>



## Props

<small><b>I have kept minimal configurations. 
Less configurations Less confusions.</b></small>

#
<small><b>How simple is this !! </b></small> :blush:
#

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactInfiniteImageLinkCorousal from 'react-infinite-image-link-carousel'

class App extends React.Component {
      constructor(props) {
        super(props)

        <!-- this is the format of imagelist that i need
            You need to provide image location, along with the link you want to go to, else you can keep '#' -->
        this.state = {
            imgList: [
                { image: 'imgs/2.jpg', href: '#' },
                { image: 'imgs/5.jpg', href: '#' },
                { image: 'imgs/6.jpg', href: '#' },
                { image: 'imgs/7.jpg', href: '#' },
                { image: 'imgs/8.jpg', href: '#' },
                { image: 'imgs/9.jpg', href: '#' },
                { image: 'imgs/10.jpg', href: '#' }
            ]
        }
    }

    render() {
        return (
            <div>
                <ReactInfiniteImageLinkCorousal 
                    imageList={this.state.imgList}  // Imagelist in the above format is required, rest i'll take care
                    autoInfiniteSlider={false}         // True if you want auto-slide function else false
                    infiniteSlideTimeScaleInMs={5000}     // Mention totals seconda after which slide should happen
                    heightOfImage={'50vh'} />        // Height of images or corousel
            </div>
        )
    }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

**MIT Licensed**

#
:smiley:

[npm-main]: https://badge.fury.io/js/react-infinite-image-link-carousel.svg
[license]: https://img.shields.io/apm/l/react


    
