import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {RhService} from '../../rh.service'
import { language } from '../interfaces/language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styles: [
  ]
})
export class LanguagesComponent implements OnInit {

  id:number = this.activeRoute.snapshot.params['id'];
  name = new FormControl('');
  able = new FormControl(true);

  constructor(private activeRoute: ActivatedRoute,
    private service:RhService,
    public router: Router) { }

  ngOnInit(): void {
  
    if (!this.isCreating()) {
      this.loadData()
    }
    
  }

  loadData(){
    this.service.getOneLanguage(this.id).subscribe((a) =>{
      this.name.setValue(a.languages.name)
      this.able.setValue(a.languages.state)
      console.log(a.languages);
    })
  }

  clickBtn(){
    if (this.isCreating()) {
      this.create()
    } else {
      this.update()
    }
    this.router.navigate(['/rh']);
  }

  create(){
    let id:number =  this.id;
    let name:string =  this.name.value.toString() ;
    let state:boolean = Boolean(this.able.value);
    this.service.addLanguage({id,name,state})
    alert('creado')
    
  }

  update(){
    let id:number =  this.id;
    let name:string =  this.name.value.toString() ;
    let state:boolean = Boolean(this.able.value);
    this.service.updateLanguege({id,name,state})
    alert('actualizado')
  }


  isCreating(){
    if(this.id > 0 ){
      return false;
    }else{
      return true;
    }
    
  }

}
