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

/* tslint:disable:no-unused-variable */


/**
 * @author Vitaliy Fedoriv
 */


import {TestBed, async, inject} from '@angular/core/testing';
import {ProgramService} from './program.service';
import {environment} from 'environments/environment';
import {HttpModule} from '@angular/http';

describe('ProgramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ProgramService]
    });
  });

  it('should ...', inject([ProgramService], (service: ProgramService) => {
    expect(service).toBeTruthy();
  }));
});
