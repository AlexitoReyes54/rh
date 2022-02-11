import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styles: [
  ]
})
export class ApplicantsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private service:RhService,
    public router: Router) { }
    id:number = this.activeRoute.snapshot.params['id'];
    candidate:any = {};
    position:any = {};

    ngOnInit(): void {
      this.loadData()
  }

  loadData(){
    this.service.getOneCandidate(this.id).subscribe(e =>{
      this.candidate = e.candidates
      console.log(e.candidates.positionAspire);
      this.service.getOnePosition(e.candidates.positionAspire).subscribe(e =>{
        this.position = e.positions
      })
    })

  }

  createEmployee(){ 
    let employee = {
    name:this.candidate.name,
    document:this.candidate.document,
    departament:this.candidate.departament,
    startDate:new Date(),
    postion:this.candidate.positionAspire,
    monthlyIncome:this.candidate.salaryAspire,
    state:true 
    }
    console.log(employee);
    
    this.service.addEmployee(employee)
    let candidate = this.candidate
    candidate.positionAspire = -1
    this.service.updateCandidates(candidate)
    this.service.deletePosition(this.position.id)
    this.router.navigate(['/rh']);
  }

  reject(){
    let candidate = this.candidate
    candidate.positionAspire = 0
    this.service.updateCandidates(candidate)
    this.router.navigate(['/rh']);
  }
}
