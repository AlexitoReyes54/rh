import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['.space{ margin-top: 160px;}'
  ]
})
export class LoginComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private service:RhService,
    public router: Router) { }

  name = new FormControl('');
  password = new FormControl('');
  rh = false;
  candidate = false;

  ngOnInit(): void {
    this.compareData()
  }

  compareData(){
    if (this.name.value == 'admin') {
      this.router.navigate(['/rh']);
    }else if(this.name.value != 'admin' &&this.name.value != ''){

      this.service.getCandidates().subscribe(e =>{
        for (let i = 0; i < e.candidates.length ; i++) {
          
          if (this.name.value == e.candidates[i].name) {
            console.log(e.candidates[i].name );
            this.router.navigate(['/home']);
            this.service.setCredentials(e.candidates[i])
            break
          }

        }
      })
    }

  }

  moveOn(){
    

    if(this.candidate){
      //alert('candidate')
      //this.router.navigate(['/home']);
    }else if(this.rh){
      //this.router.navigate(['/rh']);
    }else{
      //alert('Error en las credenciales')
    }
  }

  clickBtn(){
    this.compareData()
  }

}
