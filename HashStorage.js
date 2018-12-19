"use strict";

function THashStorage(key, value) {
    var self = this;
    self.key = key;
    self.value = value;

    self.HashStorage = {};

    self.AddValue = function(key, value) {
        self.HashStorage[key] = value;
    };

    self.GetValue = function(key) {
        if (key in self.HashStorage) {
            return self.HashStorage[key];
        } else {
            return undefined;
        }
    };

    self.DeleteValue = function(key) {
        if (key in self.HashStorage) {
            delete self.HashStorage[key];
            return true;
        } else {
            return false;
        }
    };

    self.GetKeys = function() {
        var keys = [];
        for (var key in self.HashStorage) {
            keys.push(key);
        }

        return keys;
    }

}

var DrinkStorage = new THashStorage();

var drinkName = document.getElementById("drinkName");

drinkName.onclick = function() {
    var keyP = prompt("Напишите название напитка");
    var valueC = {};

    valueC.alcohol = confirm(keyP + " - Напиток алкогольный или безалкогольный?\nok - алкогольный\nотмена - безалкогольный");
    valueC.recipe = prompt("Напишите рецепт напитка - " + keyP);
    DrinkStorage.AddValue(keyP, valueC);
};

var drinkInfo = document.getElementById("drinkInfo");

drinkInfo.onclick = function() {
    var drinkInf = prompt("Напишите название напитка");
    var drinkInfoP = document.getElementById("drinkInfoP");

    var answer = DrinkStorage.GetValue(drinkInf);

    if (DrinkStorage.GetValue(drinkInf) !== undefined) {
        drinkInfoP.innerHTML = "Напиток: " + drinkInf +
            "<br>" + "Алкогольный: " + (answer.alcohol === true ? "да" : "нет") +
            "<br>" + "Рецепт приготовления: " + (answer.recipe ? answer.recipe : "К  сожалению такого РЕЦЕПТА НЕТ");
    } else {
        drinkInfoP.innerHTML = "В хранилище такой напиток ОТСУТСТВУЕТ!";
    }
};

var drinkInfoDel = document.getElementById("drinkInfoDel");

drinkInfoDel.onclick = function() {
    var drinkInfoDel = prompt("Напишите название напитка");
    var drinkInfoP = document.getElementById("drinkInfoP");

    if (DrinkStorage.DeleteValue(drinkInfoDel) === true) {
        drinkInfoP.innerHTML = "Информация о напитке УДАЛЕНА!";
    } else {
        drinkInfoP.innerHTML = "В хранилище такой напиток ОТСУТСТВУЕТ!";
    }

};

var drinkList = document.getElementById("drinkList");

drinkList.onclick = function() {
    var drinkInfoP = document.getElementById("drinkInfoP");
    drinkInfoP.innerHTML = DrinkStorage.GetKeys();
};

