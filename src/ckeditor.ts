/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

//import { Editor } from '@ckeditor/ckeditor5-core';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';



// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class CKEditor extends ClassicEditor {


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