# react-infinite-image-link-carousel

[![npm version][npm-main]][npm-main]
[![license][license]][license]
[![size][size]][size]
[![minsize][minsize]][minsize]


## Install

```bash
npm install react-infinite-image-link-carousel --save
```

## Demo

<a href="https://imgflip.com/gif/45zna3"><img src="https://i.imgflip.com/45zna3.gif" title="made at imgflip.com"/></a>


## Props

<small><b>I have kept minimal configurations. 
Less configurations Less confusions.</b></small>

<ul>
    <li>imageList: It should be an array of javascript objects.
     Each object with image and href properties. 'image' object should contain location, 
     href should contain link to image. Leave black or '#' if you don't want any links </li>
    <li>autoInfiniteSlider: Provide true if you want aut0 slide to happen else false is enough</li>
    <li>infiniteSlideTimeScaleInMs: Provide a timer after which image should move automatically.
    This is linked with 'autoInfiniteSlider'</li>
    <li>heightOfImage: This is height of image or corousel</li>
</ul>

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
[size]: https://img.shields.io/bundlephobia/min/react-infinite-image-link-carousel
[minsize]: https://img.shields.io/bundlephobia/minzip/react-infinite-image-link-carousel


    
