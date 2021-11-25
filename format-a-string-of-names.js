function list(names){
  
  const len = names.length;
  
  if(len === 1) return names[0].name;
  
  const arrayNames = names.map((name, index) => {
    if (index + 1 === len) {
      return '& ' + name.name;
    }
    if (index + 2 === len) {
      return name.name;
    }
    else {
      return name.name + ',';
    }
  })
  
  return arrayNames.join(' ');
}
