/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/**
 * @author Vitaliy Fedoriv
 */

import {Component, OnInit} from '@angular/core';
import {ProgramService} from '../program.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Program} from '../program';
import 'rxjs/Rx';


@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  errorMessage: string;
  program: Program;

  constructor(private route: ActivatedRoute, private router: Router, private programService: ProgramService) {
    this.program = <Program>{};
  }

  ngOnInit() {
    const programId = this.route.snapshot.params['id'];
    this.programService.getProgramById(programId).subscribe(
      program => this.program = program,
      error => this.errorMessage = <any> error);
  }

  gotoProgramsList() {
    this.router.navigate(['/programs']);
  }

  editProgram() {
    this.router.navigate(['/programs', this.program.id, 'edit']);
  }

}
