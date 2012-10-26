placeholder-shiv
================

Tiny polyfill for the placeholder form element attribute. Requires [Prototype.js](http://prototypejs.org).

This Prototype JavaScript simulates the `placeholder` attribute in browsers that do not support it yet. It doesn’t do anying if placeholders are supported, and degrades to show nothing if both placeholder and JavaScript support are missing.
  
  To apply it, simply code your form elements with placeholders, and add a link to prototype.js and placeholder-shiv.js in the head of your page.
  
  The only caution is that the placeholder text cannot be exactly the same as a potential input value. Pad the placeholder value with trailing spaces to avoid this issue.
