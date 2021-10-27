# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

Desktop viewport

![Desktop screenshot](images/desktop-screenshot.png)

Mobile viewport

![Mobile screenshot](images/mobile-screenshot.png)

### Links

- Solution URL: [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/mobilefirst-interactive-pricing-component-using-vanilla-javascript-I9oW_G1RR)
- Live Site URL: [Live Site on GitHub Pages](https://sofiaperezm.github.io/interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

I learned how to:

- Get the event target value depending on the input type (range or checkbox) with JavaScript.

Getting the slider range value 
```html
<input id="pageviews-input" type="range" min="0" max="1000000" value="100000">
```
```js
const pageViewsInput = document.querySelector("#pageviews-input");
pageViewsInput.addEventListener("input", handlePageViewsCount);
const pageViewsCount = pageViewsInput.value;
```

Getting the checkbox value 
```html
<input id="billing-toggle" type="checkbox">
```
```js
const billingToggle = document.querySelector("#billing-toggle");
billingToggle.addEventListener("change", calculatePrice);
const billingToggleChecked = billingToggle.checked;
```
- Use the CSS property `list-style-image` to add an icon image as a bullet for `<li>` elements.

```css
.benefits-list {
    list-style-image: url("images/icon-check.svg");
}
```

- Change the order of a flex item using the property `order` from Flexbox.

- Use the WebKit CSS extensions to style the range slider and the checkbox items.

- Use almost all the (really handy) attributes from the `<input>` tag in HTML.

- Use the `<ouput>` tag in HTML (I didn't know that this tag existed before this challenge).

### Continued development

I would like to get a deeper understanding of the WebKit CSS extensions, and also, I would like to use a CSS preprocessor, like SASS in the next challenge.

### Useful resources

- [Flex Cheatsheet](https://yoksel.github.io/flex-cheatsheet/) - This is an amazing reference guide to learn about Flexbox.
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - Similar to the item above, this is a really great article to reference when working with Grid.
- [JavaScript and the DOM](https://www.udacity.com/course/javascript-and-the-dom--ud117) - This is a free course from Udacity and it was really helpful.
- [<input type="range">](https://developer.mozilla.org/es/docs/Web/HTML/Element/input/range) - This documentation from MDN Web Docs help me to understand how to take advantage of the attributes in the input element with `type="range"` in HTML.
- [How TO - Range Sliders](https://www.w3schools.com/howto/howto_js_rangeslider.asp) - This text-based tutorial from W3schools show me a starting point of how to style a range slider element.
- [How TO - Toggle Switch](https://www.w3schools.com/howto/howto_css_switch.asp) - This text-based tutorial from W3schools show me basic examples of how to style a toggle switch element.

## Author

- Frontend Mentor - [@sofiaperezm](https://www.frontendmentor.io/profile/sofiaperezm)
- [Linkedin](https://www.linkedin.com/in/sofiaperezmantilla/)
