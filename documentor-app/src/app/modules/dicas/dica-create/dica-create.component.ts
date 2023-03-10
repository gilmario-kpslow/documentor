import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DicasService } from '../dicas.service';

@Component({
  selector: 'app-dica-create',
  templateUrl: './dica-create.component.html',
  styleUrls: ['./dica-create.component.css']
})
export class DicaCreateComponent {

  entity: any;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
    descricao: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.maxLength(2000)]),
    tags: new FormControl('', []),
  });
  constructor(private service: DicasService) { }


  salvar() {
    this.service.salvar(this.form.value).subscribe((a) => {
      this.form.controls['id'].setValue(a.id);
      console.log(a);
    });
  }
}
