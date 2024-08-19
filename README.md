# Neu.js Documentation

**Owned and Copyleft/Copyrighted by Futr Team**  
*WEBOPL: Unauthorized copies are neglected. Please follow the license to avoid lawsuits.*

---

## Table of Contents

1. [Overview](#overview)
2. [Functions](#functions)
   - [addNeu](#addneu)
   - [setSEO](#setseo)
   - [setViewport](#setviewport)
   - [Element Manipulation](#element-manipulation)
     - [el](#el)
     - [elClass](#elclass)
     - [elAddclass](#eladdclass)
     - [elRemClass](#elremclass)
     - [elTogClass](#eltogclass)
     - [elAt](#elat)
     - [elRemAt](#elremat)
     - [elId](#elid)
   - [Utility Functions](#utility-functions)
     - [uuid](#uuid)
     - [ran](#ran)
   - [File Handling Functions](#file-handling-functions)
     - [newFile](#newfile)
     - [openFile](#openfile)
     - [readFile](#readfile)
     - [displayFile](#displayfile)

---

## Overview

Neu.js provides essential functions for web-based applications, including SEO settings, element manipulation, and file handling. Designed with flexibility in mind, it enables dynamic web content creation, enhanced user experiences, and easy file operations.

---

## Functions

### `addNeu`
Adds a stylesheet to the document from an external source.

**Usage:**
```js
addNeu();
```

### `setSEO`
Sets SEO-related meta tags dynamically.

**Parameters:**
- `title` (string): The title of the page.
- `description` (string): The meta description.
- `keywords` (string): The meta keywords.
- `canonicalUrl` (string): The canonical link.

**Usage:**
```js
setSEO("Page Title", "Description here", "keywords, here", "https://example.com");
```

### `setViewport`
Sets the viewport meta tag for responsive design.

**Usage:**
```js
setViewport();
```

---

## Element Manipulation

### `el`
Creates and appends a new element to a specified parent element.

**Parameters:**
- `name`: Name of the HTML element to create (e.g., `'div'`).
- `par`: Parent element selector (e.g., `'#parent'`).
- `val`: Text content of the element.
- `clas`: Class name(s).
- `id`: ID for the element.
- `at`: Attribute name.
- `atval`: Attribute value.

**Usage:**
```js
el({name: 'div', par: 'body', val: 'Hello', clas: 'my-class', id: 'el-1', at: 'data-role', atval: 'admin'});
```

### `elClass`
Sets a class for an existing element.

**Parameters:**
- `name`: Element selector.
- `clas`: Class name(s).

**Usage:**
```js
elClass({name: 'div', clas: 'my-new-class'});
```

### `elAddclass`
Adds a class to an existing element.

**Parameters:**
- `name`: Element selector.
- `clas`: Class name(s).

**Usage:**
```js
elAddclass({name: 'div', clas: 'additional-class'});
```

### `elRemClass`
Removes a class from an existing element.

**Parameters:**
- `name`: Element selector.
- `clas`: Class name(s).

**Usage:**
```js
elRemClass({name: 'div', clas: 'remove-class'});
```

### `elTogClass`
Toggles a class on an element.

**Parameters:**
- `name`: Element selector.
- `clas`: Class name(s).

**Usage:**
```js
elTogClass({name: 'div', clas: 'toggle-class'});
```

### `elAt`
Sets an attribute for an element.

**Parameters:**
- `name`: Element selector.
- `at`: Attribute name.
- `val`: Attribute value.

**Usage:**
```js
elAt({name: 'div', at: 'data-role', val: 'admin'});
```

### `elRemAt`
Removes an attribute from an element.

**Parameters:**
- `name`: Element selector.
- `at`: Attribute name.

**Usage:**
```js
elRemAt({name: 'div', at: 'data-role'});
```

### `elId`
Sets the ID of an element.

**Parameters:**
- `name`: Element selector.
- `id`: ID value.

**Usage:**
```js
elId({name: 'div', id: 'new-id'});
```

---

## Utility Functions

### `uuid`
Generates a UUID.

**Usage:**
```js
const id = uuid();
```

### `ran`
Generates a random number.

**Parameters:**
- `n` (number): The range of random numbers.

**Usage:**
```js
const randomNum = ran(100);
```

---

## File Handling Functions

### `newFile`
Creates and downloads a new file with specified content.

**Parameters:**
- `filename`: Name of the file.
- `filetype`: File type (e.g., `'text/plain'`).
- `data`: File content.

**Usage:**
```js
newFile({filename: 'example.txt', filetype: 'text/plain', data: 'File content here.'});
```

### `openFile`
Prompts the user to open a file.

**Returns:**
A `Promise` that resolves with the file content.

**Usage:**
```js
openFile().then(fileData => console.log(fileData));
```

### `readFile`
Reads a file and performs a callback function.

**Parameters:**
- `does`: A callback function to handle the file data.

**Usage:**
```js
readFile(fileData => console.log(fileData));
```

### `displayFile`
Reads and displays file content in a specified element.

**Parameters:**
- `where`: Element selector where the file data will be displayed.

**Usage:**
```js
displayFile('#fileDisplayArea');
```

---

### Neu CSS Documentation

Neu CSS is a minimalistic yet highly customizable CSS framework designed for fast, responsive, and aesthetic styling. It focuses on utilizing utility-based classes and variables for colors, typography, layouts, and spacing.

---

#### 1. **Font Imports**
Neu CSS uses Google Fonts for typography. You can import various fonts based on your design requirements:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
```

Fonts like `Poppins`, `Montserrat`, `Playfair Display`, `Unbounded`, and many others are imported to offer a diverse range of styles.

#### 2. **Font Faces**
Custom font usage with `@font-face` allows you to include locally hosted fonts.

```css
@font-face {
  font-family: 'Agr';
  src: url('agr.otf') format('opentype');
}
```

#### 3. **Color Variables**
Neu CSS defines a set of color variables for light and dark themes. These variables can be used throughout your styles to maintain consistency.

**Primary Colors:**
```css
--red: #EF7C8E;
--blue: #305bc7;
--yell: #fcda6a;
--green: #50de89;
--pink: #F1CCD7;
--vio: #bb78fa;
--matte: #fafafa;
--black: #101020;
```

**Secondary Colors (Darker Shades):**
```css
--red2: #661e28;
--blue2: #0d1938;
--yell2: #807142;
--green2: #278c50;
--pink2: #8c5f6d;
--vio2: #492d63;
--matte2: #ebebeb;
--black2: #505060;
```

#### 4. **Global Reset and Default Styling**
Neu CSS resets margins, borders, and other default styles to create a uniform base.

```css
body {
  margin: 0px;
  background-color: var(--black);
  color: var(--matte);
}
```

All elements inherit a font size, line height, and font family:
```css
* {
  font-size: 16px;
  line-height: 1.3em;
  font-family: "Poppins", sans-serif;
  word-wrap: break-word;
  user-select: none;
}
```

#### 5. **Scrollbar Customization**
The appearance of the scrollbar can be customized using Webkit-specific selectors.

```css
::-webkit-scrollbar { width: 5px; height: 8px; }
::-webkit-scrollbar-thumb { background: #ffffff; }
::-webkit-scrollbar-track { background-color: transparent; }
```

#### 6. **Utility Classes**
Neu CSS provides a wide range of utility classes for styling components quickly. These classes help with color, layout, and spacing management.

- **Color Classes**:
  - `[m]`: Color set to matte (default light color)
  - `[r]`: Color set to red
  - `[l]`: Color set to blue
  - `[g]`: Color set to green
  - `[y]`: Color set to yellow
  - `[p]`: Color set to pink
  - `[v]`: Color set to violet
  
  Example usage: 
  ```html
  <div r>This is red text</div>
  ```

- **Outline and Box Shadow**:
  - `[mol]`, `[rol]`, `[lol]`: Outline the element with the respective color.
  - `[msh]`, `[rsh]`, `[gsh]`: Adds a shadow to the element with respective color.

#### 7. **Hide Elements**
Hides any element from the view completely:
```css
[hide], .hide {
  display: none;
  visibility: hidden;
  width: 0;
  height: 0;
  opacity: 0%;
}
```

#### 8. **Layout and Flexbox Utilities**
Neu CSS simplifies layout management with utility classes for flexbox and grid systems:

- **Flexbox**:
  - `[row]`: Flexbox row layout
  - `[column]`: Flexbox column layout
  - `[item]`: Centralized flex item
  
  Example:
  ```html
  <div row>
    <div>Item 1</div>
    <div>Item 2</div>
  </div>
  ```

- **Grid System**:
  - `[grid]`: Simple 3-column grid system
  - `[grid="2"]`, `[grid="3"]`: Define 2 or 3-column layouts with gaps.

#### 9. **Spacing Utilities**
Neu CSS provides predefined margin and padding classes, simplifying vertical and horizontal spacing.

- **Margin**:
  - `[small-my]`: Small margin (1rem) on top and bottom.
  - `[mid-my]`: Medium margin (2rem) on top and bottom.
  - `[big-my]`: Large margin (3rem) on top and bottom.

- **Padding**:
  - `[small-p]`: Small padding (1rem) on all sides.
  - `[mid-p]`: Medium padding (2rem) on all sides.
  - `[big-p]`: Large padding (3rem) on all sides.

---

### **Usage Examples**

1. **Basic Text Styling**:
   ```html
   <div r>This text is styled in red</div>
   <div y>This text is styled in yellow</div>
   ```

2. **Layout with Flexbox**:
   ```html
   <div row>
     <div r>Item 1</div>
     <div g>Item 2</div>
   </div>
   ```

3. **Grid Layout**:
   ```html
   <div grid="3">
     <div m>Grid Item 1</div>
     <div l>Grid Item 2</div>
     <div y>Grid Item 3</div>
   </div>
   ```

---

Neu CSS aims to provide a consistent, fast, and scalable way to style websites using predefined color schemes, layout systems, and utility classes. Customize your project using the extensive collection of utility-first classes, or extend it with custom rules as needed.
