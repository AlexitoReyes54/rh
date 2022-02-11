import { Component, OnInit } from '@angular/core';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styles: ['.rhSection{margin-top:50px; }.createBtn{margin-bottom:30px;}.btn{margin:5px}'
  ]
})
export class ConfigComponent implements OnInit {

  constructor(private service:RhService) { }
  works:any = []
  trainings:any = []
  ngOnInit(): void {
    this.loadWorks()
    this.loadTraining()
  }
  signout(){
    this.service.clearCredentials()
  }
  
  loadWorks(){
    this.service.getWorkExpereience().subscribe(e =>{
      console.log(e.workExperiences);
      this.works = e.workExperiences;
    })
  }

  loadTraining(){
    this.service.getTraining().subscribe(e =>{
      console.log(e.trainings);
      this.trainings = e.trainings;
    })
  }

  deleteWork(id:number){
    this.service.deleteWorkExpereience(id)
    this.loadWorks()
  }

  deleteTraining(id:number){
    this.service.deleteTraining(id)
    this.loadTraining()
  }

}
