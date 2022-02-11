import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RhService } from 'src/app/rh.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styles: [
  ]
})
export class CandidateComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private service:RhService,
    public router: Router) { }
    
  name  = new FormControl('');
  document = new FormControl(''); 
  departament = new FormControl('');
  positionAspire = new FormControl(''); 
  salaryAspire = new FormControl(0); 


  ngOnInit(): void {
    var cedulaValida = "00116454281";
	  var cedulaNoValida = "asd2da";
	
	//alert ("Cedula " + cedulaValida + ": " + this.valida_cedula(cedulaValida));
	//alert ("Cedula " + cedulaNoValida + ": " + this.valida_cedula(cedulaNoValida ));
    
  }

  create(){
    let name  = this.name.value
    let document = this.document.value 
    let departament = this.departament.value
    let positionAspire = this.positionAspire.value 
    let salaryAspire = this.salaryAspire.value
    this.service.addCandidates({name,document,departament,positionAspire,salaryAspire})
  }
  
  clickBtn(){
    
    if (this.name.value == '' || this.salaryAspire.value == 0 || this.valida_cedula(this.document.value) == false) {
      //alert('llene los campos vacios')
      if (!this.valida_cedula(this.document.value)) {
        alert('Cedula invalida')
      }
      
    }else{
      this.create()
      this.router.navigate(['/login']);
    }

    
  }

  valida_cedula(ced:any) {  
    var c = ced.replace(/-/g,'');  
    var cedula = c.substr(0, c.length - 1);  
    var verificador = c.substr(c.length - 1, 1);  
    var suma = 0;  
    var cedulaValida = 0;
    if(ced.length < 11) { return false; }

    for (let i=0; i < cedula.length; i++) {  
        let mod:any = "";  
         if((i % 2) == 0){mod = 1} else {mod = 2}  
         let res:any = cedula.substr(i,1) * mod;  
         if (res > 9) {  
              res = res.toString();  
              let uno = res.substr(0,1);  
              let dos = res.substr(1,1);  
              res = eval(uno) + eval(dos);  
         }  
         suma += eval(res);  
    }  
    let el_numero = (10 - (suma % 10)) % 10;  
    if (el_numero == verificador && cedula.substr(0,3) != "000") {  
      cedulaValida = 1;
    }  
    else   {  
     cedulaValida = 0;
      
    }  
    console.log(cedulaValida);
    
  return cedulaValida;
}

}
