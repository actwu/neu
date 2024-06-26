
/*Owned and Copyleft/Copyrighted by Futr Team | Any unauthorized  copies is neglected
WEBOPL.. Please follow the license to avoid law suits.
*/
window.onbeforeunload = function() {
  return "Do you want to save changes?";
};

function addNeu() {
var cssUrl = "https://actwu.github.io/neu/n.css";
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = cssUrl;
document.head.appendChild(link);
}

function setSEO(title, description, keywords, canonicalUrl) {
document.title = title;
var metaDesc = document.querySelector('meta[name="description"]');
if (!metaDesc) {
metaDesc = document.createElement('meta');
metaDesc.setAttribute('name', 'description');
document.head.appendChild(metaDesc);
}
metaDesc.setAttribute('content', description);

var metaKeywords = document.querySelector('meta[name="keywords"]');
if (!metaKeywords) {
metaKeywords = document.createElement('meta');
metaKeywords.setAttribute('name', 'keywords');
document.head.appendChild(metaKeywords);
}
metaKeywords.setAttribute('content', keywords);

var canonicalLink = document.querySelector('link[rel="canonical"]');
if (!canonicalLink) {
canonicalLink = document.createElement('link');
canonicalLink.setAttribute('rel', 'canonical');
document.head.appendChild(canonicalLink);
}
canonicalLink.setAttribute('href', canonicalUrl);
}

function setViewport() {
var viewport = document.querySelector('meta[name="viewport"]');
if (!viewport) {
viewport = document.createElement('meta');
viewport.setAttribute('name', 'viewport');
document.head.appendChild(viewport);
}
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
}

/*///////////////////////////////////////////*/
/*///////////////////////////////////////////*/
/*///////////////////////////////////////////*/


function el(op) {

let HTMLbody = document.querySelector("body");
const {name, par, val, clas, id, at, atval} = op;
let newElement = document.createElement(name); 
const parentElement = document.querySelector(par);

if (val !== "" || val !== " " || val) { newElement.textContent = val; }
else { newElement.textContent = "None" }

if (clas !== "" || clas !== " " || clas) { newElement.classList = clas; }

if (id !== "" || id !== " " || id) { newElement.id = id; }
else { newElement.id = Math.floor(Math.random() * 99); }

if (at !== "" || at !== " " || at) { newElement.setAttribute(at, atval); }
else { newElement.setAttribute("none", ""); }

if(par === "" || par === " " || !par ) { HTMLbody.append(newElement); }
else { parentElement.append(newElement); }

}

function elClass(op) {
const {name, clas } = op;

const target = document.querySelector(name);
target.classList = clas;
}

function elAddclass(op) {
const {name, clas } = op;

const target = document.querySelector(name);
target.classList.add(clas);
}

function elRemClass(op) {
const {name, clas } = op;

const target = document.querySelector(name);
target.classList.remove(clas);
}

function elTogClass(op) {
const {name, clas } = op;

const target = document.querySelector(name);
target.classList.add(clas);
}

function elAt(op) {
const {name, at, val } = op;

const target = document.querySelector(name);
target.setAttribute(at, val);
}

function elRemAt(op) {
const {name, at } = op;

const target = document.querySelector(name);
target.removeAttribute(at);
}

function elId(op) {
const {name, id } = op;

const target = document.querySelector(name);
target.id = id;
}

/*///////////////////////////////////////////*/
/*///////////////////////////////////////////*/
/*///////////////////////////////////////////*/
function uuid() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
return v.toString(16);
});
}

function ran(n) {
return Math.floor(Math.random() *n)
}

/*///////////////////////////////////////////*/
/*///////////////////////////////////////////*/
/*///////////////////////////////////////////*/

function newFile(fileContent) {
let {filename, filetype, data} = fileContent;
const blob = new Blob([data], { type: filetype });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = filename;
a.click();
URL.revokeObjectURL(url);
}


function openFile() {
const input = document.createElement('input');
input.type = 'file';
input.style.visibility = 'hidden';
document.body.append(input);

return new Promise((resolve) => {
input.addEventListener('change', (event) => {
const file = event.target.files[0];
const reader = new FileReader();

reader.onload = () => {
const fileData = reader.result;
resolve(fileData);
};

reader.readAsText(file);
});

input.click();
});
}
async function readFile(does) {
const fileData = await openFile();
does(fileData);
}

async function displayFile(where) {
readFile((data) => {
document.querySelector(where).innerText = (data);
document.querySelector(where).value = (data);
});
}

