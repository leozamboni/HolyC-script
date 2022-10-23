# HolyScript

HolyScript is a experimental way to run HolyC in HTML.

*This is who we will build the TempleWeb in the future

## Usage

**Some features requires a HTTP server to work, is not recommended run HolyScript out of that.**

Import HolyScript in your dom with the CDN link;

```html
<script defer crossorigin="anonymous" type="module" src="https://holy-js.github.io/HolyScript-0.0.1.min.js"></script>
```

After, use the ```<holy-script>``` tag and put the code into it.

## Example

```html 
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script defer crossorigin="anonymous" type="module"
    src="https://holy-js.github.io/HolyScript-0.0.1.min.js"></script>
  <title>HolyC Fibonacci</title>
</head>

<body>
  <holy-script>
  U0
  Fibonacci()
  {
      U32 a = 0, b = 1, c, i;

      for (i = 0; i < 20; i++) 
      { 
          c = a + b; 
          "%d\n" , c; 
          a = b; 
          b = c; 
      } 
  } 
  Fibonacci; 
  </holy-script>
</body>

</html>
```
