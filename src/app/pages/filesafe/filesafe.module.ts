import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FilesafeRoutingModule } from './filesafe-routing.module';
import { FilesafeComponent } from './filesafe.component';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilesafeRoutingModule
  ],
  providers: [
    FileChooser,
    FilePath,
    File
  ],
  declarations: [FilesafeComponent],
  entryComponents: [FilesafeComponent],
  bootstrap: [FilesafeComponent],
})
export class FilesafeModule {}
