import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/tab1/PeriodicElement';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  user: User;
  constructor(private router: Router, private location: Location) {
    this.user = this.router.getCurrentNavigation()?.extras?.state?.user;
    if (!this.user) {
      this.router.navigateByUrl('/tabs/tab1');
    }
  }

  ngOnInit() {}

  back() {
    this.location.back();
  }
}
