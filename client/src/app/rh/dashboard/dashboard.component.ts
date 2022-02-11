import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ['.rhSection{margin-top:50px; }.createBtn{margin-bottom:30px;}.btn{margin:5px}.flex{display: flex;justify-content: space-between;}'
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private service:RhService) { }
  languages:any = []
  competences:any = []
  positions:any = []
  postulantes:any = []
  search = new FormControl('');
  results:any = []
  searchAble:boolean = true;

  searchLanguage(){
    let results:any = []

    this.languages.forEach((element:any) => {
      if (element.name.match(this.search.value) && this.search.value != '' && this.searchAble == true) {
        console.log('exist');
        this.searchAble = false;
        this.results.push(element)  
      }
    });

    console.log('res',this.results);
    this.languages = this.results
  }

  ngOnInit(): void {
    this.loadLanguages() 
    this.loadCompetences()
    this.loadPositions()
    this.cargarPostulantes()
  }

  loadLanguages(){
    this.service.getLanguages().subscribe(e =>{
      this.searchAble = true;
      this.languages = e.languages;
    })
  }

  loadCompetences(){
    this.service.getCompetence().subscribe(e =>{
      this.competences = e.competences;
    })
  }

  loadPositions(){
    this.service.getPosition().subscribe(e =>{
      this.positions = e.positions;
    })
  }

  cargarPostulantes(){
    this.service.getCandidates().subscribe(e =>{
      console.log(e.candidates);
      
      e.candidates.forEach((element:any) => {
        
        if (element.positionAspire && element.positionAspire > 0) {
          this.postulantes.push(element)
        } 

      });
      
     
      
    })
  }

  deleteLang(id:number){
    this.service.deleteLanguege(id)
    this.loadLanguages()
  }

  deleteCompetence(id:number){
    this.service.deleteCompetence(id)
    this.loadCompetences()
  }

  deletePosition(id:number){
    this.service.deletePosition(id)
    this.loadPositions()
  }

  signout(){
    this.service.clearCredentials()
  }
}
