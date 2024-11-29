import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseRestService {

  URL = "https://practice-c7aca-default-rtdb.europe-west1.firebasedatabase.app/data"

  dataSub = new Subject()

  constructor(private http:HttpClient) { 
    this.loadrecord()
  }

  getRecord(){
    return this.recordSub
  }


  addRecord(data:any){
    this.http.post(this.URL+".json",data).forEach(
      ()=>this.loadRecord()
    )
   }

   private loadRecord(){
    this.http.get(this.URL+".json").subscribe(
      (res)=>this.recordSub.next(res)
    )
   }

   updateRecord(record:any){
    this.http.put(this.URL+record.key+".json",record).forEach(
      ()=>this.loadRecord())
   }

   deleteAllRecord(){
    this.http.delete(this.URL+"data.id"+".json").forEach(
      ()=>this.loadRecord()
    )
   }
}
