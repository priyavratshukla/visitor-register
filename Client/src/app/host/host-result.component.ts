import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-host-result',
  templateUrl: './host-result.component.html',
  styleUrls: ['./host-result.component.css']
})
export class HostResultComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;
  docId: any;
  docData;

  constructor(private _backendService: BackendService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.queryParams.subscribe(
      res => {
      this.docId = res;
      this.getData();
     });
  }
  getData() {
    this.dataLoading = true;
    return this.querySubscription = this._backendService.getHosts(this.docId).subscribe((res) => {
      if (res["errorCode"] > 0) {
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.docData = res["data"];
      } else {
        this.error = true;
        this.errorMessage = res["errorMessage"];
        this.dataLoading = false;
        this.savedChanges = true;
      }
    },
      (error) => {
        this.error = true;
       // this.errorMessage = error.message;
        this.dataLoading = false;
        this.savedChanges = true;
      },
      () => {
        this.dataLoading = false;
      });
  }
  checkIn(hostId, hostName) {
    this._backendService.setCheckIn(hostId, hostName, '', '');
    this._router.navigate(['/register-result']);
  }
  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
