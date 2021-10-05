function camelize(str) {
let splited = str
.split("-")
.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
.join("");
return splited;
}
camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';
