import { Injectable } from '@angular/core';
import Constant from '../core/components/Constants/Constants';
@Injectable({
  providedIn: 'root',
})
export class MasterServiceService {
  public getConstant() {
    return new Constant();
  }
}
