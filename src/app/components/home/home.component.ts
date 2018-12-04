import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfsService } from 'src/app/services/confs/confs.service';
// import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
// import {MatPaginator, MatTableDataSource} from '@angular/material';
import { EditFormComponent } from '../edit-form/edit-form.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // searchInputForm: FormGroup;
  // confsList;
  // displayedColumns = ['name', 'updated'];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // name = new FormControl('');
  usersList = [];
  appList = [];
  confList = [];
  stanzaList = [];
  stanzaContent = [];
  selectedUser = '';
  selectedApp = '';
  selecteConf = '';
  selectedStanza = '';
  sample;
  constructor(
    private dialog: MatDialog,
    private confsServ: ConfsService
  ) { 
    

    this.confsServ.getAllUsers()
    .subscribe((result: any) => {
      this.usersList = result;
    })
  
  }

  ngOnInit() {
  }


 
  getAllApps(user) {
    this.selectedUser = user;
    this.confsServ.getAllApps(user)
    .subscribe( (result: any) => {
      this.appList = result
    },
    (err) => {
      console.log(err);
    })
  }

  getAllConfs(app) {
    this.selectedApp = app;
    this.confsServ.getAllConfs(this.selectedUser, app)
    .subscribe( (result: any) => {
      this.confList = result;
    })
  }

  getAllStanzas(conf) {
    this.selecteConf = conf
    this.confsServ.getAllStanzas(this.selectedUser, this.selectedApp, conf)
    .subscribe((result: any) => {
      this.stanzaList = result;
    },
    (err) => {
      console.log(err);
    })
  }

  getStanzaContent(stanza) {
    this.selectedStanza = stanza;
    this.confsServ.getStanzaContent(this.selectedUser, this.selectedApp, this.selecteConf, stanza)
    .subscribe( (result: any) => {
      this.stanzaContent = result;
      const AllValues = Object.assign([], result);
      this.sample = AllValues.reduce((acc, curr) => {
         acc[curr.key] = curr.value;
         return acc;
      }, {})
    },
    (err) => {
      console.log(err);
    })
  }

  ngAfterViewInit() {
    // this.confsList.paginator = this.paginator;
  }

  openDilag() {
    const data = {
      data: this.sample,
      user: this.selectedUser,
      app: this.selectedApp,
      conf: this.selecteConf,
      stanza: this.selectedStanza
    }
    const a = this.dialog.open(EditFormComponent, {
      width: '550px',
      maxHeight: '600px',
      data
    })
  }
}
