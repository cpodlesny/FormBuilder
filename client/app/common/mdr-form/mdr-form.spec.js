import MdrFormModule from './mdr-form'
import MdrFormController from './mdr-form.controller';
import MdrFormComponent from './mdr-form.component';
import MdrFormTemplate from './mdr-form.html';

describe('MdrForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MdrFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MdrFormController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MdrFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MdrFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MdrFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MdrFormController);
      });
  });
});
