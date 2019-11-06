import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApplicationPage } from '../pages/application/application.page';
import { InformationPage } from '../pages/information/information.page';
import { EnterPage } from '../pages/enter/enter.page';
import { ManagementPage } from '../pages/management/management.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalController : ModalController) {}

  async openApplication(){
    const application = await this.modalController.create({
    component : ApplicationPage
    });
    application.present();
  }

  async openInformation(){
    const information = await this.modalController.create({
    component : InformationPage
    });
    information.present();
  }
  async openEnter(){
    const enter = await this.modalController.create({
      component : EnterPage
      });
      enter.present();
  }
  async openManagement(){
    const management = await this.modalController.create({
      component : ManagementPage
      });
      management.present();
  }
}
