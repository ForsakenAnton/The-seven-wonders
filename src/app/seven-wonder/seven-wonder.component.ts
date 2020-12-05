import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { from } from 'rxjs';
import {TheSevenWondersService} from '../../services/seven-wonders.service';

@Component({
  selector: 'app-seven-wonder',
  templateUrl: './seven-wonder.component.html',
  styleUrls: ['./seven-wonder.component.css'],
  styles: [`.invisibleChildren{display: none;}
            .invisibleParents{display: none;}
            .divDetails{margin: auto; text-align: center; box-shadow: 0 0 10px grey; border-radius:10px}
            .imgDetails{height: 500px; box-shadow: 0 0 20px black; border-radius: 10px}`
],
  providers: [TheSevenWondersService],
})

export class SevenWonderComponent implements OnInit {

  mySevenWonders = [];

  isChildrenVisibility: boolean = true;
  isDivDetails: boolean = false;
  isImgDetails: boolean = false;

  constructor(private sevenWonder: TheSevenWondersService) { }

  ngOnInit(): void {
    this.mySevenWonders = this.sevenWonder.getSewenWonders();
  }

  // onClickChildrenVisibility() {
  //    this.isChildrenVisibility = !this.isChildrenVisibility;
  // }

  // onClickDivDetails() {
  //   this.isDivDetails = !this.isDivDetails;
  // }

  // onClickImgDetails() {
  //   this.isImgDetails = !this.isImgDetails;
  // }

  onClickChangeStyleElements() {
    this.isChildrenVisibility = !this.isChildrenVisibility;
    this.isDivDetails = !this.isDivDetails;
    this.isImgDetails = !this.isImgDetails;
  }

  onClickMoreInfo(e) {

    if(!this.isChildrenVisibility)
    return;

    this.onClickChangeStyleElements();
    //image.removeEventListener('click', this.onClickMoreInfo);
    //image.removeEventListener('click', this.onClickChangeStyleElements);

    let image = document.getElementById(e.target.id);
    let div = image.parentElement;

    let container = div.parentElement;

    container.querySelectorAll('div').forEach( (element) => {

        if(element !== div) {
          element.style.display = "none";
        }
    });
  }

  onClickBack() {
    this.onClickChangeStyleElements();
    let div = document.getElementById("mainContainer");
    div.querySelectorAll('div').forEach( (element) => {

        console.log(element.id + "    " + element.style.display); //
        if(element.style.display === "none") {
          element.style.display = "block";
        }
    });
  }
}
