import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppModule } from '../app.module';
import { DataComponent, NgbdModalContent } from './data.component';
import { DataService } from '../service/data.service'


describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 10
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DataTablesModule,
        HttpClientTestingModule,
        NgbModule.forRoot()
      ],
      providers: [
        DataService,
        DataComponent
      ],
      declarations: [ DataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    component.dtOptions =  {
      pagingType: 'full_numbers',
      pageLength: 10
    };;
    fixture.detectChanges();
  });

  it('Devrait créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('Devrait retourner toutes les labels des balises `th`', async(() => {
    const fixture = TestBed.createComponent(DataComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let nodes = compiled.querySelectorAll('th')
    expect(nodes[0].textContent).toContain('ID');
    expect(nodes[1].textContent).toContain('Label');
    expect(nodes[2].textContent).toContain('Description');
    expect(nodes[3].textContent).toContain('Photo');
    expect(nodes[4].textContent).toContain('Ajout');
  }));

  it('getDismissReason devrait exister', () => {
    const fixture = TestBed.createComponent(DataComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    ModalDismissReasons.ESC
    expect(component.getDismissReason).toBeTruthy();
    let result = component.getDismissReason(ModalDismissReasons.ESC);

    result = component.getDismissReason(ModalDismissReasons.BACKDROP_CLICK);
  })

  it('open() devrait exister', () => {
    const fixture = TestBed.createComponent(DataComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    expect(component.open).toBeTruthy();
  });

});
