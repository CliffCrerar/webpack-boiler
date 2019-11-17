![Webpack quick starer](https://cdn-cloudflare.ga/assets/misc/wp-boiler.png)

## Preconfiguration with:
```
	clean-webpack-plugin: 3.0.0
	compression-webpack-plugin: 3.0.0
	css-loader: 3.2.0
	csv-loader: 3.0.2
	file-loader: 4.2.0
	html-webpack-plugin: 3.2.0
	mini-css-extract-plugin: 0.8.0
	node-sass: 4.13.0
	sass: 1.23.6
	sass-loader": 8.0.0
	style-loader: 1.0.0
	uglifyjs-webpack-plugin: 2.2.0 
	webpack: 4.41.2 
	webpack-cli: 3.3.10 
	webpack-dev-server: 3.9.0 
	webpack-manifest-plugin": 2.2.0 
	webpack-merge: 4.2.2 
	xml-loader: 1.2.1
```

## Different configurations

|Config file|Phase used in|
|-|-|
|`webpack.config.common`| `development mode` and `production version` |
|`webpack.config.development`| `Development mode`|
|`webpack.config.production`| `Production version` |

## How it works

get the app: `git clone https://github.com/CliffCrerar/webpack-boiler.git`;

start in `development mode`:

`npm run dev`

build `production version`:

`npm run build`

Output path: `public`
