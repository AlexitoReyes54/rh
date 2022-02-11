import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styles: [
  ]
})
export class ExperienceComponent implements OnInit {

  id:number = this.activeRoute.snapshot.params['id'];
  company = new FormControl('');
  salary = new FormControl(0);
  startDate = new FormControl('2000-01-01');
  endDate = new FormControl('2000-01-01');
  position = new FormControl('');

  constructor(
    private activeRoute: ActivatedRoute,
    private service:RhService,
    public router: Router) { }

  ngOnInit(): void {
    
    if (!this.isCreating()) {
      this.loadData()
    }

    this.startDate.value
    this.endDate.value
    console.log(this.startDate.value < this.endDate.value);
    

  }




  loadData(){
    this.service.getOneWorkExpereience(this.id).subscribe((a) =>{
      this.company.setValue(a.workExperiences.company)
      this.position.setValue(a.workExperiences.position)
      this.salary.setValue(a.workExperiences.salary)
      this.startDate.setValue(this.formatDate(a.workExperiences.startDate))    
      this.endDate.setValue(this.formatDate(a.workExperiences.endDate))
  
    })
  }

  clickBtn(){
    if (this.startDate.value < this.endDate.value) {
      if (this.isCreating()) {
        this.create()
      } else {
        this.update()
      }
      this.router.navigate(['/rh']);
    }else{
      alert('las fechas estan mal');
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

  create(){
    let id = this.id
    let company = this.company.value
    let salary = this.salary.value
    let startDate = this.startDate.value
    let endDate = this.endDate.value
    let position = this.position.value
    this.service.addWorkExpereience({
      id,company,salary,startDate,endDate,position
    })
    alert('creado')
    
  }

  update(){
    let id = this.id
    let company = this.company.value
    let salary = this.salary.value
    let startDate = this.startDate.value
    let endDate = this.endDate.value
    let position = this.position.value
    this.service.updateWorkExpereienc({
      id,company,salary,startDate,endDate,position
    })
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
