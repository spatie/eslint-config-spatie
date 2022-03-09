
[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/support-ukraine.svg?t=1" />](https://supportukrainenow.org)

# eslint-config-spatie

**This package isn't actively maintained anymore, and the documentation is outdated!**

Our base eslint configuration.

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## Support us

[<img src="https://github-ads.s3.eu-central-1.amazonaws.com/eslint-config-spatie.jpg?t=1" width="419px" />](https://spatie.be/github-ad-click/eslint-config-spatie)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

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

If you're using React in your project, you'll need to extend the React extension of the configuration, and install the eslint React plugin:

```json
{
    "extends": "spatie/react"
}
```

```
yarn add eslint-plugin-react --dev
```

If you're using Vue in your project, you'll need to extend the Vue extension of the configuration, and install the eslint Vue and html plugins:

```json
{
    "extends": "spatie/vue"
}
```

```
yarn add eslint-plugin-vue eslint-plugin-html --dev
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
