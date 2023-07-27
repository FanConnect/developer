---
layout: page
title: 'FAQ'
permalink: /faq
nav_order: 6
---

# Frequently Asked Questions

## 1. What is a Template?
FanConnect TV Templates are a combination of HTML, CSS, and Javascript that run on a FanConnect device.  For more information about Templates, see the [Templates](./templates) section.

## 2. Can I use `npm` instead of `Yarn`?
Yes, you can use `npm` (Node Package Manager) instead of `Yarn` as your package manager for FanConnect Templates. Both `npm` and `Yarn` are popular package managers used in the Node.js and JavaScript ecosystems to manage dependencies, scripts, and other project-related tasks.

## 3. What is Preact?
Preact is a lightweight JavaScript library for building user interfaces (UIs). It is considered a "fast 3kB alternative" to React, as it shares many of the same concepts and APIs with React but comes with a smaller bundle size, making it suitable for performance-critical applications or projects with limited resources.

## 4. Is `asdf` required?
No, [asdf](https://asdf-vm.com/) isn't required but we strongly recommend using it to manage runtime versions in one place. 

## 5. What version of `node` is required?
Node version >= 16.17.1 is required.  For more information about prerequisities, see the [Prerequisites](./prereqs) section

## 6. Can I use a bundler other than `parcel`?
It's possible you can use a bundler other than `parcel`, however we haven't tried them and we don't recommend it.

## 7. Can I use `Typescript`?
Of course you can use `Typescript`!  In fact, we've included an example to help get you started, [Typescript](https://github.com/fanconnect/developer/tree/main/examples/typescript).

## 8. Which Javascript animation libraries can I use, e.g. `gsap`?
We strongly suggest you do not use Javascript animations in your custom FanConnect TV content.  We prefer CSS animations, which are often more performant because they are handled by the browser's rendering engine.

## 9. Can I use custom fonts?
Yes!  Using custom fonts is encouraged to make your FanConnect TV content your own.  For more information see the [Template Font](./templates#fonts) section.

## 10. Can I create different size Templates?
Of course!  Technically there's no restriction on the size of the Template.  It just depends on your requirements.  For example, your custom FanConnect TV content may need to appear on a particular area of the TV screen with dimensions 500x500.  In this case you would simply need to set the size correctly in `config.json` and in your custom CSS.  For more information see the [Template Sizing](./templates#sizing) section.




