import { Component, OnInit } from '@angular/core';
import { SplunkLocalAppService } from '../../services/splunk-local-apps/splunk-local-app.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-manage-splunk-apps',
  templateUrl: './manage-splunk-apps.component.html',
  styleUrls: ['./manage-splunk-apps.component.css']
})
export class ManageSplunkAppsComponent implements OnInit {
  appList: any;
  constructor(private splunkLocalAppServ: SplunkLocalAppService) {
    this.getAllApps();
  }

  ngOnInit() {
  }

  getAllApps() {
    this.splunkLocalAppServ.getAllApps()
      .subscribe(data => {
        this.appList = data;
        console.log(data);
      },
        err => {
          console.log(err);
        });
  }

  deleteApp(appName) {
    this.splunkLocalAppServ.deleteApp(appName)
    .subscribe(data => {
      console.log(data);
      swal({
        type: 'success',
        title: 'Success',
        text: 'App Successfully deleted',
        timer: 2000
      })
      this.getAllApps();
    },
    (err) => {
      console.log(err);
    }
    )
  }
}
