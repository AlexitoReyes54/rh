import { Component, OnInit } from '@angular/core';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private service:RhService) { }
  jobs:any = []
  hired:boolean = false

  ngOnInit(): void {
    
    
    
    this.checkIfIsHired()
    
    
  }
  signout(){
    this.service.clearCredentials()
  }

  loadJobs(){
    this.service.getPosition().subscribe(e =>{  
      this.jobs = e.positions
    })
  }

  applyJob(positionId:any){
    let candidateData = this.service.getCredentials()
    candidateData.positionAspire = positionId
    console.log(candidateData);
    this.service.updateCandidates(candidateData)
    alert('Esperando respuesta')
  }
  
  checkIfIsHired(){
    let candidateData = this.service.getCredentials()
    console.log(candidateData);
    
    //candidateData.name = 'alex' // juan
    this.service.getEmployee().subscribe(e => { 
      for (let i = 0; i < e.employee.length; i++) {   
        if (e.employee[i].name == candidateData.name) {
          console.log('hired');
          document.getElementById('hired')!.hidden = false;
          this.hired = true
          break;  
        }

        
      }
      
      
      if (this.hired == false) {
          this.loadJobs()
      }
    })
  }

}
