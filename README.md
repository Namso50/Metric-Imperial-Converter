# Metric Imperial Converter

- You can GET /api/convert with a single parameter containing an accepted number and unit and have it converted.
- If the unit of measurement is invalid, returned will be 'invalid unit'.
- If the number is invalid, returned will be 'invalid number'.
- If both the unit and number are invalid, returned will be 'invalid number and unit'.

### Accepted Units

- **lbs - kg**
- **L - gal**
- **mi - km**

## Install the dependencies

Run the following to install the dependencies:

```bash
$ npm install
```

## Run Project

Runs the project in the development mode:

```bash
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tests

The project uses mocha for testing. You can find the tests in the `tests` folder.

To run the tests:

```bash
$ npm test
```

## Production

Builds the app for production to the `build` folder.

```bash
$ npm build
```

## Author
[Namso50](https://github.com/Namso50)
