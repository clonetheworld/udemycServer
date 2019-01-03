import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LeduCourseModule } from './course/course.module';
import { LeduImageModule } from './image/image.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        LeduCourseModule,
        LeduImageModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeduEntityModule {}
