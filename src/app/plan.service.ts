import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from './plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  readonly ppApiUrl='http://localhost:22009/api/plans';
  ppData:Plan=new Plan();
  ppList:Plan[]
  // pList:Plans[];
  constructor(private objcHttp:HttpClient) {

  }
  delPlan(pid)
  {
    return this.objcHttp.delete(this.ppApiUrl+'/'+pid);
  }
  getPlanList()
  {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList=res as Plan[]);
  }
  putPlan()
  {
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.PId,this.ppData);
  }
  postPlan()
  {
    console.log(this.ppData);

    return this.objcHttp.post(this.ppApiUrl,this.ppData);
  }
}
