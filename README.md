# HolyScript

Holy Script is a experimental way to run HolyC in HTML.

*This is who we will build the TempleWeb in the future

# Usage

in a HTTP server;

import the holy-script.js in your dom
```
<script defer type="module" src="holy-script.js"></script>
```
after use the ```<holy-script>``` tag and put the code into it

# Example

```HTML 
<html lang="en">
	<head>
		<script defer type="module" src="HolyScript.min.js"></script>
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