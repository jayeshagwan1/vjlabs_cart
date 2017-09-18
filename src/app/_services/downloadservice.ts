import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { saveAs } from 'file-saver';


@Injectable()
export class downloadUserFile{

    constructor(private http: Http) { }

// downloadfile(): Promise<Blob> {
//     return this.http.get('this.downloadURL').toPromise()
//       .then((r: Response) => {
//           new Blob([r.text()], {type: 'application/xml'});
//           saveAs(file, fileName);
//       })
//       .catch(error => console.log(error));
// }
}