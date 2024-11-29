import { Component } from '@angular/core';
import { BaseFireService } from '../base-fire.service';
import { map } from 'rxjs';
import { BaseRestService } from '../base-rest.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
  records:any = []
  oszlopok=[
    {key:"artist", text:"Artist", type:"text"},
    {key:"id", text:"Id", type:"number"},
    {key:"image_url", text:"Image", type:"url"},
    {key:"title", text:"Title", type:"text"},
    {key:"type", text:"Type", type:"text"},
    {key:"year", text:"Year" ,type:"number"},
  ]

  newRecord:any={}
  constructor(private base:BaseRestService){
  //   base.getRecord().snapshotChanges().pipe(
  //     map(
  //       (changes)=>changes.map(
  //         (c)=>({key:c.payload.key,...c.payload.val()})
  //       )
  //     )
  //   ).subscribe(
  //     (res)=>this.records=res
  //   )
  }

  base.getRecord().subscribe(
    (res:any)=>{
      this.records=[]
      for(const key in res){
        this.records.push({key:key, ...res[key]})
      }
    }
    
  

  addRecord(){
    this.base.addRecord(this.newRecord)
    this.newRecord={}

  }

  updateRecord(record:any){
    this.base.updateRecord(record)
  }

  deleteRecord(record:any){
    this.base.deleteRecord(record)
  }


}


