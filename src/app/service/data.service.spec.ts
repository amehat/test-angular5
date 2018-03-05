import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
  });

  it('Devrait créer le service', inject([
    HttpTestingController,
    DataService
  ], (
    HttpClient: HttpTestingController,
    service: DataService
  ) => {
    expect(service).toBeTruthy();
  }));

  it(`Devrait contenir le titre "Titre 1" lors de l'appel du webservice getList()`, inject([
    HttpTestingController, 
    DataService
  ], (
    httpClient: HttpTestingController, 
    service: DataService
  ) => {
    

    const dataService = TestBed.get(DataService)
    dataService.getList()
    .subscribe(data => {
      expect(data).toEqual([]);
      expect(data).toEqual(jasmine.objectContaining({
        "title": "Titre 1"
      }))
    })
  }));

  it('Devrait pouvoir appeler le webservice get()', inject([
    HttpTestingController,
    DataService
  ], (
    httpClient: HttpTestingController,
    service: DataService
  ) => {
    const dataService = TestBed.get(DataService)
    dataService.get(1)
    .subscribe(data => {
      expect(data).toEqual({
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      })
    })
  }))

});
