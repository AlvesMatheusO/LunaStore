import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome,
         faUsers,
         faBox,
         faMoneyBill } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faHome = faHome;
  faUsers = faUsers;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  constructor(private router: Router) { }

  ngOnInit(): void { }

}
