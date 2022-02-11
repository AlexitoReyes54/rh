import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { language } from './rh/interfaces/language';
import { languagePost } from './rh/interfaces/languagePost';
import { competence } from './rh/interfaces/competence';
import { position } from './rh/interfaces/positions';
import { WorkExpereience } from './user/interfaces/workExpecience';

/*
    CREATE PUT METHOD FOR EACH CRUD 
*/

@Injectable({
  providedIn: 'root'
})
export class RhService {

  constructor(private http: HttpClient) { }
  service:string = 'service'

  //languages api
  getLanguages(){
    console.log('paso');
    
    return this.http.get<any>('http://localhost:3000/languange')
  }

  getOneLanguage(id:any){
    return this.http.get<language>('http://localhost:3000/languange/'+id)
  }

  addLanguage(language:languagePost){    
    this.http.post('http://localhost:3000/languange',language).subscribe(e =>{
      console.log(e);
    })
  }

  deleteLanguege(id:any){
    this.http.delete('http://localhost:3000/languange/'+id).subscribe(e =>{
      console.log(e);
    })
  }
  
  updateLanguege(language:languagePost){
    this.http.put('http://localhost:3000/languange',language).subscribe(e =>{
      console.log(e);
    })
  }

  // Competence 
  getCompetence(){
    return this.http.get<any>('http://localhost:3000/competence')
  }

  getOneCompetence(id:any){
    return this.http.get<any>('http://localhost:3000/competence/'+id)
  }

  addCompetence(competence:competence){
    this.http.post('http://localhost:3000/competence',competence).subscribe(e =>{
      console.log(e);
    })
  }

  deleteCompetence(id:any){
    this.http.delete('http://localhost:3000/competence/'+id).subscribe(e =>{
      console.log(e);
    })
  }

  updateCompetence(competence:competence){
    this.http.put('http://localhost:3000/competence',competence).subscribe(e =>{
      console.log(e);
    })
  }
  // position  Position
   getPosition(){
    return this.http.get<any>('http://localhost:3000/position')
  }

  getOnePosition(id:any){
    return this.http.get<any>('http://localhost:3000/position/'+id)
  }

  addPosition(position:position){
    this.http.post('http://localhost:3000/position',position).subscribe(e =>{
      console.log(e);
    }) 
  }

  deletePosition(id:any){
    this.http.delete('http://localhost:3000/position/'+id).subscribe(e =>{
      console.log(e);
    })
  }

  updatePosition(position:position){
    this.http.put('http://localhost:3000/position',position).subscribe(e =>{
      console.log(e);
    })
  }

  // training Training
  getTraining(){
    return this.http.get<any>('http://localhost:3000/training')
  }

  getOneTraining(id:any){
    return this.http.get<any>('http://localhost:3000/training/'+id)
  }

  addTraining(training:any){
    this.http.post('http://localhost:3000/training',training).subscribe(e =>{
      console.log(e);
    })
  }

  deleteTraining(id:any){
    this.http.delete('http://localhost:3000/training/'+id).subscribe(e =>{
      console.log(e);
    })
  }

  updateTraining(training:any){
    this.http.put('http://localhost:3000/training',training).subscribe(e =>{
      console.log(e);
    })
  }

  // work expereience WorkExpereience 
  getWorkExpereience(){
    return this.http.get<any>('http://localhost:3000/work')
  }

  getOneWorkExpereience(id:any){
    return this.http.get<any>('http://localhost:3000/work/'+id)
  }

  addWorkExpereience(WorkExpereience:WorkExpereience){
    this.http.post('http://localhost:3000/work',WorkExpereience).subscribe(e =>{
      console.log(e);
    })
  }

  deleteWorkExpereience(id:any){
    this.http.delete('http://localhost:3000/work/'+id).subscribe(e =>{
      console.log(e);
    })
  }

  updateWorkExpereienc(WorkExpereience:WorkExpereience){
    this.http.put('http://localhost:3000/work',WorkExpereience).subscribe(e =>{
      console.log(e);
    })
  }


  /// EMPLOYEES ANDS CANDIDATES 

  getOneCandidate(id:any){
    return this.http.get<any>('http://localhost:3000/candidate/'+id)
  }
  
  getCandidates(){
    return this.http.get<any>('http://localhost:3000/candidate')
  }

  addCandidates(candidate:any){
    this.http.post('http://localhost:3000/candidate',candidate).subscribe(e =>{
      console.log(e);
    })
  }

  updateCandidates(candidate:any){
    this.http.put('http://localhost:3000/candidate',candidate).subscribe(e =>{
      console.log(e);
    })
  }

  // employees Employee
  
  getEmployee(){
    return this.http.get<any>('http://localhost:3000/employee')
  }

  getOneEmployee(id:any){
    return this.http.get<language>('http://localhost:3000/employee/'+id)
  }

  addEmployee(employee:any){    
    this.http.post('http://localhost:3000/employee',employee).subscribe(e =>{
      console.log(e);
    })
  }




  // AUTH SECTION 

  setCredentials(credentials:any){
    localStorage.setItem('credentials',JSON.stringify(credentials))
  }
  getCredentials():any{
      return JSON.parse(localStorage.getItem('credentials') || '{}');
  } 

  clearCredentials(){
    localStorage.clear()
  }

}
