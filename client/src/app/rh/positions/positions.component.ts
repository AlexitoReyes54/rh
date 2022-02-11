import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styles: [
  ]
})
export class PositionsComponent implements OnInit {

  id:number = this.activeRoute.snapshot.params['id'];
  name = new FormControl('');
  risk = new FormControl(1);
  minSalary = new FormControl(0);
  maxSalary = new FormControl(0);
  state = new FormControl(true);
  constructor(private activeRoute: ActivatedRoute,
    private service:RhService,
    public router: Router) { }

  ngOnInit(): void {
    if (!this.isCreating()) {
      this.loadData()
    }
  }

  loadData(){
    this.service.getOnePosition(this.id).subscribe((a) =>{
      this.name.setValue(a.positions.name)
      this.risk.setValue(a.positions.riskLevel)
      this.minSalary.setValue(a.positions.minimumSalary)
      this.maxSalary.setValue(a.positions.maximunSalary)
      this.state.setValue(a.positions.state)
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
    let id = this.id
    let name = this.name.value
    let riskLevel = this.risk.value
    let state = this.state.value
    let minimumSalary = this.minSalary.value
    let maximunSalary =  this.maxSalary.value
    this.service.addPosition({
      id,name,riskLevel,state,minimumSalary,maximunSalary
    });
    alert('creado')
  }

  update(){
    let id = this.id
    let name = this.name.value
    let riskLevel = this.risk.value
    let state = this.state.value
    let minimumSalary = this.minSalary.value
    let maximunSalary =  this.maxSalary.value
    this.service.updatePosition({
      id,name,riskLevel,state,minimumSalary,maximunSalary
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
