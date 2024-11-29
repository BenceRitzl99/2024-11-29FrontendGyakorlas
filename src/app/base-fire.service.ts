import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseFireService {

  recordRef : AngularFireList<any>
  constructor(private db: AngularFireDatabase) {
    this.recordRef = db.list('/data');
   }

   getRecord(){
    return this.recordRef
   }

   addRecord(data:any){
    this.recordRef.push(data)
   }

   updateRecord(record:any){
    let key=record.key
    delete record.key
    this.recordRef.update(key,record)
   }

   deleteRecord(record:any){
    this.recordRef.remove(record.key)
   }

   deleteAllRecord(){
    this.recordRef.remove()
   }
}
