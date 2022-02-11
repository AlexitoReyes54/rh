import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styles: [
  ]
})
export class CompetenceComponent implements OnInit {

  id:number = this.activeRoute.snapshot.params['id'];
  description = new FormControl('');
  state = new FormControl(true);

  constructor(private activeRoute: ActivatedRoute,
    private service:RhService,
    public router: Router) { }

  ngOnInit(): void {

    if (!this.isCreating()) {
      this.loadData()
    }

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
    let description:string =  this.description.value.toString() ;
    let state:boolean = Boolean(this.state.value);
    this.service.addCompetence({id,description,state})
    alert('creado')
    
  }

  update(){
    let description:string =  this.description.value.toString() ;
    let state:boolean = Boolean(this.state.value);
    let id:number =  this.id;
    this.service.updateCompetence({id,description,state})
    alert('actualizado')
  }


  loadData(){
    this.service.getOneCompetence(this.id).subscribe((a) =>{
      this.state.setValue(a.competences.state)
      this.description.setValue(a.competences.description)
      console.log(a);
    })
  }

  isCreating(){
    if(this.id > 0 ){
      return false;
    }else{
      return true;
    }
    
  }

}
