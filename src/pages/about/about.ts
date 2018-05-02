import { Component } from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';

import { AdministradoOptions } from '../../interfaces/administrado-options';
import {TabsPage} from "../tabs-page/tabs-page";
import {NgForm} from "@angular/forms";

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    acta: AdministradoOptions = { nombre: '', cedula: '' , telefono: '', email:'', direccion_domicilio: '', direccion_trabajo: '', direccion_estudios:'',
        lugar: '', hechos_constatados:'', medidas_cautelares:''};
    submitted = false;
  conferenceDate = ontimeupdate;

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public userData: UserData) { }

  generarActa(form: NgForm) {
      if (form.valid) {
          this.submitted = true;
          this.userData.generarActa(this.acta.nombre);
          this.navCtrl.push(TabsPage);
      }
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
