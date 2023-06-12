import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store'
import * as fromList from '../../store/save'
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-builder-list',
  templateUrl: './builder-list.component.html',
  styleUrls: ['./builder-list.component.scss']
})
export class BuilderListComponent implements OnInit {
  buildings$!: Observable<fromList.BuildingResponse[] | null>
  loading$!: Observable<boolean | null>;

  pictureDefault: string = 'https://firebasestorage.googleapis.com/v0/b/buildings-app-14673.appspot.com/o/image%2F1686261497024_inmueble.jpg?alt=media&token=a85b6e78-9879-4a9b-93ac-ebda6262f107&_gl=1*hvmxtq*_ga*MzIxNDA5ODA3LjE2ODQyNjE5NDQ.*_ga_CW55HF8NVT*MTY4NjU4OTUyNy4yNy4xLjE2ODY1ODk1NTMuMC4wLjA.'

  constructor(
    private store: Store<fromRoot.State>
  ){}

  ngOnInit(): void {
    this.store.dispatch(new fromList.Read());
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.buildings$ = this.store.pipe(select(fromList.getBuildings));
  }

}
