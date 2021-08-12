import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
    searchForm: FormGroup;
    id: string;
  constructor(private fb: FormBuilder, private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
        title: new FormControl('')
    });
  }

  // tslint:disable-next-line:typedef
  searchForMovie(){

    this.router.navigate(['default/searchMovie'], { queryParams: {id: this.searchForm.controls.title.value }});
   }
}
