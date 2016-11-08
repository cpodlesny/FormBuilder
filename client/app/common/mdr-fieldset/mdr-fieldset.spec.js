import MdrFieldsetModule from './mdr-fieldset'
import MdrFieldsetController from './mdr-fieldset.controller';
import MdrFieldsetComponent from './mdr-fieldset.component';
import MdrFieldsetTemplate from './mdr-fieldset.html';

describe('MdrFieldset', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MdrFieldsetModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MdrFieldsetController();
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
      expect(MdrFieldsetTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MdrFieldsetComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MdrFieldsetTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MdrFieldsetController);
      });
  });
});
