import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './../../app.component';
import { EventModuleComponent } from './event-module.component';
import { LayoutComponent } from './../../layout/layout.component';
import { HeaderComponent } from './../../layout/header/header.component';
import { FooterComponent } from './../../layout/footer/footer.component';
import { EventServiceService } from './../../services/event-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConstant } from './../../appConstants';

describe('EventModuleComponent', () => {
  let component: EventModuleComponent;
  let fixture: ComponentFixture<EventModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EventModuleComponent, AppComponent, LayoutComponent, HeaderComponent, FooterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
