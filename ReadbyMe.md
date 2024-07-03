# NextjsLearning 

<b>React framwork to build web application (production ready)</b>
It uses react for building user interfaces, providedes additional features that enable you to build produciton-ready applications. These feature include routing, optimized rendering, data fetching, bundling, compiling and more. (don't need additional packages , opinions and conventions should be follwed to implement these)

## Why learn Next.js ? 
Next.js simplifies the process of building a web application for production : 

1. Routing (don't need to install thrid party, offers file base of routing)
2. API routes
3. Rendering(support both server and client side)
4. Data fetching
5. Styling
6. Optimizing
7. Dev and prod build system(focus on coding rather than setup)


## React Server Componets (RSC)

React SErver compoents is a new architecture introduced by the React team in version 18 which was quickly embraced by Nexrt.js

The architectture introduces a new way of creating React components, splitting them in two types:
- ### Server components
    - In Next.js, all components are Server components by default. 
    - They have the ability to ruun tasks like reading files or fetching data from a database.
    - However, they don't have the ability to use hooks or handle user interaction 
- ### Client Components 
    - To create a Client components, it's necessary to add ```use client``` at the top of the component file. 
    - Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions. 
    - It is traditional react components. 

## Routing

Next.js has a file-system based routing mechanism
URL paths that users can access in the browser are defined by files and folders in your codebase

### Routing Conventions
All routes must be placed inside the app folder
Every file that corresponds to a route must be named page.js or page.tsx
Every folder corresponds to a path segments in the browers url

![alt text](<Screenshot 2024-07-03 at 1.38.12 PM.png>)

### Nested Routes

![alt text](<images/Screenshot 2024-07-03 at 1.44.40 PM.png>)
![alt text](<images/Screenshot 2024-07-03 at 1.46.01 PM.png>)

### Dynamic Routes
![alt text](<images/Screenshot 2024-07-03 at 1.47.57 PM.png>) 
![alt text](<images/Screenshot 2024-07-03 at 2.01.25 PM.png>)
![alt text](<images/Screenshot 2024-07-03 at 2.02.06 PM.png>)

### Nested Dynammic Routes

![alt text](<images/Screenshot 2024-07-03 at 2.03.55 PM.png>)

![alt text](<images/Screenshot 2024-07-03 at 2.10.09 PM.png>)
![alt text](<images/Screenshot 2024-07-03 at 2.10.51 PM.png>)

### Catch-all Segments

![alt text](<images/Screenshot 2024-07-03 at 2.14.38 PM.png>)

![alt text](<images/Screenshot 2024-07-03 at 2.26.11 PM.png>)

![alt text](<images/Screenshot 2024-07-03 at 2.27.30 PM.png>)

### Not found Page
![alt text](<images/Screenshot 2024-07-03 at 2.36.23 PM.png>)

[Learn From Codevolution](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)
