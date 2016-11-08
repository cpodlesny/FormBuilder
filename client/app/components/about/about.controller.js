import _ from 'lodash';

class AboutController {
  /*@ngInject*/
  constructor (
      $log,
      $location
  ) {
    this._$log      = $log;
    this._$location = $location;
    this._name      = 'AboutController';
    this.model      = {
      customer_first_name: 'Adam'
    };
  }

  $onInit () {
    this.config = {
      form: {
        name:      'filterBar',
        theme:     'mdr-form--default',
        className: 'mdr-form',
        fieldsets: [
          {
            subheader: 'Customer',
            fields: [
              {
                label:   'First name',
                type:    'text',
                name:    'customer_first_name',
                ngModel: this.model.customer_first_name,
                ngChange: (params) => {
                  return this.updateTextField(params);
                },
                templateUrl: 'app/components/about/form/first_name.html'
              },
              {
                label:   'Last name',
                type:    'text',
                name:    'customer_last_name',
                ngModel: '',
                ngChange: (params) => {
                  return this.updateTextField(params);
                },
                templateUrl: 'app/components/about/form/last_name.html'
              },
            ]
          },
          {
            subheader: 'Manager',
            fields: [
              {
                label:   'Staff',
                className: 'md-primary',
                type:    'checkbox',
                name:    'staff',
                ngModel: '',
                ngChange: (params) => {
                  return this.updateTextField(params);
                },
                templateUrl: 'app/components/about/form/is_staff.html'
              },
              {
                label:   'Staff',
                type:    'checkbox',
                name:    'staff',
                ngModel: '',
                ngChange: (params) => {
                  return this.updateTextField(params);
                }
              }
            ]
          },
          {
            subheader: 'Dates',
            fields: [
              {
                label:   'Start From',
                type:    'date',
                name:    'start_from',
                ngModel: '',
                ngChange: (params) => {
                  return this.updateTextField(params);
                },
                templateUrl: 'app/components/about/form/start_from.html'
              }
            ]
          }
        ]
      }
    };
    this._$log.debug(`${this._name} load`);
  }

  updateTextField (params) {
    this.model[params.field.name] = params.field.ngModel;
    const queryParams = {};
    _.map(this.model, (val, key)  => {
      if (val !== "") {
        queryParams[key] = val;
      }
    });
    this._$location.search(queryParams);
    this._$log.debug(params.field);
    this._$log.debug(params.form);
  }

}

export default AboutController;
