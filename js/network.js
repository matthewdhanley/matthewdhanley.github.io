// todo - Don't hardcode IDs, hard to read. Use variables instead.

// create an array with nodes
var nodes = new vis.DataSet([
  {id: 1, modal: 'me', label: 'Matthew Hanley',x:0,y:0,fixed:true,mass:5, image: 'img/mattv2.jpeg', shape:'circularImage',size:100},
  {id: 2, modal: 'cu', image: 'img/cu-logo.png', shape: 'image',size:80,mass:5},
  {id: 3, modal: 'lasp', image: 'img/lasp-logo.png', shape: 'image',size:40},
  {id: 4, modal: 'robotics', image: 'img/robotics-logo.png', shape: 'circularImage',size:50},
  {id: 5, modal:'sim-science', label: 'SIM Science', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf1c0', size: 50, color:'#000000'}},
  {id: 6, modal: 'qs-wheels', label: 'QuikSCAT Reaction Wheels'},
  {id: 7, modal:'aim-shadow', label: 'AIM Lunar Shadow Prediction Tool', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf185', size: 50, color:'#000000'}},
  {id: 8, modal:'procreader', label: 'LASP Proc Reader', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf530', size: 50, color:'#000000'}},
  {id: 9, modal: 'rtsviewer', label: 'SORCE Automation Vis'},
  {id: 10, modal: 'plotcheck', label: 'Plot Checking Log'},
  {id: 11, modal: 'qsgrad', label: 'QuikSCAT Grad Lead', image: 'img/quikscat.jpg', shape: 'image', size: 50},
  {id: 12, modal: 'decom', label: 'QuikSCAT Decommissioning', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf06d', size: 50, color:'#000000'}},
  {id: 13, modal: 'csim', label: 'CSIM'},
  {id: 14, modal: 'lanl', image: 'img/lanl.png', shape: 'image',size:50},
  {id: 15, modal: 'cadrev', label: 'CAD Revision Control'},
  {id: 16, modal: 'manu', label: 'Manufacturing Management'},
  {id: 17, modal: 'draw', label: 'Engineering Drawings', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf568', size: 50, color:'#000000'}},
  {id: 18, modal: 'circuit', label: 'Custom Circuits', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf0e7', size: 50, color:'#000000'}},
  {id: 19, modal: 'robomeche', label: 'Mechanical Team', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf6e3', size: 50, color:'#000000'}},
  {id: 20, modal: 'robocsci', label: 'Software Team', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf121', size: 50, color:'#000000'}},
  {id: 21, modal: 'poster', label: 'Expo Poster', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf15b', size: 50, color:'#000000'}},
  {id: 24, modal: 'nvidia', image: 'img/nvidia.png', shape:'image', size:50},
  {id: 25, modal: 'ind-study', label: 'Independent Study'},
  {id: 28, modal: 'thesis', mass:3, label: 'Thesis', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf5fc', size: 50, color:'#000000'}},
  {id: 31, modal: 'personal', label: 'Personal Projects'},
  {id: 38, modal: 'blob', label: 'Blob Tracking', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf05b', size: 50, color:'#000000'}},
  {id: 39, modal: 'popsicle', label: 'Popsicle Sticks', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf128', size: 50, color:'#000000'}},
  {id: 40, modal: 'web', label: 'Web Development', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf1c9', size: 50, color:'#000000'}},
  {id: 63, modal: 'redbull', label: 'SlopeSoakers', shape: 'image', image: 'img/slopesoakers.png', size:40},
  {id: 64, modal: 'home', label: 'Upbringing', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf015', size: 50, color:'#000000'}},
  {id: 65, modal: 'ruths', label: 'Ruth Ann', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf2e5', size: 50, color:'#000000'}},
  {id: 66, modal: 'whippi', label: 'Whippi-Dip', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf2e7', size: 50, color:'#000000'}},
  {id: 67, modal: 'alpaca', label: 'Farm', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf6f0', size: 50, color:'#000000'}},
  {id: 68, modal: 'lawns', label: 'Lawn Care', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf06c', size: 50, color:'#000000'}},
  {id: 69, modal: 'rocketlab', shape: 'image', image: 'img/rocketlab.png', size:50},
  {id: 71, modal: 'hitl', label: 'HITL'},
  {id: 72, modal: 'sdr', label: 'SDR', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf7c0', size: 50, color:'#000000'}},
  {id: 73, modal: 'ebn0-em', label: 'Eb/N0 Emulation'},
  {id: 74, modal: 'gps-em', label: 'GPS Emulation', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf0ac', size: 50, color:'#000000'}},
  {id: 77, modal: 'data-budget', label: 'Lunar Data Budget'},



// hobbies
  {id: 32, modal: 'hobbies', label: 'Hobbies'},
  {id: 33, modal: 'photo', label: 'Photography', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf030', size: 50, color:'#000000'}},
  {id: 34, modal: 'ski', label:'Skiing',         shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf2dc', size: 50, color:'#000000'}},
  {id: 35, modal: 'kite', label: 'Kiteboarding', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf72e', size: 50, color:'#000000'}},
  {id: 36, modal: 'climb', label: 'Climbing',    shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf6fc', size: 50, color:'#000000'}},
  {id: 37, modal: 'beer', label: 'Beer',         shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf0fc', size: 50, color:'#000000'}},
  {id: 62, modal: 'bike', label: 'Bike',         shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf206', size: 50, color:'#000000'}},


//  SKILLS
  {id: 22, modal: 'ros', image: 'img/ros.png', shape: 'image', size:75, shadow:{size:10}},
  {id: 23, modal: 'solidworks', image: 'img/solidworks.png', shape: 'image'},
  {id: 26, modal: 'opencv', image: 'img/opencv.png', shape: 'image', size:50},
  {id: 27, modal: 'cuda', image: 'img/cuda.jpg', shape: 'image', size:50},
  {id: 29, modal: 'deeplearning', label: 'Deep Learning for Computer Vision'},
  {id: 30, modal: 'accelcomp', label: 'Accelerated Computing with CUDA C/C++'},
  {id: 57, modal: 'ees', label: 'Engineering Equation Solver (EES)'},
  {id: 58, modal: 'python', label: 'Python', image: 'img/python.png', shape: 'image', size: 40},
  {id: 59, modal: 'c', label: 'C/C++', image: 'img/c.png', shape: 'image', size: 40},
  {id: 60, modal: 'matlab', label: 'Matlab/Simulink', image: 'img/matlab.png', shape: 'image', size: 50},
  {id: 61, modal: 'db', label: 'Databases', image: 'img/db.png', shape: 'image', size: 30},
  {id: 75, modal: 'teamcity', shape: 'image', label: 'CI/CD', image: 'img/teamcity.png', size:50},
  {id: 76, modal: 'systems',  label: 'Systems Engineering'},
  {id: 80, modal: 'ait',  label: 'AI&T'},
  {id: 81, modal: 'ee',  label: 'Electrical Engineering'},
  {id: 82, modal: 'sops',  label: 'Spacecraft Operations'},
  {id: 83, modal: 'sw',  label: 'Software Engineering'},



// coursework
  {id: 56, modal: 'courses', label: 'Coursework', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf02d', size: 50, color:'#000000'}},
  {id: 41, modal: 'eng-comp', label: 'Engineering Computing'},
  {id: 42, modal: 'cad', label: 'Computer Aided Design'},
  {id: 45, modal: 'data-structures', label: 'Data Structures'},
  {id: 46, modal: 'thermo', label: 'Thermo (I/II)'},
  {id: 47, modal: 'compdes', label: 'Component Design'},
  {id: 48, modal: 'compsys', label: 'Computer Systems'},
  {id: 49, modal: 'mfg', label: 'Manufacturing'},
  {id: 50, modal: 'compvis', label: 'Computer Vision'},
  {id: 51, modal: 'data-analysis', label: 'Data Analysis'},
  {id: 52, modal: 'sysd', label: 'System Dynamics'},
  {id: 53, modal: 'software-dev', label: 'Software Development'},
  {id: 54, modal: 'data-mining', label: 'Data Mining'},
  {id: 55, modal: 'feedback', label: 'Feedback Control'},
  {id: 78, modal: 'mechatronics', label: 'Mechatronics'},
  {id: 79, modal: 'deep-learning', label: 'Deep Learning'},

// projects
  {id: 70, modal: 'eps-sim', label: 'EPS Simulation'},
  {id: 84, modal: 'spenvis', label: 'SPENVIS'},


]);

// create an array with edges
var edges = new vis.DataSet([
  // me to x
  {from: 1, to: 2},
  {from: 1, to: 3},
  {from: 1, to: 32},
  {from: 1, to: 31},
  {from: 1, to: 56},
  {from: 1, to: 64},
  {from: 1, to: 69}, // me to rocketlab

  // home to x
  {from: 64, to: 65},
  {from: 64, to: 66},
  {from: 64, to: 67},
  {from: 64, to: 68},


  // cu boulder to x
  {from: 2, to: 4},
  {from: 2, to: 14},
  {from: 2, to: 25},
  {from: 2, to: 28},

  // lasp to x
  {from: 3, to: 5},
  {from: 3, to: 6},
  {from: 3, to: 7,length:200},
  {from: 3, to: 8},
  {from: 3, to: 9},
  {from: 3, to: 10},
  {from: 3, to: 11},
  {from: 11, to: 12},
  {from: 3, to: 13},

  //senior design to x
  {from: 14, to: 15},
  {from: 14, to: 16},
  {from: 14, to: 17},
  {from: 14, to: 18},
  {from: 14, to: 21},

  // robotics to x
  {from: 4, to: 19},
  {from: 4, to: 20},

  // ros to x
  {from: 22, to: 20},

  // nvidia to x
  {from: 24, to: 25},
  {from: 24, to: 20},
  {from: 24, to: 28},
  {from: 24, to: 29},
  {from: 24, to: 30},

  // solidworks to x
  {from: 23, to: 17},
  {from: 23, to: 19},
  {from: 23, to: 15},
  {from: 23, to: 16},
  {from: 23, to: 42},
  {from: 23, to: 47},
  {from: 23, to: 49},

  // opencv to x
  {from: 26, to: 25},
  {from: 26, to: 28},
  {from: 26, to: 20},
  {from: 26, to: 38},
  {from: 26, to: 50},

  // cuda to x
  {from: 27, to: 25},
  {from: 27, to: 28},
  {from: 27, to: 30},

  // hobbies to x
  {from: 32, to: 33},
  {from: 32, to: 34},
  {from: 32, to: 35},
  {from: 32, to: 36},
  {from: 32, to: 37},
  {from: 32, to: 62},

  // personal to x
  {from: 31, to: 38},
  {from: 31, to: 39},
  {from: 31, to: 40},
  {from: 31, to: 63},

  // coursework
  {from: 56, to: 41},
  {from: 56, to: 42},
  {from: 56, to: 43},
  {from: 56, to: 44},
  {from: 56, to: 45},
  {from: 56, to: 46},
  {from: 56, to: 47},
  {from: 56, to: 48},
  {from: 56, to: 49},
  {from: 56, to: 50},
  {from: 56, to: 51},
  {from: 56, to: 52},
  {from: 56, to: 53},
  {from: 56, to: 54},
  {from: 56, to: 55},
  {from: 56, to: 79},  // deep learning
  {from: 56, to: 78},  // mechatronics

  // ees
  {from: 57, to: 46},

  //c++
  {from: 59, to: 41},
  {from: 59, to: 45},
  {from: 59, to: 48},
  {from: 59, to: 53},
  {from: 59, to: 25},
  {from: 59, to: 28},
  {from: 59, to: 22},
  {from: 59, to: 27},

  // python
  {from: 58, to: 20},
  {from: 58, to: 8},
  {from: 58, to: 13},
  {from: 58, to: 24},
  {from: 58, to: 25},
  {from: 58, to: 28},
  {from: 58, to: 38},
  {from: 58, to: 45},
  {from: 58, to: 50},
  {from: 58, to: 53},
  {from: 58, to: 54},
  {from: 58, to: 29},
  {from: 58, to: 22},
  {from: 58, to: 27},
  {from: 58, to: 70}, // to eps-sim
  {from: 58, to: 77}, // to data-budget
  {from: 56, to: 79}, // deep learning
  {from: 56, to: 78}, // mechatronics

  // databases
  {from: 61, to: 5},
  {from: 61, to: 8},
  {from: 61, to: 10},
  {from: 61, to: 40},
  {from: 61, to: 53},
  {from: 61, to: 54},

  // matlab
  {from: 60, to: 6},
  {from: 60, to: 14},
  {from: 60, to: 28},
  {from: 60, to: 39},
  {from: 60, to: 41},
  {from: 60, to: 46},
  {from: 60, to: 47},
  {from: 60, to: 49},
  {from: 60, to: 51},
  {from: 60, to: 52},
  {from: 60, to: 55},

  // teamcity
  {from: 71, to: 75}, // hitl to teamcity

  // systems engineering
  {from: 76, to: 70}, // systems to eps-sim
  {from: 76, to: 77}, // systems to data budget
  {from: 76, to: 84}, // systems to spenvis


  // hitl
  {from: 71, to: 72}, // hitl to sdr
  {from: 71, to: 73}, // hitl to ebn0-em
  {from: 71, to: 74}, // hitl to gps-em

  // rocketlab
  {from: 69, to: 76}, // to systems engineering
  {from: 69, to: 71}, // to hitl
  {from: 69, to: 80}, // to ait
  {from: 69, to: 81}, // to electrical engineering
  {from: 69, to: 82}, // to spacecraft operations
  {from: 69, to: 83}, // to software engineering
 

]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: {
    shape: 'dot',
    color: '#000000',
    size: 15,
    font: {
      color: '#000000'
    },
    // borderWidth: 4
    shadow: {
      enabled: true,
      color: 'rgba(127,127,127,0.5)',
      x: 2,
      y: 2
    }
  },
  edges: {
    arrows: 'to',
    color: {
      highlight: '#00fffc',
    },
    selectionWidth: 5,
  },
  interaction: {
    hover: true,
    navigationButtons: true,
    keyboard: true
  },
  physics: {
    forceAtlas2Based: {
      gravitationalConstant: -75,
      centralGravity: 0.004,
      springLength: 300,
      springConstant: 0.2
    },

    maxVelocity: 300,
    solver: 'forceAtlas2Based',
    timestep: 0.1,
    stabilization: {iterations: 200}
  },
  layout: {
    improvedLayout: true
  }
};

var options2 = {
  // position: {x:positionx,y:positiony}, // this is not relevant when focusing on nodes
  scale: 0.5,
  offset: {x: 0, y: 0},
  animation: {
    duration: 1000,
    easingFunction: "easeInOutQuad"
  }
};

// initialize your network!
var network = new vis.Network(container, data, options);
var networkCanvas = document.getElementById("mynetwork").getElementsByTagName("canvas")[0]
network.redraw();


function changeCursor(newCursorStyle){
  networkCanvas.style.cursor = newCursorStyle;
}

network.on('dragging', function () {
  changeCursor('grabbing');
});
network.on('hoverNode', function () {
  changeCursor('pointer');
});

network.on('blurNode', function () {
  changeCursor('grab');
});

network.on('dragEnd', function () {
  changeCursor('grab');
});

network.on( 'click', function(properties) {
  var ids = properties.nodes;
  var clickedNodes = nodes.get(ids);
  network.focus(ids[0], options2);
  try {
    var modal = document.getElementById(clickedNodes[0].modal);
  }
  catch(err){
    return;
  }
  if (typeof modal !== 'undefined') {
    try {
      console.log('#'+clickedNodes[0].modal);
      $('#'+clickedNodes[0].modal).toggle(true);
      ga('send', {
        hitType: 'event',
        eventCategory: 'Node',
        eventAction: 'click',
        eventLabel: modal.id
      });
    }
    catch(err){
      // alert("ERROR!");
      return;
    }
    // var span = modal.getElementsByClassName("close")[0];
    $('#'+clickedNodes[0].modal).find("span").click(function () {
      $('#'+clickedNodes[0].modal).toggle(false);
    });

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //   modal.style.display = "none";
    // };
    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      let mobile = isMobile.any();
      if (event.target === modal && !mobile) {
        $('#'+clickedNodes[0].modal).toggle(false);
      }
    }

  }});

