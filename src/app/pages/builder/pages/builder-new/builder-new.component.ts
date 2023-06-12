import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromList from '../../store/save';

@Component({
  selector: 'app-builder-new',
  templateUrl: './builder-new.component.html',
  styleUrls: ['./builder-new.component.scss']
})
export class BuilderNewComponent {
  loading$!: Observable<boolean | null>;
  photoLoaded!: string;

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  registerBuilding( form: NgForm ): void {
    if(form.valid) {
      this.loading$ = this.store.pipe(select(fromList.getLoading));
      const buildingCreateRequest: fromList.BuildingCreateRequest = {
        name: form.value.name,
        picture: this.photoLoaded,
        price: Number(form.value.price),
        address: form.value.address
      }

      this.store.dispatch( new fromList.Create(buildingCreateRequest) );
    }
  }

  onFilesChanged( url: any ): void {
    if( url ) {
      this.photoLoaded = url;
    }
  }

}
