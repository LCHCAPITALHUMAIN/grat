var myModule = angular.module('angina', []);
myModule.controller('MainCtrl', function($scope, anginaModel, anginaHelper) {
  $scope.currentStory = null;
  $scope.statuses = anginaModel.getStatuses();
  $scope.types = anginaModel.getTypes();
  $scope.stories = anginaModel.getStories();

  $scope.typesIndex = anginaHelper.buildIndex($scope.types, 'name');
  $scope.statusesIndex = anginaHelper.buildIndex($scope.statuses, 'name');

  $scope.setCurrentStory = function(story) {
    $scope.currentStory = story;
    $scope.currentStatus = $scope.statusesIndex[story.status];
    $scope.currentType = $scope.typesIndex[story.type];
  };

  $scope.createStory = function() {
    $scope.stories.push({
      title:'New Story',
      description:'Description pending.',
      criteria:'Criteria pending.',
      status:'To Do'
    });
  };

  $scope.setCurrentStatus = function(status) {
    if(typeof $scope.currentStory !== 'undefined') {
      $scope.currentStory.status = status.name;
    }
  };

  $scope.setCurrentType = function(type) {
    if(typeof $scope.currentStory !== 'undefined') {
      $scope.currentStory.type = type.name;
    }
  };

});

myModule.factory('anginaHelper', function() {
  var buildIndex = function(source, property) {
    var tempArray = [];
    for(var i = 0, len = source.length; i < len; ++i) {
      tempArray[source[i][property]] = source[i];
    }
    return tempArray;
  };

  return {
    buildIndex: buildIndex
  };
});

myModule.factory('anginaModel', function() {
  var getStatuses = function() {
    var tempArray = [
      {name:'Back Log'},
      {name:'To Do'},
      {name:'In Progress'},
      {name:'Code Review'},
      {name:'QA Review'},
      {name:'Verified'},
      {name:'Done'}
    ];
   
    return tempArray;
  };

  var getTypes = function() {
    var tempArray = [
      {name:'Feature'},
      {name:'Enhancement'},
      {name:'Bug'},
      {name:'Spike'}
    ];
   
    return tempArray;
  };

  var getStories = function() {
    var tempArray = [
      {title:'Story 00',
      description:'Description pending.',
      criteria:'Criteria pending.',
      status:'To Do',
      type:'Feature',
      reporter:'Lukas Ruebbelke',
      assignee:'Brian Ford'},

      {title:'Story 01',
      description:'Description pending.',
      criteria:'Criteria pending.',
      status:'Back Log',
      type:'Feature',
      reporter:'Lukas Ruebbelke',
      assignee:'Brian Ford'},

      {title:'Story 02',
      description:'Description pending.',
      criteria:'Criteria pending.',
      status:'Code Review',
      type:'Enhancement',
      reporter:'Lukas Ruebbelke',
      assignee:'Brian Ford'},
  
      {title:'Story 03',
      description:'Description pending.',
      criteria:'Criteria pending.',
      status:'Done',
      type:'Enhancement',
      reporter:'Lukas Ruebbelke',
      assignee:'Brian Ford'},

      {title:'Story 04',
      description:'Description pending.',
      criteria:'Criteria pending.',
      status:'Verified',
      type:'Bug',
      reporter:'Lukas Ruebbelke',
      assignee:'Brian Ford'},
   
      {title:'Story 05',
      description:'Description pending.',
      criteria:'Criteria pending.',
      status:'To Do',
      type:'Spike',
      reporter:'Lukas Ruebbelke',
      assignee:'Brian Ford'}
    ];

    return tempArray;
  };

  return {
    getStatuses: getStatuses,
    getTypes: getTypes,
    getStories: getStories
  };

});