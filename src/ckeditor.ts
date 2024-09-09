/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor, Essentials, Bold, Italic, Font, Paragraph } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class CKEditor extends ClassicEditor {
	static override builtinPlugins = [
		Bold,
		Italic,
	];
	static override defaultConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'link',
				'bulletedList',
				'numberedList',
				'|',
				'outdent',
				'indent',
				'|',
				'imageUpload',
				'insertTable',
				'mediaEmbed',
				'undo',
				'redo',
				'alignment',
				'code',
				'codeBlock',
				'findAndReplace',
				'fontColor',
				'fontFamily',
				'fontSize',
				'fontBackgroundColor',
				'highlight',
				'horizontalLine',
				'htmlEmbed',
				'pageBreak',
				'removeFormat',
				'imageInsert',
				'selectAll',
				'showBlocks',
				'sourceEditing',
				'specialCharacters',
				'restrictedEditingException',
				'strikethrough',
				'style',
				'subscript',
				'superscript',
				'todoList',
				'underline'
			]
		},
		language: 'et',
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'linkImage'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties'
			]
		}
	};
}

export default { CKEditor };