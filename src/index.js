import './styles/global.scss';
import img from './assets/webpack-blue-grey-back.png';
import ia from './assets/IA_shortlogo_white_whitebg.png';
import pack from '../package-lock'
console.log('pack: ', pack);
console.log(process);
document.body.innerHTML = `
	<div class="ia-logo">
		<img src=${ia} alt="IA Logo"/>
	</div>
<main>

	<img src="${img}" alt="webpack logo">
	<h1>Quick Start</h1>
	<h2>Version: ${require('../package.json').version}</h1>
	<h3>Pre configured with:</h3>
	<div class="webpacked">
	<code>clean-webpack-plugin: 3.0.0</code> 
	<code>compression-webpack-plugin: 3.0.0</code> 
	<code>css-loader: 3.2.0</code> 
	<code>csv-loader: 3.0.2</code> 
	<code>file-loader: 4.2.0</code> 
	<code>html-webpack-plugin: 3.2.0</code>
	<code>mini-css-extract-plugin: 0.8.0</code> 
	<code>node-sass: 4.13.0</code> 
	<code>sass: 1.23.6</code> 
	<code>sass-loader": 8.0.0</code> 
	<code>style-loader: 1.0.0</code> 
	<code>uglifyjs-webpack-plugin: 2.2.0 </code> 
	<code>webpack: 4.41.2 </code> 
	<code>webpack-cli: 3.3.10 </code> 
	<code>webpack-dev-server: 3.9.0 </code> 
	<code>webpack-manifest-plugin": 2.2.0 </code> 
	<code>webpack-merge: 4.2.2 </code> 
	<code>xml-loader: 1.2.1</code> 
	</div>
</main>
`