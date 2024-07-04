import { AfterViewInit, Component, ElementRef, Host, HostListener, Input, OnInit, Optional, Renderer2, SkipSelf, forwardRef } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { ErroPipe } from '../pipe/pipe-error';

@Component({
  selector: 'app-layout-input',
  templateUrl: './layout-input.component.html',
  styleUrls: ['./layout-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LayoutInputComponent),
    multi: true,
  }],
})
export class LayoutInputComponent implements ControlValueAccessor, OnInit {

  @Input() label: string = "Campo";
  disable = false;
  @Input() formControlName: string | undefined;
  private control: AbstractControl | undefined | null;
  @Input() type: string = "text";

  onChange = (_: string) => { };
  onTouch = () => { };

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Host() @SkipSelf() @Optional() private controlContainer: ControlContainer) {

  }

  public writeValue(inputValue: string): void {

  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;

  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  hasError(): boolean | undefined | null {
    return this.control && this.control.invalid && this.control.touched;
  }

  get errorMessage() {
    return this.control?.errors;
  }

  ngOnInit(): void {
    if (this.formControlName && this.controlContainer && this.controlContainer.control) {
      this.control = this.controlContainer.control.get(this.formControlName);
    }
  }

  get form(): FormControl {
    return this.control as FormControl;
  }
}