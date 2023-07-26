---
layout: page
title: 'Understanding Templates'
permalink: /templates
nav_order: 4
---

# Templates

FanConnect provides many templates out-of-the-box.  Templates are pre-designed blueprints that serve as a starting point for creating new content.  

Templates are a combination of HTML, CSS, and Javascript.  We've written Templates using vanilla Javascript, Typescript, and [Preact](https://preactjs.com/), a lightweight alternative to React.  We have provided examples of both [Javascript](https://github.com/fanconnect/developer/tree/main/examples/javascript) and [Preact](https://github.com/fanconnect/developer/tree/main/examples/preact) Templates.

## Animation
Most of our Templates use animation, specifically [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations).  We do not use Javascript libraries for animation, and **highly recommend** you do the same.  One of our favorite CSS animation libraries is [animate.css](https://animate.style/).

## Build
Templates are bundled with [Parcel](https://parceljs.org/).  Each Template's `package.json` already includes the appropriate development dependencies.

To build your Template run the following:
```shell
yarn build
```

## Code
Templates are HTML, CSS, and Javascript.  It's up to you to decide how you want to develop your Template.  If you're comfortable using [Preact](https://preactjs.com/), then great.  If not, that's ok you can use Javascript as well.

We have provided examples of both [Javascript](https://github.com/fanconnect/developer/tree/main/examples/javascript) and [Preact](https://github.com/fanconnect/developer/tree/main/examples/preact) Templates.

## Configuration

If your template allows for customization using the FanConnect CMS it will require a configuration file in the root folder, `config.json`.

Here's an example `config.json`:

```json
{
  "aspectRatio": "1920/1080",
  "defaultDuration": 20,
  "durationReadonly": false,
  "params": [
    {
      "name": "memberImage",
      "label": "Member Image",
      "kind": "image",
      "description": "Picture of the member (549px wide by 569px high)",
      "nullable": false
    },
    {
      "name": "memberName",
      "label": "Member Name",
      "kind": "string",
      "description": "Left Member Display Name",
      "nullable": true,
      "defaultValue": "John Smith",
      "group": "member-info"
    },
  ],
  "paramGroups": [
    {
      "name": "member-info",
      "label": "Member Information",
      "description": "Customizable information about the member"
    }
  ]
}
```

### Configuration Parameters

| Key           | Description       
|:-------------       |:------------------
| **aspectRatio**         | The aspect ratio of your Template, typically this will be `1920x1080`.
| **defaultDuration**     | Default duration of your Template.
| **durationReadonly**    | Determines if the duration will be editable in the FanConnect CMS.  We suggest setting this to `true`.
| **params**              | Array of options that are customizable when using this Template in the FanConnect CMS.<br><br>For more information see [Template Parameters](#template-parameters).
| **paramGroups**         | Array of groups that organize options when customizing this Template in the FanConnect CMS.<br><br>For more information see [Template Parameter Groups](#template-parameter-groups).

### Template Parameters

Template parameters determine what may be customized for your Template using the FanConnect CMS.

| Key           | Description       
|:-------------       |:------------------
| **name**         | Name of this Template parameter.
| **label**     | Human-friendly label of this Template parameter which is displayed in the FanConnect CMS.
| **kind**    | Type of Template parameter.  Supported values: `boolean`, `color`, `float`, `image`, `integer`, `media`, `string`, `video`
| **description**     | Description of this Template parameter which is displayed in the FanConnect CMS as hover help.
| **nullable**     | Determines if the value of this Template parameter may be null.
| **defaultValue**     | Default value of this Template parameter.
| **group**     | Template parameter group in which this Template parameter belongs.<br><br>For more information see [Template Parameter Groups](#template-parameter-groups).

### Template Parameter Groups

Template parameter groups provide a mechanism to logically group similar parameters together.  For example, let's say your Template has 10 parameters, 3 are a person's first name, middle name, and last name.  In this case it makes sense to group these parameters together in a group called `Name`.

| Key           | Description       
|:-------------       |:------------------
| **name**         | Name of this Template parameter group.
| **label**     | Human-friendly label of this Template parameter group which is displayed in the FanConnect CMS.
| **description**     | Description of this Template parameter group which is displayed in the FanConnect CMS as hover help.

## Life Cycle
FanConnect Templates are loaded into a `iframe` by the FanConnect device software.  There are various phases during this process that are important to understand. 

| Phase           | Description       
|:-------------       |:------------------
| **initialize**         | All the tasks required to be shown initially are complete. For example, teams and initial scores have been fetched. At this point, the template should be ready to be displayed on screen. However, templates are potentially initialized well before they are shown/started, so tasks like periodic fetching of data should start now.
| **start**     | The template is showing on the screen. Timers for things like flipping pages should start now.
| **stop**     | This should be used rarely. The primary use case for this event is for native videos right now. Notably, since the template lives in an iframe there is no need to do any JS resource cleanup here. Since the iframe is destroyed and there are no external references to it, all resources inside the iframe JS context will be GC’ed.

## Preview
We provide an [NPM package](https://www.npmjs.com/package/@fanconnecttv/preview) that allows you to easily preview your Template as it's being developed.   

{: .important-title }
> Node version >= 16.17.1 is required

To preview your Template, we recommend installing the NPM package as a dev dependency: 

```shell
# npm
npm install --save-dev @fanconnecttv/preview

# yarn
yarn add -D @fanconnecttv/preview
```

Now run:

{: .important-title }
> Template preview requires your Template to have been built.  See the [Build](#build) section for more information.

```shell
# npm
npx preview

# yarn
yarn preview
```
---

Now that you understand how Templates work, run the examples!

[Examples](/examples){: .btn }
