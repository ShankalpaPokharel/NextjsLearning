Server-side rendering and static site genereation (which we can't do in react)
![alt text](<images/Screenshot 2024-07-12 at 8.30.02 AM.png>)
![alt text](<images/Screenshot 2024-07-12 at 8.30.17 AM.png>)

only Functionality : React.js
SEO - Next js

![alt text](<images/Screenshot 2024-07-12 at 8.33.30 AM.png>)

![alt text](<images/Screenshot 2024-07-12 at 8.40.55 AM.png>)

page router vs app router


## for light and dark theme
npm i next-themes

```jsx
//_app.js
import { ThemeProvider } from "next-themes";
<ThemeProvider attribute="class">
    <Component {...pageProps} />
</ThemeProvider>
```
tailwind config
```darkMode:"class"```

```jsx
// Navbar.js
import { useTheme } from "next-themes";
const {theme,setTheme} = useTheme()

 <button onClick={()=> setTheme(theme==="dark"?"light":"dark")}>change theme</button>
```
If we don't use the alt tag in Image it will give error when deploying

/ - it indicate the public folder 

explicitly should give width and height

```jsx
<Image alt="Navbar Logo" src={"/Pizza.svg"} width={60} height={60} />
```


Link
all:unset : don't implement default css of provided by link //safe handle
 ```jsx 
 <Link href={"/signup"} style={{ all: "unset" }}>
    <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
     New User?
    </button>
</Link>
```

Context API - Global state (create context: porvide value which can be access any kind of child component, use context: to use the values in any component, it will be done using useContext hook)

useReducer ----> reducer --> switchcase
 case: add
 case:inc
 case:update

 dispatch-->

   const totalPrice = state.reduce((total,food) => total+food.price,0)


