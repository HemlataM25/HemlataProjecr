import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/shared/plan.service';

@Component({
  selector: 'app-pp-display',
  templateUrl: './pp-display.component.html',
  styleUrls: ['./pp-display.component.css']
})
export class PpDisplayComponent implements OnInit {


  constructor(public objSrv:PlanService) { }

  ngOnInit(): void {
    this.objSrv.getPlanList();
  }
  //you are not calling services
  fillForm(selectedPP)
  {
    this.objSrv.ppData=Object.assign({},selectedPP);
  }

}
