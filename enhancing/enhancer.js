module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  const {enhancement} = item;
  if (enhancement < 20 && enhancement > -1) {
    return {...item, enhancement: enhancement + 1}
  } else if (enhancement == 20) {
     return { ...item };
  }

}

function fail(item) {

  const {enhancement, durability} = item;

  if (enhancement < 15 && enhancement > -1) {
    return {...item, durability: durability - 5}
  } else if (enhancement > 16 && enhancement < 20 ) {
  return {...item, durability: durability - 10, enhancement: enhancement -1} 
  }
  else if (enhancement >= 15 && enhancement < 20) {
    return {...item, durability: durability - 10} 
  } 
}

function repair(item) {
  const {durability} = item;

  if (durability < 100) {
    return { ...item, durability: 100};
  }
}

function get(item) {

  const {name, enhancement} = item;

   if (enhancement > 0 && enhancement < 20) {
    return { ...item, name: `[+${enhancement}]${name}`};
  }
  else if (enhancement == 0 ) {
    return { ...item };
  } 
 
}
