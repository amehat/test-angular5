import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Person } from '../models/personn';

/**
 * Service permettant d'intéragir avec les webservices et fichiers json du post
 */
@Injectable()
export class DataService {

  /**
   * Url du webservice
   * @access protected
   */
  protected url: string;

  /**
   * Constructeur
   * @param http HttpClient par injection de dépendance
   * @access public
   */
  constructor(private http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com';
  }

  /**
   * Retourne la liste complète des posts
   * @returns Observable
   * @access public
   */
  public getList(): Observable<any> {
    return this.http.get('./assets/post.json');
  }

  /**
   * Retourne les données d'un post donné
   * @param id Identifiant du post à récupérer
   * @return Observable
   * @access public
   */
  public get(id: number): Observable<any> {
    return this.http.get(this.url + '/posts/' + id);
  }

}
