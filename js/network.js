// create an array with nodes
var nodes = new vis.DataSet([
  {id: 1, label: 'Matthew Hanley',x:0,y:0,fixed:true,mass:5, image: 'img/matt.jpg', shape:'circularImage',size:100},
  {id: 2, modal: 'cu', image: 'img/cu-logo.png', shape: 'image',size:80,mass:5},
  {id: 3, modal: 'lasp', image: 'img/lasp-logo.png', shape: 'image',size:40},
  {id: 4, image: 'img/robotics-logo.png', shape: 'circularImage',size:50},
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

// hobbies
  {id: 32, modal: 'hobbies', label: 'Hobbies'},
  {id: 33, modal: 'photo', label: 'Photography', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf030', size: 50, color:'#000000'}},
  {id: 34, modal: 'ski', label:'Skiing',         shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf2dc', size: 50, color:'#000000'}},
  {id: 35, modal: 'kite', label: 'Kiteboarding', shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf72e', size: 50, color:'#000000'}},
  {id: 36, modal: 'climb', label: 'Climbing',    shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf6fc', size: 50, color:'#000000'}},
  {id: 37, modal: 'beer', label: 'Beer',         shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf0fc', size: 50, color:'#000000'}},
  {id: 62, modal: 'bike', label: 'Bike',         shape: 'icon', icon:{face: '"Font Awesome 5 Free"', code:'\uf206', size: 50, color:'#000000'}},


//  SKILLS
  {id: 22, image: 'img/ros.png', shape: 'image', size:75, shadow:{size:10}},
  {id: 23, image: 'img/solidworks.png', shape: 'image'},
  {id: 26, image: 'img/opencv.png', shape: 'image', size:50},
  {id: 27, image: 'img/cuda.jpg', shape: 'image', size:50},
  {id: 29, modal: 'deeplearning', label: 'Deep Learning for Computer Vision'},
  {id: 30, modal: 'accelcomp', label: 'Accelerated Computing with CUDA C/C++'},
  {id: 57, label: 'Engineering Equation Solver (EES)'},
  {id: 58, label: 'Python', image: 'img/python.png', shape: 'image', size: 40},
  {id: 59, label: 'C/C++', image: 'img/c.png', shape: 'image', size: 40},
  {id: 60, label: 'Matlab/Simulink', image: 'img/matlab.png', shape: 'image', size: 50},
  {id: 61, label: 'Databases', image: 'img/db.png', shape: 'image', size: 30},

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

]);

// create an array with edges
var edges = new vis.DataSet([
  // me to x
  {from: 1, to: 2},
  {from: 1, to: 3},
  {from: 1, to: 32},
  {from: 1, to: 31},
  {from: 1, to: 56},

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
    hover: true
  },
  physics: {
    forceAtlas2Based: {
      gravitationalConstant: -75,
      centralGravity: 0.004,
      springLength: 150,
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
network.redraw();
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
      modal.style.display = "block";
    }
    catch(err){
      return;
    }
    var span = modal.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }});

function edges_fn(values, id, selected, hovering){
  values.width = 5;
}