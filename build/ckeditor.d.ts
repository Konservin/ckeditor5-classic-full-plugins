/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor, Bold, Italic } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
declare class CKEditor extends ClassicEditor {
    static builtinPlugins: (typeof Bold | typeof Italic)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        language: string;
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
    };
}
declare const _default: {
    CKEditor: typeof CKEditor;
};
export default _default;
