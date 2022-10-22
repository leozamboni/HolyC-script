# HolyScript

Holy Script is a experimental way to run HolyC in HTML.

*This is who we will build the TempleWeb in the future

# Usage

in a HTTP server;

import the holy-script.js in your dom
```html
<script defer crossorigin="anonymous" type="module" src="https://templeweb.github.io/HolyScript-0.0.1.min.js"></script>
```
after use the ```<holy-script>``` tag and put the code into it

# Example

```html 
<html lang="en">
	<head>
		<script defer crossorigin="anonymous" type="module" src="https://templeweb.github.io/HolyScript-0.0.1.min.js"></script>
	</head>
	<body>
		<holy-script>
      // HolyC Fibonacci
      U0
      Fibonacci()
      {
        U32 a = 0, b = 1, c, i;

        for (i = 0; i < 20; i++)
        {
          c = a + b;
          "%d\n", c;
          a = b;
          b = c;
        }
      }

      Fibonacci;
    </holy-script>
  </body>
</html>
```