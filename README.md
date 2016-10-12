# eslint-config-spatie

Our base eslint configuration.

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## Installation

Install this package, and save it as a devDependency:

```
npm install --save-dev eslint-config-spatie
```

Then have your project's `.eslintrc` file extend the ruleset.

```json
{
    "extends": "spatie"
}
```

If you're using React in your project:

```json
{
    "extends": "spatie/react"
}
```

## Common Settings Cookbook

### Globals

```json
{
    "globals": {
        "$": true
    }
}
```

### Environments

```json
{
    "env": {
      "browser": true,
      "node": true
    }
}
```

## About Spatie

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
