# Responsive Development


## Description

Going over terms and best practices when making applications that have to be flexible to multiple screen sizes. This project is meant as a learning aid for responsive development. This includes discussion of `@media` queries, `<meta>` tags, breakpoint sizing, and mobile first styling.

## Learning Material

### Setting the Viewport

Responsive Viewport `<meta>` tag is used to optimize pages for a variety of devices. It is placed in the `<head>` of the HTML document. This tag gives the browser instructions on how to control the page's dimensions and scaling.

* Attribute of `name="viewport"` calls out that we are defining settings for the viewport
* Attribute of `content` controls the viewport settings
    * `width=device-width` - matches the screen's width in device-independent pixels
    * `initial-scale=1` - establishes a 1:1 relationship between CSS pixels and device-independent pixels
* If you disable scaling it will effect your sites accessibility

```html
<head>
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
</head>
```

### Important Defaults & Resets

There are certain elements that need some base styling when working in a responsive environment. This is not a lot of changes but are crucial changes to the layout.

* For the `html` and `body` elements we set `height: 100%` which allows us to fully cover the entire webpage with background colors or images.

    ```css
    html,
    body {
        height: 100%;
    }
    ```

* The `img` element is one of the most important as all images used will enherit their own sizing. For this we set `max-width: 100%` so that the `img` will use it's own sizing until its parent element is smaller than it is and it will then be restricted to the full width of that container. The CSS declaration `display: inline-block;` is used to eliminate spacing caused by the fact that `<img>` tags are inline elements. 

    ```css
    img {
        max-width: 100%;
        display: inline-block;
    }
    ```

* Although not specific to responsive development your styling for background, font-family, and base font-size should be set on the `<body>` tag of your application.

    ```css
    body {
        margin: 0;
        background: #c5c6c7 url("/images/squared_metal.png") repeat;
        font-family: "Open Sans", "Oxygen", "Droid Sans", "Helvetica Neue", sans-serif;
    }
    ```

### Fluid VS Fixed Dimensions

A fixed dimension is a unit of measurement set on your element that sets the dimension to a specific immovable size. This set size will not adjust to the browser window or its parent container. There is a style module that is rather common to websites typically referred to as a **wrapper** or **container** and before responsive websites these style modules often had a very specific fixed width set on them. Let's take a look at what this style module looks like with a fixed width.

1. Navigating to [/#/fluid-fixed](http://localhost:3000/#/fluid-fixed) we'll see some content that is nicely layed out on the page for us.
1. In the markup of the `FluidFixedPage.js` component we have a nondescript `<div>` with some `<p>` tags inside of it. Our `<div>` already has a class of `.wrapperDemo` on it with some fixed width styling.

    ```html
    <div className="wrapperDemo">
        // Multiple <p>s listed as content
    </div>
    ```

1. If we try resizing our browser we can see that at some point the content of our `.wrapperDemo` becomes wider than the browser window causing the browser window to scroll from side to side.
1. This is because we have a fixed width of `960px` set to the `.wrapperDemo` class.

    ```css
    .wrapperDemo {
        width: 960px;
    }
    ```

1. How can we change it so that we scale with the browser window?
    - We change the dimensions of our wrapper so that they are fluid and will adjust relationally to our window or parent element.
1. Let's add the already prepared class modifier of `.wrapper_fluid` and see what happens.
    - The content is now restricted to the full width of the window/parent element and will never be larger than that. Looking at the CSS we can see that the only thing that the modifier did was change the width to `100%`. This unit of measurement is relational and will maintain fluidity by always adjusting to fit the parent element.
    
    ```css
    .wrapperDemo_fluid {
        width: 100%;
    }
    ```

1. But what if we wanted the content to stay at the `960px` width unless the window got too small and then we wanted it to be smaller?
    - Instead of setting `width: 100%;` let's instead set `max-width: 100%`.
    - Now our content maintains its `960px` width until the size of the wind drops below `960px`.

    ```css
    .wrapperDemo_fluid {
        max-width: 100%;
    }
    ```

1. These fluid sizes are what we use to build out all responsive layout in our CSS. If your application is responsive and there is a fixed sizing somewhere it should either have an override or a very good reason for being there.

### Media Block Fluid

When setting up styling for most elements on your webpage you should avoid using fixed/absolute dimensions. An absolute dimension will not scale as the size of the device scales and may caus unwanted layout interruptions and inaccessible content. For a demonstration we will use the `MediaBlock` component as an example. In `src/components/MediaBlock/MediaBlock.css` on line #18 - 22:

If we change the width to `400px` it will become an absolute value. When scaling the browser we can see what effects this has.

```css
.mediaBlock {
    width: 400px;
    /* ADDITIONAL PROPERTIES */
}
```

Changing the width back to `100%` it will now be fluid and adjust its size based off of it's containing parent element.

```css
.mediaBlock-media {
    width: 100%;
    padding: 0 0 10px 0;
    box-sizing: border-box;
}
```

### Mobile First

We start with some base styling to support our mobile view and will work our way up from there. When a page or component is styled out it is styled for the mobile screen size. Most things will be stacking. We will go through the layout and each component as though it is only developed for mobile and then enhance our styles from there to support additional breakpoints.

The additional breakpoints that we create are supporting three basic devices Phone, Tablet, and Desktop. Our Tablet breakpoint is going to be a little special because we need a Portrait and Landscape orientation. So our final device specific breakpoints are as shown below. In some special cases you may create a breakpoint to handle extra large desktop monitors.

**Device Breakpoints:**

* Phone
* Tablet Portrait
* Tablet Landscape
* Desktop

With these devices in mind we would examine the best pixel sizes to cover our **Supported Devices** outlined in the scope document.

**Pixel Based Breakpoints:**

* Phone (max-width: 599px)
* Tablet Portrait (min-width: 600px)
* Tablet Landscape (min-width: 900px)
* Desktop (min-width: 1200px)

Chances are by the time you have made adjustments for the Tablet Landscape breakpoint you won't need many more major adjustment at the Desktop breakpoint which is perfectly alright. The purpose of building on top of the styling from previous breakpoints is so that you can potentially write less styling.


## Prerequisites

- Node.js (*recommend Node Version Manager, `nvm`, for install*)
- PostgreSQL (*recommend Postico for testing*)


## Installation

The follow are instructions on setting up, installing, and running the local development environment


### Setting Up the Database

- in terminal from any directory run: `createdb fantastic_bestiary`
- from your favorite GUI connect to the `fantastic_bestiary` database and run the queries from `/database/init.js`
- in order to load up some sample data run the queries from `/database/data.js`


### Local Development

*All terminal commands in this section should be run from the root of the project directory.*

- terminal: `npm install`
- terminal: `npm run server`
- in new terminal: `npm run client`
