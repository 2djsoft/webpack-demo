// named exports : 여러개 사용 가능



export var area = function(r) {
  return Math.PI * r * r;
};

export var circumference = function (r) {
  return 2 * Math.PI * r;
};

export var textConsole = () => {
  console.log(23213123123);
}