# Redux Toolkit Joke Generator

A Redux Toolkit demo, built with React, that fetches random Chuck Norris jokes by category using `createAsyncThunk` and Axios.

## Features

- Fetch a random joke by typing a category (e.g. `dev`, `food`, `movie`)
- Global state managed with Redux Toolkit
- Async API handling with `createAsyncThunk` and `extraReducers`
- UI updates automatically when the store changes

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React-Redux](https://img.shields.io/badge/React--Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
[![Chuck Norris API](https://img.shields.io/badge/Chuck_Norris_API-F7DF1E?style=for-the-badge&logo=json&logoColor=black)](https://api.chucknorris.io/)

## How It Works

1. The user types a category and clicks **Get jokes**.
2. `dispatch(fetchJoke(category))` triggers the async thunk.
3. The thunk calls the API and returns the joke.
4. The `fulfilled` case in `extraReducers` saves it to `state.joke`.
5. `useSelector` picks up the change and React re-renders the joke.

```
Input → dispatch → API request → reducer updates store → useSelector → UI
```

## Getting Started

```bash
git clone https://github.com/inthusha20241647-commits/redux-toolkit-joke-generator.git
cd redux-toolkit-joke-generator
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Usage

Enter a valid category such as `dev`, `food`, `movie`, `science` or `sport`, then click **Get jokes**. An invalid category returns a 404 from the API. Valid categories are listed at `https://api.chucknorris.io/jokes/categories`.

## Future Improvements

- Handle the `rejected` state with an error message
- Add a loading indicator
- Replace the text input with a category dropdown

## Credits

Jokes provided by the [Chuck Norris API](https://api.chucknorris.io/).
