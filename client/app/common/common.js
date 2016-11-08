import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import MdrForm from './mdr-form';
import MdrFieldset from './mdr-fieldset';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  MdrForm,
  MdrFieldset
])
  
.name;

export default commonModule;
