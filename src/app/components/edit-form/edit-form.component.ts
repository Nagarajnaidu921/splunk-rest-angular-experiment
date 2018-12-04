import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ConfsService } from '../../services/confs/confs.service'
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  fields;
  editForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private confServ: ConfsService,
    public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { 
    this.fields = Object.keys(data.data);
    this.editForm = this.fb.group(data.data);
    console.log(data)
  }

  ngOnInit() {
  }

  update() {
   
    this.confServ.update({
      user: this.data.user,
      conf: this.data.conf,
      stanza: this.data.stanza,
      app: this.data.app,
      data: this.editForm.value
    })
    .subscribe((result) => {
      // console.log(result);
      this.dialogRef.close()
    })
  }
}
