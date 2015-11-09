import angular from 'angular';

//Import Controllers
import MindController from './controllers/myController';

//Creating a Module
angular.module('app', [])

//Some Controllers
.controller('MindController', MindController);