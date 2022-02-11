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

  constructor(private activeRoute: ActivatedRoute,
    private service:RhService,
    public router: Router) { }
    
    id:number = this.activeRoute.snapshot.params['id'];
    description = new FormControl('');
    able = new FormControl(true);
    level = new FormControl('Grado'); // Grado | Post-grado | Maestría Doctorado | Técnico | Gestión
    startDate = new FormControl('2000-01-01');
    endDate = new FormControl('2000-01-01');
    institucion = new FormControl('');

    ngOnInit(): void {
  
      if (!this.isCreating()) {
        this.loadData()
      }
      
    }
  
    
  formatDate(unformated:string):string{
    let tmp = new Date(unformated)
    let year = tmp.getFullYear()
    let moth = tmp.getMonth()
    let day = tmp.getDay()

    if (day < 10 && moth < 10) {
      return  year+'-0'+moth+'-0'+day;
    }

    if (day < 10) {
      return  year+'-'+moth+'-0'+day;
    }

    if (moth < 10) {
      return  year+'-0'+moth+'-'+day;
    }

    return  year+'-'+moth+'-'+day;
    
  }


    loadData(){
      this.service.getOneTraining(this.id).subscribe((a) =>{
        this.description.setValue(a.trainings.description)
        this.level.setValue(a.trainings.level)
        this.institucion.setValue(a.trainings.institucion)
        this.able.setValue(a.trainings.state)
        
        this.startDate.setValue(this.formatDate(a.workExperiences.startDate))    
        this.endDate.setValue(this.formatDate(a.workExperiences.endDate))
        console.log(a);
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
      let description = this.description.value
      let institucion = this.institucion.value
      let level = this.level.value
      let startDate = this.startDate.value
      let endDate = this.endDate.value 
      let state:boolean = Boolean(this.able.value);
      this.service.addTraining({id,description,institucion,level,startDate,endDate,state})
      alert('creado')
      
    }
  
    update(){

      let id:number =  this.id;
      let description = this.description.value
      let institucion = this.institucion.value
      let level = this.level.value
      let startDate = this.startDate.value
      let endDate = this.endDate.value 
      let state:boolean = Boolean(this.able.value);
      this.service.updateTraining({id,description,institucion,level,startDate,endDate,state})
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
