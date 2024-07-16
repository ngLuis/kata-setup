## 🥋 Kata Setup 🥋
Setup for programming katas in TypeScript + Jest environment

---

## Build and run

You can build and run in two different ways:

### NPM
Use node v20.15.1

Run the command to install dependencies

```
  npm ci
```

And run tests

```
  npm run test
```

### Docker + Makefile

This project is also ready to be use with Docker

Build the project by executing

```
  docker compose build
```

And run tests with

```
  docker compose run --rm app npm test
```

If you prefer to run the command in a shorter way you can use Make

```
  make unit-test
```