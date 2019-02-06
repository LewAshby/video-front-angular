import { Injectable } from '@angular/core';

declare var jQuery: any;

@Injectable()
export class SIPAjaxLoaderService {

  ajax_loader_id = '#ajax-loader';
  ajax_loader_message_id = '#ajax-loader label.message';

  default_message = 'Por favor, espere ...';

  counter = 0;

  constructor() { }

  showWaiting(message = 'Por favor, espere ...') {
    this.counter++;
    jQuery(this.ajax_loader_id).css({display: 'block'});
    jQuery(this.ajax_loader_message_id).html(message != null ? message: this.default_message);
  }

  hideWaiting() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = 0;
    }
    if (this.counter === 0) {
      jQuery(this.ajax_loader_id).css({display: 'none'});
      jQuery(this.ajax_loader_message_id).html(this.default_message);
    }
  }
}
