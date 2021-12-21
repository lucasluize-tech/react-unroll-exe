### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

> React router is a client-side mock of a request , but instead of requesting the server for a new render, react will render a new component like a page.

- What is a single page application?

> Single page application is an app that uses javaScript to dynamically render "pages" without requesting the server.

- What are some differences between client side and server side routing?

> Client-side is faster, easy to navigate but might be weak to SEO and might not display all content. Server-side is Slower, better SEO, maybe more vulnerable, depending on the amount of users making requests it could drastically impact the speed.

- What are two ways of handling redirects with React Router? When would you use each?

> we can use the `<Redirect to="">` Component, or the history Object from the hook `useHistory`. If the application needs to allow browser functionalitty such as back button or bookmarks it's best to use the useHistory hook.

- What are two different ways to handle page-not-found user experiences using React Router?

> We could implement as the last Route component in the Routes logic file, so if does not find a path to go it would render a 404. Or we could redirect to a 404.

- How do you grab URL parameters from within a component using React Router?

> Well first we write the path as we did in express with colons ( `to="/users/:id"`), and inside the component that is linked to this path we use `useParams()` object to read the value of the key after colons.

- What is context in React? When would you use it?

> Context is an Object that makes it easier to pass down data without to much props drilling. We would create a context and wrap child components that would need to read this data later on by using the hook `useContext(ContextCreated)`

- Describe some differences between class-based components and function
  components in React.

  > class components were standard in the beggining of react, so many great functionalities that we have with hooks were very hard to implement with classes ( like keeping track of 'this' , wrapping components to share functions , etc..) but still doable, it just takes more coding to get it done. Functional components and hooks makes a more clean and readable code.

- What are some of the problems that hooks were designed to solve?

> Most of them (if not all) were designed to solve the amount of 'wrapping' envolved to make use of shared functionality, code repetition for same logic and of course making it more consistent through out.
