## How to setup Tailwind CSS

Step 01: Run the following commands:
```
npm install -D tailwindcss
npx tailwindcss init
```
Step 02: Update tailwind.conf.js file to include this line:
```
content: ["*.html"],
```
Step 03: Create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Step 04: Include the src/output.css file to your html.

Step 05: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```