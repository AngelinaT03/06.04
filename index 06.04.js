var City1 = {
    name: "ГородN",
    население: 10000000
}
var City2 = {
    name: "ГородМ",
    население: 1e6
}
функция getName() { возвращает this.name; }

функция Экспорт() {
    верните this.name + '\n' + 'population=' + this.npopulation + '\n';
}

console.log(City1);
console.log(City2);