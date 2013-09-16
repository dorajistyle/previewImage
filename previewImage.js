/* 
 * The MIT License
 *
 * Copyright (c) 2013 JoongSeob Vito Kim
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function (module) {
    if (typeof define === "function" && define.amd) {
        define(function () { return module; });
    } else {
        window.previewImage = module.previewImage;
    }
}({
       /**
         * Preview image.
         * @param target
         * @param preview
         */
        previewImage: function (target,preview) {
          var fileInput = $(target);
            fileInput.change(function() {
                var file = this.files;
                var src = '';
                if(file) {
                      var myWin = window.URL || window.webkitURL;
                      src = myWin.createObjectURL(file[0]);
                      window.URL.revokeObjectURL(file[0]);
                } else {
                    if (/fake/.test(this.value)) {
                        this.select();
                        src = encodeURI('file:///'+this.document.selection.createRangeCollection().item(0).text.replace(/\\/gi, '/'));
                    } else {
                        utils.logObject('previewImage',this);
                        src =  encodeURI('file:///'+this.value.replace(/\\/gi, '/'));
                    }
                }
                $(preview).css('background-image', 'url("'+src+'")');
            });
        }
}));
        