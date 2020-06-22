# react-infinite-image-link-carousel

[![npm version][npm-main]][npm-main]
[![license][license]][license]


## Install

```bash
npm install react-infinite-image-link-carousel --save
```

## Demo

<!-- <a href="https://imgflip.com/gif/45z9ft"><img src="https://imgflip.com/gif/45z9ft" title="made at imgflip.com"/></a> -->
<a href="hji.gif"><img src="hij.gif" title="made at ezgif.com"/></a>



## Props

<small><b>I have kept minimal configurations. 
Less configurations Less confusions.</b></small>

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactInfiniteImageLinkCorousal from 'react-infinite-image-link-carousel'

class App extends React.Component {
      constructor(props) {
        super(props)

        // this is the format of imagelist required for this package
        // You need to provide image location, along with
        // the link you want to go to, else you can keep '#'
            
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


    
