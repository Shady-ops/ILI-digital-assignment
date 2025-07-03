# Collaborative Document Editor (ILI Digital Frontend Assignment)

This is a frontend for a collaborative document editor using Angular, NgRx, and Bootstrap. It features a modern layout, reactive state handling, and basic offline support.

## Features

- Real-Time Editing: Multiple users can edit the same document at once.

- Role-Based Access: Interface adapts based on user roles (Editor, Reviewer, Viewer).

- Inline Comments: Add and view comments directly on selected text.

- Offline Support: Changes made offline are saved and synced when reconnected (simulated).

- User Presence Simulation: Shows avatars and cursors of 3 mock users, updating every 10 seconds.

## Setup Instructions

Follow these steps to get the project running on your local machine.

1. Clone the Repository
git clone <your-repo-url>
cd <repository-name>

2. Install Dependencies
Use npm to install the required packages.
npm install

3. Run the Development Server
ng serve

4. Open in Browser
Navigate to http://localhost:4200/

## Design Decisions

Framework (Angular): Chosen for its strong structure, TypeScript support, and built-in tools like dependency injection and RxJS.

State Management (NgRx): Used to centralize state, making updates predictable and easier to debug with tools like Redux DevTools.

Styling (Bootstrap + SCSS): Bootstrap provided responsive layout and ready-to-use UI components, custom SCSS handled unique styles.

Real-Time Simulation: Collaboration features are simulated on the frontend using RxJS timers to trigger NgRx actions.

Modularity: Built with feature modules to support lazy loading, faster initial loads, and clean separation of features.

## Architecture

The app uses a reactive, component-based architecture powered by NgRx for managing state.

## Data Flow

User Interaction: A user interacts with a component.

Action Dispatch: The component dispatches an NgRx action like [Document] Update Content.

Offline Check: A meta-reducer checks connectivity—if offline, the action is queued.

Simulation: Handle asynchronous logic simulated user activity via timers.

State Update: A reducer updates the state based on the action.

UI Update: Components subscribe to store selectors and reactively update the UI with new state.

## State Management

The app uses NgRx to manage state:

AppState (root level):

user: Stores role, offline status, and action queue

router: Holds routing info

DocumentState (lazy-loaded feature module):

content: Document’s HTML content

comments: List of inline comment objects

collaborators: Simulated users with cursor positions

