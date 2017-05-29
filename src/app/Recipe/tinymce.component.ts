
import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  forwardRef
} from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'; 

declare var tinymce: any;

const contentAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleTinyComponent),
  multi: true
};

@Component({
  selector: 'simple-tiny',
  providers: [contentAccessor],
  template: `<textarea id="{{elementId}}"></textarea>`
})

export class SimpleTinyComponent implements AfterViewInit, ControlValueAccessor {
  private onTouch: Function;
  private onModelChange: Function;

  set value(v: any) {
      if (v !== this.editorContent) {
          this.editorContent = v;
          this.onModelChange(v);
      }
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  writeValue(value) {
    this.editorContent = value;
    //this.editor.setContent("ggg");
  }

  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();

  constructor() { }

  editor;
  editorContent: string = null;

  ngAfterViewInit() {
    tinymce.init({
      selector: `#${this.elementId}`,
      plugins: ['lists'],
      skin_url: '/assets/skins/lightgray',
      schema: 'html5',
      menubar:false,
      statusbar: false,
      toolbar: 'bold italic bullist numlist',
      setup: editor => {
        this.editor = editor;
        editor.on('init', () => {
          var that=this;
          setTimeout(function() {
            //console.log(that.editorContent);
            editor.setContent(that.editorContent);
          }, 1000);
        });
        editor.on('keyup change', () => {
          const tinyContent = editor.getContent();
          this.editorContent = tinyContent;
          this.onEditorContentChange.emit(tinyContent);
          this.onModelChange(tinyContent);
          this.onTouch();
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}

/*import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  NgZone
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var window: any;
declare let tinymce: any;

@Component({
  selector: 'simple-tiny',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleTinyComponent),
      multi: true
    }
  ],
  template: `<textarea id="{{elementId}}">{{initVal}}</textarea>`
})
export class SimpleTinyComponent implements ControlValueAccessor {
  //elementId: String = Math.random().toString(36).substring(2);

  @Output() change = new EventEmitter();
  @Output() ready = new EventEmitter();
  @Output() blur = new EventEmitter();

  @Input() initVal;
  @Input() elementId:string;

  _value = '';
  zone;
  editor;

  ngAfterViewInit() {
    console.log(window.tinymce);
    tinymce.init({
      selector: 'textarea',
      plugins: [],
      menubar: false,
      toolbar: 'bold',
      skin_url: '/assets/skins/lightgray',
      autoresize_overflow_padding: 0,
      setup: editor => {
        console.log('?');
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.updateValue(content);
        });
      }
    });
  }

  constructor(zone: NgZone) {
    this.value = this.initVal;
    this.zone = zone;
  }

  get value(): any { return this._value; };
  @Input() set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  
  updateValue(value) {
    this.zone.run(() => {
      this.value = value;
      this.onChange(value);
      this.onTouched();
      this.change.emit(value);
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  
  writeValue(value) {
    this._value = value;
  }
  onChange(_) { }
  onTouched() { }
  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }
}*/


