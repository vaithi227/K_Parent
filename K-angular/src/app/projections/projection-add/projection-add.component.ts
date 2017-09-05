
import {Component, OnInit} from '@angular/core';
import {ProjectionService} from '../projection.service';
import {Projection} from '../projection';
import {Program} from '../../programs/program';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projection-add',
  templateUrl: './projection-add.component.html',
  styleUrls: ['./projection-add.component.css']
})
export class ProjectionAddComponent implements OnInit {

  projection: Projection;
  errorMessage: string;
  programList: Program[];

  constructor(private projectionService: ProjectionService, private router: Router) {
    this.projection = <Projection>{};
  }

  ngOnInit() {
  console.log('getPrograms ngOnInit log: ');
  console.log(this.programList);
  this.projectionService.getProgramLists().subscribe(
      programs => this.programList = programs,
      error => this.errorMessage = <any> error);
      
      
  }

  onSubmit(projection: Projection) {
    projection.id = null;
    this.projectionService.addProjection(projection).subscribe(
      new_projection => {
        this.projection = new_projection;
        this.gotoProjectionsList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoProjectionsList() {
    this.router.navigate(['/projections']);
  }
  

}
