import * as __Tone from 'tone';
import * as __ace from 'ace-builds';
import 'ace-builds/webpack-resolver.js'; // eslint-disable-line sort-imports


// This line forces webpack to import Tone even though it's unused
const Tone = __Tone; // eslint-disable-line no-unused-vars

const __editor = __ace.edit( 'editor' );
__editor.setTheme( 'ace/theme/chrome' );
__editor.session.setMode( 'ace/mode/javascript' );
__editor.session.setUseSoftTabs( false );
__editor.session.setUseWrapMode( true );

const __runButton = document.getElementById( 'runButton' );

__runButton.addEventListener( 'click', async function () {
	await Tone.start();
	eval( __editor.getValue() );
});