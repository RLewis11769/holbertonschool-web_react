# State

## Tasks

### task_4

We have modularized our React application without worrying about interactions and state, which is usually a recommended process of development. Now, our application is in a good place to start adding logic and state.

Add onto [0x00. React inline styling]()
- Add displayDrawer element to Notifications component
- Add isLoggedIn element to Login component
- Define default user object and logOut function

By the end of the task_4:
- Can log in via form and see header, app, footer, course list, and notification list change based on whether user is logged in
- Can click on courselist checkbox and see style change
- Can click on Notifications and see notifications list

App contains:
- Class component using user.isLoggedIn to determine if user is logged in
- AppContext.Provider

Header contains:
- Functional component using user.isLoggedIn to determine if user is logged in
- useContext(AppContext)

Footer contains:
- Functional component using context.user.isLoggedIn to determine if user is logged in
- AppContext.Consumer

CourseListRow contains:
- Functional component using useState hook to determine if course is selected
- useState(false)

## Learning Objectives

- What the state of a component or a container is
- The lifecycle of a component
- How to modify a state and execute code in the right order
- What a controlled component is
- How to use Forms in React
- How to reuse smaller components, keep them pure, and lift its state to principal containers
- The use of a React Hook and how to create one
- How to test State changes with Enzyme
