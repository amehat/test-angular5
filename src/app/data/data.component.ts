import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import * as Moment from 'moment';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { DataService } from '../service/data.service';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Person } from '../models/personn';
import { Post } from '../models/post';

/**
 * Instanciation de la modal
 * @author Arnaud Méhat <amehat@gmail.com>
 */
export class NgbdModalContent {
  @Input() name;

  /**
   * 
   * @param activeModal Injection de dépendance de NgbActiveModal
   */
  constructor(public activeModal: NgbActiveModal) {}
}

/**
 * Composant Data qui affiche les données 
 * @author Arnaud Méhat <amehat@gmail.com>
 */
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass']
})
export class DataComponent implements OnInit {
  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  public closeResult: string;
  public moments = Moment;
  public dtOptions: DataTables.Settings = {};
  public persons: Person[] = [];
  public posts: Post[];
  public id: number;
  public reason: any;
  public dtTrigger: Subject<any> = new Subject();

  /**
   * Constructeur
   * @param dataService Service DataService par injection de dépendance 
   * @param http HttpClient par injection de dépendance
   * @param modalService NgbModal par injection de dépendance
   * @returns void
   */
  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private modalService: NgbModal
  ) { 
    Moment.locale('fr');
  }

  /**
   * init
   * @returns void
   */
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.dataService.getList()
    .subscribe(personn => {
      this.persons = personn;
      this.dtTrigger.next();
    })
  }

  /**
   * Ouvre une modal
   * @param content 
   * @param id Identifiant du post à afficher dans la modal
   * @access public
   */
  open(content, id: number) {
    this.id = id;
    console.log('id: ' + id)
    this.dataService.get(id)
    .subscribe(post => {
        this.posts = post;
    },
    error => {
      console.log(error)
    }, 
    () => {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    })
    
  }

  /**
   * Fermeture de la modal
   * @param reason événement capturé
   * @access private
   */
  public getDismissReason(reason: any): string {
    if (this.reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (this.reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${this.reason}`;
    }
  }

}
