webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthResponse; });
var AuthResponse = /** @class */ (function () {
    function AuthResponse() {
    }
    return AuthResponse;
}());

//# sourceMappingURL=authResponse.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enumAuthResponse; });
var enumAuthResponse;
(function (enumAuthResponse) {
    enumAuthResponse[enumAuthResponse["None"] = 0] = "None";
    enumAuthResponse[enumAuthResponse["Success"] = 1] = "Success";
    enumAuthResponse[enumAuthResponse["Failed"] = 2] = "Failed";
    enumAuthResponse[enumAuthResponse["InvalidLoginOrPassword"] = 3] = "InvalidLoginOrPassword";
})(enumAuthResponse || (enumAuthResponse = {}));
//# sourceMappingURL=enumAuthResponse.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_SQLite__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */

/* Database */

var IncidenceProvider = /** @class */ (function () {
    function IncidenceProvider(database) {
        this.database = database;
    }
    IncidenceProvider.prototype.insertIncidence = function (incidence) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'insert into Incidence (Name, UniqueId) values (?, ?)';
            var data = [incidence.Name, incidence.UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceProvider.prototype.updateIncidence = function (incidence) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'update Incidence set Name = ? where UniqueId = ?';
            var data = [incidence.Name, incidence.UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceProvider.prototype.deleteIncidence = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'delete from Incidence where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceProvider.prototype.getIncidenceByUniqueId = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from Incidence where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .then(function (data) {
                return data.rows.length;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceProvider.prototype.getIncidences = function () {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from Incidence';
            return db.executeSql(sql, null)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var Incidences = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var Incidence = data.rows.item(i);
                        Incidences.push(Incidence);
                    }
                    return Incidences;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_SQLite__["a" /* SQLiteProvider */]])
    ], IncidenceProvider);
    return IncidenceProvider;
}());

//# sourceMappingURL=incidenceProvider.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenceTypeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_SQLite__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */

/* Database */

var IncidenceTypeProvider = /** @class */ (function () {
    function IncidenceTypeProvider(database) {
        this.database = database;
    }
    IncidenceTypeProvider.prototype.insertIncidenceType = function (incidenceType) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'insert into IncidenceType (Name, UniqueId, IncidenceName, IncidenceUniqueId) values (?, ?, ?, ?)';
            var data = [incidenceType.Name, incidenceType.UniqueId, incidenceType.IncidenceName, incidenceType.IncidenceUniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceTypeProvider.prototype.updateIncidenceType = function (incidenceType) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'update IncidenceType set Name = ?, IncidenceName = ?, IncidenceUniqueId = ? where UniqueId = ?';
            var data = [incidenceType.Name, incidenceType.IncidenceName, incidenceType.IncidenceUniqueId, incidenceType.UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceTypeProvider.prototype.deleteIncidenceType = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'delete from IncidenceType where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceTypeProvider.prototype.getIncidenceTypeByUniqueId = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from IncidenceType where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .then(function (data) {
                return data.rows.length;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceTypeProvider.prototype.getIncidenceTypeByIncidenceUniqueId = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from IncidenceType where IncidenceUniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .then(function (data) {
                console.log(data.rows);
                if (data.rows.length > 0) {
                    var IncidenceTypes = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var IncidenceType = data.rows.item(i);
                        IncidenceTypes.push(IncidenceType);
                    }
                    console.log(IncidenceTypes);
                    return IncidenceTypes;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceTypeProvider.prototype.getIncidenceTypes = function () {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from IncidenceType';
            return db.executeSql(sql, null)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var IncidenceTypes = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var IncidenceType = data.rows.item(i);
                        IncidenceTypes.push(IncidenceType);
                    }
                    return IncidenceTypes;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    IncidenceTypeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_SQLite__["a" /* SQLiteProvider */]])
    ], IncidenceTypeProvider);
    return IncidenceTypeProvider;
}());

//# sourceMappingURL=incidenceTypeProvider.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_SQLite__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */

/* Database */

var CurrencyProvider = /** @class */ (function () {
    function CurrencyProvider(database) {
        this.database = database;
    }
    CurrencyProvider.prototype.insertCurrency = function (currency) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'insert into Currency (Id,Name, Initials, Symbol, LastCurrencyQuotationBid, LastCurrencyQuotationOffer, UniqueId) values (?, ?, ?, ?, ?, ?, ?)';
            var data = [currency.Id, currency.Name, currency.Initials, currency.Symbol, currency.LastCurrencyQuotationBid, currency.LastCurrencyQuotationOffer, currency.UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    CurrencyProvider.prototype.updateCurrency = function (currency) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'update Currency set Name = ?, Initials = ?, Symbol = ?,  LastCurrencyQuotationBid = ?, LastCurrencyQuotationOffer = ? where UniqueId = ?';
            var data = [currency.Name, currency.Initials, currency.Symbol, currency.LastCurrencyQuotationBid, currency.LastCurrencyQuotationOffer, currency.UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    CurrencyProvider.prototype.deleteCurrency = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'delete from Currency where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    CurrencyProvider.prototype.getCurrencyByUniqueId = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from Currency where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .then(function (data) {
                return data.rows.length;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    CurrencyProvider.prototype.getCurrencies = function () {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from Currency';
            return db.executeSql(sql, null)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var Currencies = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var Currency = data.rows.item(i);
                        Currencies.push(Currency);
                    }
                    return Currencies;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    CurrencyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_SQLite__["a" /* SQLiteProvider */]])
    ], CurrencyProvider);
    return CurrencyProvider;
}());

//# sourceMappingURL=currencyProvider.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimTimeSheetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_SQLite__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */

/* Database */


var ClaimTimeSheetProvider = /** @class */ (function () {
    function ClaimTimeSheetProvider(database, alertController) {
        this.database = database;
    }
    ClaimTimeSheetProvider.prototype.insertClaimTimeSheet = function (claimTimeSheet) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'insert into ClaimTimeSheet (CurrencyId, UniqueId,ClaimUniqueId,HasCashFlow,IncidenceName,IncidenceUniqueId,IncidenceTypeName,IncidenceTypeUniqueId,CreateDate,StartDate,EndDate,TimeSpentMinute,FeesGenerated,FeesToGenerate,Observation,HasCollection) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            var data = [claimTimeSheet.CurrencyId,
                claimTimeSheet.UniqueId,
                claimTimeSheet.ClaimUniqueId,
                claimTimeSheet.HasCashFlow,
                claimTimeSheet.IncidenceName,
                claimTimeSheet.IncidenceUniqueId,
                claimTimeSheet.IncidenceTypeName,
                claimTimeSheet.IncidenceTypeUniqueId,
                claimTimeSheet.CreateDate,
                claimTimeSheet.StartDate,
                claimTimeSheet.EndDate,
                claimTimeSheet.TimeSpentMinute,
                claimTimeSheet.FeesGenerated,
                claimTimeSheet.FeesToGenerate,
                claimTimeSheet.Observation,
                claimTimeSheet.HasCollection];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimTimeSheetProvider.prototype.updateClaimTimeSheet = function (claimTimeSheet) {
        console.log(claimTimeSheet);
        return this.database.getDB()
            .then(function (db) {
            var sql = 'update ClaimTimeSheet set CurrencyId = ?,ClaimUniqueId = ?, HasCashFlow = ?, IncidenceName = ?, IncidenceUniqueId = ?, IncidenceTypeName = ?, IncidenceTypeUniqueId = ?, CreateDate = ?, StartDate = ?, EndDate = ?,  TimeSpentMinute = ?, FeesGenerated = ?, FeesToGenerate = ?, Observation = ?, HasCollection = ? where UniqueId = ?';
            var data = [claimTimeSheet.CurrencyId, claimTimeSheet.ClaimUniqueId, claimTimeSheet.HasCashFlow, claimTimeSheet.IncidenceName, claimTimeSheet.IncidenceUniqueId, claimTimeSheet.IncidenceTypeName, claimTimeSheet.IncidenceTypeUniqueId, claimTimeSheet.CreateDate, claimTimeSheet.StartDate, claimTimeSheet.EndDate, claimTimeSheet.TimeSpentMinute, claimTimeSheet.FeesGenerated, claimTimeSheet.FeesToGenerate, claimTimeSheet.Observation, claimTimeSheet.HasCollection, claimTimeSheet.UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimTimeSheetProvider.prototype.deleteClaimTimeSheet = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'delete from ClaimTimeSheet where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimTimeSheetProvider.prototype.getClaimTimeSheetByUniqueId = function (UniqueId) {
        console.log(UniqueId);
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from ClaimTimeSheet where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .then(function (data) {
                return data.rows.length;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimTimeSheetProvider.prototype.getClaimTimeSheets = function () {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from ClaimTimeSheet';
            return db.executeSql(sql, null)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var ClaimTimeSheets = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var ClaimTimeSheet = data.rows.item(i);
                        ClaimTimeSheets.push(ClaimTimeSheet);
                    }
                    return ClaimTimeSheets;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimTimeSheetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_SQLite__["a" /* SQLiteProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ClaimTimeSheetProvider);
    return ClaimTimeSheetProvider;
}());

//# sourceMappingURL=claimTimeSheetProvider.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_login__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_authResponse__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_enumAuthResponse__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_claim_claim__ = __webpack_require__(210);
/* Angular */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Services */

/* Models */



/* Native */

/* Views */

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingController, alertController, authService, storage) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.authService = authService;
        this.storage = storage;
        this.splash = true;
        this.login = new __WEBPACK_IMPORTED_MODULE_3__models_login__["a" /* Login */]();
        this.authResponse = new __WEBPACK_IMPORTED_MODULE_4__models_authResponse__["a" /* AuthResponse */]();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.clear();
        setTimeout(function () {
            _this.splash = false;
        }, 4000);
    };
    LoginPage.prototype.signIn = function () {
        var blockUi = this.loadingController.create({
            spinner: 'ios',
            duration: 2000
        });
        var alert = this.alertController.create({
            buttons: ['Ok']
        });
        blockUi.present();
        this.authResponse = this.authService.authenticate(this.login);
        if (this.authResponse.TypeResponse != __WEBPACK_IMPORTED_MODULE_5__models_enumAuthResponse__["a" /* enumAuthResponse */].Success) {
            alert.setMessage("Usuário ou senha invalidos!");
            alert.present();
            blockUi.dismiss();
        }
        else {
            alert.setMessage("Uhuuul! Login realizado com sucesso!");
            alert.present();
            this.storage.set('UserInfo', this.authResponse.DataResult);
            console.log(this.login);
            this.storage.set('Login', this.login);
            blockUi.dismiss();
            this.storage.get('UserInfo').then(function (response) {
            });
            this.storage.get('Login').then(function (response) {
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_claim_claim__["a" /* ClaimPage */]);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\pages\login\login.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top"></div>\n\n    <img src="./assets/imgs/logo3.png">\n\n    <div class="Aligner-item Aligner-item--bottom"></div>\n\n  </div>\n\n</div>\n\n\n\n<ion-content>\n\n  <img class="img-logo" src="./assets/imgs/logo3.png">\n\n  \n\n  <h1 class="tituloLogin">General Claims</h1>\n\n  <ion-item>\n\n    <ion-label color="white" stacked> Usuário </ion-label>\n\n    <ion-input type="text" [(ngModel)]=login.Username></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="white" stacked> Senha </ion-label>\n\n    <ion-input type="password" [(ngModel)]=login.Password></ion-input>\n\n  </ion-item>\n\n  <ion-item class="item-button">\n\n    <button ion-button class="btn-default"  (click)=\'signIn()\'> Entrar </button>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\pages\login\login.html"*/,
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__pages_claim_claim__["a" /* ClaimPage */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_urlBase__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Models */

/* Native */
//import { Storage } from '@ionic/storage';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.url = new __WEBPACK_IMPORTED_MODULE_2__models_urlBase__["a" /* UrlBase */]().getBaseURL();
        this.header.append('Access-Control-Allow-Origin', '*');
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.header.append('Accept', 'application/json');
        this.header.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.header,
        });
    }
    AuthService.prototype.authenticate = function (data) {
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": {
                "ResultType": 0,
                "userInfoAuthToken": "2f647676-803a-43f6-8a5e-63962ae1ea2d",
                "userInfoUniqueId": "d5c1b34b-9172-4502-9843-deb08120a770",
                "userInfoDisplayName": "Luis Felipe Dutra",
                "userInfoPersonDisplayName": "Luis Felipe Dutra",
                "userType": "Employee",
                "jwtToken": null
            },
            "Message": null,
            "Errors": null
        };
        //return this.http.post(this.url,data, this.options);
        return json;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authService.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_claim_modal_claimModal__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_claimProvider__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__claim_time_sheet_claim_time_sheet__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Components */

/* Providers */

/* Views */

/* Native */


var ClaimPage = /** @class */ (function () {
    function ClaimPage(navCtrl, storage, network, alertController, modalController, claimProvider, toastController, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.network = network;
        this.alertController = alertController;
        this.modalController = modalController;
        this.claimProvider = claimProvider;
        this.toastController = toastController;
        this.events = events;
        this.claims = [];
        this.conection = "";
        this.alert = this.alertController.create();
        this.events.subscribe('getClaims', function () {
            _this.getClaims();
        });
    }
    ClaimPage.prototype.ionViewDidLoad = function () {
        this.getClaims();
        // var userInfo = this.storage.get('UserInfo');
        // var login = this.storage.get('Login');
    };
    ClaimPage.prototype.showClaimModal = function () {
        var profileModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__components_claim_modal_claimModal__["a" /* ClaimModalComponent */]);
        profileModal.present();
    };
    ClaimPage.prototype.getClaims = function () {
        var _this = this;
        return this.claimProvider.getClaims().then(function (result) {
            _this.claims = result;
        });
    };
    ClaimPage.prototype.redirectClaimTimeSheet = function (UniqueId, ClaimCode) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__claim_time_sheet_claim_time_sheet__["a" /* ClaimTimeSheetPage */], { UniqueID: UniqueId, ClaimCode: ClaimCode });
    };
    ClaimPage.prototype.synchronize = function (event) {
        if (this.network.type == "none") {
            this.conection = "Sem conexão com a internet";
            setTimeout(function () {
                event.complete();
            }, 3000);
        }
        else {
            this.conection = "Sincronizando no " + this.network.type + ".";
            setTimeout(function () {
                event.complete();
            }, 3000);
        }
    };
    ClaimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-claim',template:/*ion-inline-start:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\pages\claim\claim.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Meus Sinistros\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="synchronize($event)">\n\n      <ion-refresher-content\n\n        pullingIcon="arrow-dropdown"\n\n        closeDuration="5"\n\n        refreshingSpinner="bubbles"\n\n        [refreshingText]="conection">\n\n      </ion-refresher-content>\n\n    </ion-refresher>\n\n  <ion-list>\n\n    <claim-card\n\n      *ngFor="let claim of claims"\n\n      (click)="redirectClaimTimeSheet(claim.UniqueId, claim.ClaimCode)"\n\n      [ClaimCode] = "claim.ClaimCode"\n\n      [InsuredSubmitDate] = "claim.InsuredSubmitDate"\n\n      [UniqueId]="claim.UniqueId">\n\n    </claim-card>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n\n\n<ion-footer no-shadow>\n\n    <ion-fab bottom right >\n\n        <button ion-fab (click)="showClaimModal()"> <ion-icon name="add"></ion-icon> </button>\n\n    </ion-fab>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\pages\claim\claim.html"*/,
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__claim_time_sheet_claim_time_sheet__["a" /* ClaimTimeSheetPage */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_claimProvider__["a" /* ClaimProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ClaimPage);
    return ClaimPage;
}());

//# sourceMappingURL=claim.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_claimService__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_authResponse__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_enumAuthResponse__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_claimProvider__ = __webpack_require__(55);
/* Angular */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Services */

/* Models */


/* Providers */

var ClaimModalComponent = /** @class */ (function () {
    function ClaimModalComponent(navCtrl, modalController, alertController, loadingController, viewController, claimService, claimProvider, toastController, events) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.viewController = viewController;
        this.claimService = claimService;
        this.claimProvider = claimProvider;
        this.toastController = toastController;
        this.events = events;
        this.authResponse = new __WEBPACK_IMPORTED_MODULE_3__models_authResponse__["a" /* AuthResponse */]();
        this.claimCode = "";
    }
    ClaimModalComponent.prototype.ionViewDidLoad = function () {
    };
    ClaimModalComponent.prototype.getClaimByClaimCode = function () {
        var _this = this;
        this.authResponse = this.claimService.getClaim(this.claimCode);
        var blockUi = this.loadingController.create({
            spinner: 'ios',
            duration: 2000
        });
        var toast = this.toastController.create({
            duration: 2000,
            position: 'bottom'
        });
        if (this.authResponse.TypeResponse != __WEBPACK_IMPORTED_MODULE_4__models_enumAuthResponse__["a" /* enumAuthResponse */].Success) {
            toast.setMessage("Processo não encontrado.");
            toast.present();
            blockUi.dismiss();
        }
        else {
            return this.claimProvider.getClaimByUniqueId(this.authResponse.DataResult.UniqueId).then(function (result) {
                if (result > 0) {
                    toast.setMessage("O processo já está em sua lista.");
                    toast.present();
                    blockUi.dismiss();
                }
                else {
                    _this.insertClaim(_this.authResponse.DataResult).then(function () {
                        toast.setMessage("Processo adicionado com sucesso.");
                        toast.present();
                        blockUi.dismiss();
                        _this.dismiss();
                        _this.events.publish('getClaims', "");
                    });
                }
            });
        }
    };
    ClaimModalComponent.prototype.dismiss = function () {
        this.viewController.dismiss();
    };
    ClaimModalComponent.prototype.insertClaim = function (data) {
        return this.claimProvider.insertClaim(data);
    };
    ClaimModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'component-claim-modal',template:/*ion-inline-start:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\components\claim-modal\claimModal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Adicionar Sinistro \n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button (click)="dismiss()"> Fechar </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-content>\n\n \n\n    <ion-item>\n\n      <ion-label color="primary" stacked> Código do Sinistro </ion-label>\n\n      <ion-input type="text" [(ngModel)]=claimCode></ion-input>\n\n    </ion-item>\n\n    <ion-item class="item-button">\n\n        <button ion-button class="btn-default" (click)=\'getClaimByClaimCode()\'> Adicionar </button>\n\n    </ion-item>\n\n    \n\n  \n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\components\claim-modal\claimModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_claimService__["a" /* ClaimService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_claimProvider__["a" /* ClaimProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ClaimModalComponent);
    return ClaimModalComponent;
}());

//# sourceMappingURL=claimModal.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_urlBase__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Models */

/* Native */
//import { Storage } from '@ionic/storage';
var ClaimService = /** @class */ (function () {
    function ClaimService(http) {
        this.http = http;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.url = new __WEBPACK_IMPORTED_MODULE_2__models_urlBase__["a" /* UrlBase */]().getBaseURL();
        this.header.append('Access-Control-Allow-Origin', '*');
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.header.append('Accept', 'application/json');
        this.header.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.header,
        });
    }
    ClaimService.prototype.getClaim = function (data) {
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": {
                "LossDate": "2015-10-22T00:00:00",
                "InsuredSubmitDate": "2015-10-27T21:00:00",
                "ReceivedDate": "2015-10-27T21:00:00",
                "UniqueId": "67fba1b4-aa71-4970-9f13-3f4be75998b1",
                "ClaimCode": "201510MF023",
                "OperationName": null,
                "CoverageName": null,
                "InsuranceName": null,
                "InsuranceNumber": "01.96.15.01705",
                "SponsorName": null,
                "ProductName": null,
                "InsuredName": null,
                "BrokerName": null,
                "BrokerContactName": null,
                "LastSituationName": null,
                "AdjusterName": null,
                "HasDocumentToReceive": false,
                "ClaimRequestDocuments": []
            },
            "Message": null,
            "Errors": null
        };
        //return this.http.post(this.url,data, this.options);
        return json;
    };
    ClaimService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ClaimService);
    return ClaimService;
}());

//# sourceMappingURL=claimService.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimTimeSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_claim_time_sheet_modal_claim_time_sheet_modal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_claimTimeSheetProvider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_incidenceProvider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_incidenceTypeProvider__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_currencyProvider__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_claimTimeSheetService__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_incidenceService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_incidenceTypeService__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_currencyService__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_authResponse__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_enumAuthResponse__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */



/* Providers */




/* Services */




/* Models */


var ClaimTimeSheetPage = /** @class */ (function () {
    function ClaimTimeSheetPage(navCtrl, alertController, modalController, toastController, loadingController, currencyProvider, currencyService, claimTimeSheetProvider, incidenceProvider, incidenceTypeProvider, incidenceTypeService, incidenceService, claimTimeSheetService, navParams, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.currencyProvider = currencyProvider;
        this.currencyService = currencyService;
        this.claimTimeSheetProvider = claimTimeSheetProvider;
        this.incidenceProvider = incidenceProvider;
        this.incidenceTypeProvider = incidenceTypeProvider;
        this.incidenceTypeService = incidenceTypeService;
        this.incidenceService = incidenceService;
        this.claimTimeSheetService = claimTimeSheetService;
        this.navParams = navParams;
        this.events = events;
        this.claimTimeSheets = [];
        this.incidences = [];
        this.incidenceTypes = [];
        this.currencies = [];
        this.authResponse = new __WEBPACK_IMPORTED_MODULE_11__models_authResponse__["a" /* AuthResponse */]();
        this.ClaimCode = "";
        this.UniqueId = "";
        this.ClaimCode = navParams.get('ClaimCode');
        this.UniqueId = navParams.get('UniqueId');
        this.events.subscribe('getClaimTimeSheets', function () {
            _this.getClaimTimeSheets();
        });
    }
    ClaimTimeSheetPage.prototype.ionViewDidLoad = function () {
        this.getClaimTimeSheetsApi();
        this.getIncidencesApi();
        this.getIncidenceTypesApi();
        this.getCurrenciesApi();
    };
    ClaimTimeSheetPage.prototype.getCurrenciesApi = function () {
        var _this = this;
        this.authResponse = this.currencyService.getCurrencies();
        var blockUi = this.loadingController.create({
            spinner: 'ios',
            duration: 2000
        });
        if (this.authResponse.TypeResponse == __WEBPACK_IMPORTED_MODULE_12__models_enumAuthResponse__["a" /* enumAuthResponse */].Success) {
            var toast = this.toastController.create({
                duration: 2000,
                position: 'bottom'
            });
            var _loop_1 = function () {
                var result = this_1.authResponse.DataResult[i];
                this_1.getCurrencyByUniqueId(this_1.authResponse.DataResult[i].UniqueId).then(function (response) {
                    if (response == 0) {
                        _this.insertCurrency(result).then(function (retorno) {
                        });
                    }
                    else {
                        _this.updateCurrency(result);
                    }
                }).then(function () {
                    _this.getCurrencies();
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.authResponse.DataResult.length; i++) {
                _loop_1();
            }
        }
    };
    ClaimTimeSheetPage.prototype.getCurrencies = function () {
        var _this = this;
        return this.currencyProvider.getCurrencies().then(function (result) {
            _this.currencies = result;
            console.log(result);
        });
    };
    ClaimTimeSheetPage.prototype.insertCurrency = function (data) {
        return this.currencyProvider.insertCurrency(data);
    };
    ClaimTimeSheetPage.prototype.updateCurrency = function (data) {
        return this.currencyProvider.updateCurrency(data);
    };
    ClaimTimeSheetPage.prototype.getCurrencyByUniqueId = function (data) {
        return this.currencyProvider.getCurrencyByUniqueId(data);
    };
    ClaimTimeSheetPage.prototype.getIncidenceTypesApi = function () {
        var _this = this;
        this.authResponse = this.incidenceTypeService.getIncidenceTypes();
        var blockUi = this.loadingController.create({
            spinner: 'ios',
            duration: 2000
        });
        if (this.authResponse.TypeResponse == __WEBPACK_IMPORTED_MODULE_12__models_enumAuthResponse__["a" /* enumAuthResponse */].Success) {
            var toast = this.toastController.create({
                duration: 2000,
                position: 'bottom'
            });
            var _loop_2 = function () {
                var result = this_2.authResponse.DataResult[i];
                this_2.getIncidenceTypeByUniqueId(this_2.authResponse.DataResult[i].UniqueId).then(function (response) {
                    if (response == 0) {
                        _this.insertIncidenceType(result).then(function (retorno) {
                        });
                    }
                    else {
                        _this.updateIncidenceType(result);
                    }
                }).then(function () {
                    _this.getIncidenceTypes();
                });
            };
            var this_2 = this;
            for (var i = 0; i < this.authResponse.DataResult.length; i++) {
                _loop_2();
            }
        }
    };
    ClaimTimeSheetPage.prototype.getIncidencesApi = function () {
        var _this = this;
        this.authResponse = this.incidenceService.getIncidences();
        var blockUi = this.loadingController.create({
            spinner: 'ios',
            duration: 2000
        });
        if (this.authResponse.TypeResponse == __WEBPACK_IMPORTED_MODULE_12__models_enumAuthResponse__["a" /* enumAuthResponse */].Success) {
            var toast = this.toastController.create({
                duration: 2000,
                position: 'bottom'
            });
            var _loop_3 = function () {
                var result = this_3.authResponse.DataResult[i];
                this_3.getIncidenceByUniqueId(this_3.authResponse.DataResult[i].UniqueId).then(function (response) {
                    if (response == 0) {
                        _this.insertIncidence(result).then(function (retorno) {
                        });
                    }
                    else {
                        _this.updateIncidence(result);
                    }
                }).then(function () {
                    _this.getIncidences();
                });
            };
            var this_3 = this;
            for (var i = 0; i < this.authResponse.DataResult.length; i++) {
                _loop_3();
            }
        }
    };
    ClaimTimeSheetPage.prototype.getIncidenceTypes = function () {
        var _this = this;
        return this.incidenceTypeProvider.getIncidenceTypes().then(function (result) {
            _this.incidenceTypes = result;
            var toast = _this.toastController.create({
                duration: 2000,
                position: 'bottom'
            });
        });
    };
    ClaimTimeSheetPage.prototype.getIncidences = function () {
        var _this = this;
        return this.incidenceProvider.getIncidences().then(function (result) {
            _this.incidences = result;
            var toast = _this.toastController.create({
                duration: 2000,
                position: 'bottom'
            });
        });
    };
    ClaimTimeSheetPage.prototype.showClaimTimeSheetModal = function (data) {
        var claimTimeSheetModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__components_claim_time_sheet_modal_claim_time_sheet_modal__["a" /* ClaimTimeSheetModalComponent */], data);
        claimTimeSheetModal.present();
    };
    ClaimTimeSheetPage.prototype.insertIncidenceType = function (data) {
        return this.incidenceTypeProvider.insertIncidenceType(data);
    };
    ClaimTimeSheetPage.prototype.updateIncidenceType = function (data) {
        return this.incidenceTypeProvider.updateIncidenceType(data);
    };
    ClaimTimeSheetPage.prototype.insertIncidence = function (data) {
        return this.incidenceProvider.insertIncidence(data);
    };
    ClaimTimeSheetPage.prototype.updateIncidence = function (data) {
        return this.incidenceProvider.updateIncidence(data);
    };
    ClaimTimeSheetPage.prototype.getIncidenceByUniqueId = function (data) {
        return this.incidenceProvider.getIncidenceByUniqueId(data);
    };
    ClaimTimeSheetPage.prototype.getIncidenceTypeByUniqueId = function (data) {
        return this.incidenceTypeProvider.getIncidenceTypeByUniqueId(data);
    };
    ClaimTimeSheetPage.prototype.getClaimTimeSheetsApi = function () {
        var _this = this;
        this.authResponse = this.claimTimeSheetService.getClaimTimeSheet(this.UniqueId);
        var blockUi = this.loadingController.create({
            spinner: 'ios',
            duration: 2000
        });
        if (this.authResponse.TypeResponse == __WEBPACK_IMPORTED_MODULE_12__models_enumAuthResponse__["a" /* enumAuthResponse */].Success) {
            var toast = this.toastController.create({
                duration: 2000,
                position: 'bottom'
            });
            var _loop_4 = function () {
                var result = this_4.authResponse.DataResult[i];
                this_4.getClaimTimeSheetByUniqueId(this_4.authResponse.DataResult[i].UniqueId).then(function (response) {
                    if (response == 0) {
                        _this.insertClaimTimeSheet(result).then(function (retorno) {
                        });
                    }
                    else {
                        _this.updateClaimTimeSheet(result);
                    }
                }).then(function () {
                    _this.getClaimTimeSheets();
                });
            };
            var this_4 = this;
            for (var i = 0; i < this.authResponse.DataResult.length; i++) {
                _loop_4();
            }
        }
    };
    ClaimTimeSheetPage.prototype.getClaimTimeSheetByUniqueId = function (data) {
        return this.claimTimeSheetProvider.getClaimTimeSheetByUniqueId(data);
    };
    ClaimTimeSheetPage.prototype.insertClaimTimeSheet = function (data) {
        return this.claimTimeSheetProvider.insertClaimTimeSheet(data);
    };
    ClaimTimeSheetPage.prototype.updateClaimTimeSheet = function (data) {
        return this.claimTimeSheetProvider.updateClaimTimeSheet(data);
    };
    ClaimTimeSheetPage.prototype.getClaimTimeSheets = function () {
        var _this = this;
        return this.claimTimeSheetProvider.getClaimTimeSheets().then(function (result) {
            _this.claimTimeSheets = result;
            console.log(result);
            var toast = _this.toastController.create({
                duration: 2000,
                position: 'bottom'
            });
        });
    };
    ClaimTimeSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-claim-time-sheet',template:/*ion-inline-start:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\pages\claim-time-sheet\claim-time-sheet.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      TS - {{ClaimCode}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <claim-time-sheet-card\n\n      *ngFor="let claimTimeSheet of claimTimeSheets"\n\n      (click)="showClaimTimeSheetModal(claimTimeSheet)"\n\n      [IncidenceTypeName] = "claimTimeSheet.IncidenceTypeName"\n\n      [IncidenceName] = "claimTimeSheet.IncidenceName"\n\n      [TimeSpentMinute] = "claimTimeSheet.TimeSpentMinute"\n\n      [UniqueId]="claimTimeSheet.UniqueId">\n\n    </claim-time-sheet-card>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n\n\n<ion-footer no-shadow>\n\n    <ion-fab bottom right >\n\n        <button ion-fab (click)="showClaimTimeSheetModal()"> <ion-icon name="add"></ion-icon> </button>\n\n    </ion-fab>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\pages\claim-time-sheet\claim-time-sheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_currencyProvider__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_10__services_currencyService__["a" /* CurrencyService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_claimTimeSheetProvider__["a" /* ClaimTimeSheetProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_incidenceProvider__["a" /* IncidenceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_incidenceTypeProvider__["a" /* IncidenceTypeProvider */],
            __WEBPACK_IMPORTED_MODULE_9__services_incidenceTypeService__["a" /* IncidenceTypeService */],
            __WEBPACK_IMPORTED_MODULE_8__services_incidenceService__["a" /* IncidenceService */],
            __WEBPACK_IMPORTED_MODULE_7__services_claimTimeSheetService__["a" /* ClaimTimeSheetService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ClaimTimeSheetPage);
    return ClaimTimeSheetPage;
}());

//# sourceMappingURL=claim-time-sheet.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimTimeSheetModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_incidenceProvider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_incidenceTypeProvider__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currencyProvider__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_claimTimeSheet__ = __webpack_require__(297);
/* Angular */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Providers */



/* Model */

var ClaimTimeSheetModalComponent = /** @class */ (function () {
    function ClaimTimeSheetModalComponent(navCtrl, navParams, currencyProvider, modalController, incidenceProvider, incidenceTypeProvider, alertController, loadingController, viewController, toastController, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currencyProvider = currencyProvider;
        this.modalController = modalController;
        this.incidenceProvider = incidenceProvider;
        this.incidenceTypeProvider = incidenceTypeProvider;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.viewController = viewController;
        this.toastController = toastController;
        this.events = events;
        this.claimCode = "";
        this.currencies = [];
        this.incidences = [];
        this.incidenceTypes = [];
        this.claimTimeSheet = new __WEBPACK_IMPORTED_MODULE_5__models_claimTimeSheet__["a" /* ClaimTimeSheet */]();
        this.getIncidences().then(function () {
            if (navParams.data != undefined && navParams.data != null) {
                _this.claimTimeSheet = navParams.data;
                _this.calculateTime();
            }
        }).then(function () {
            _this.getIncidenceTypesByIncidenceUniqueId();
        });
        this.getCurrencies();
    }
    ClaimTimeSheetModalComponent.prototype.ionViewDidLoad = function () {
        console.log(this.claimTimeSheet);
        console.log(this.incidences);
    };
    ClaimTimeSheetModalComponent.prototype.getIncidences = function () {
        var _this = this;
        return this.incidenceProvider.getIncidences().then(function (result) {
            _this.incidences = result;
        });
    };
    ClaimTimeSheetModalComponent.prototype.getCurrencies = function () {
        var _this = this;
        return this.currencyProvider.getCurrencies().then(function (result) {
            _this.currencies = result;
            console.log(result);
        });
    };
    ClaimTimeSheetModalComponent.prototype.getIncidenceTypesByIncidenceUniqueId = function () {
        var _this = this;
        return this.incidenceTypeProvider.getIncidenceTypeByIncidenceUniqueId(this.claimTimeSheet.IncidenceUniqueId).then(function (result) {
            _this.incidenceTypes = result;
        });
    };
    ClaimTimeSheetModalComponent.prototype.dismiss = function () {
        this.viewController.dismiss();
    };
    ClaimTimeSheetModalComponent.prototype.calculateTime = function () {
        if (this.claimTimeSheet.StartDate != null && this.claimTimeSheet.EndDate != null) {
            this.claimTimeSheet.TimeSpentMinute = undefined;
            this.claimTimeSheet.TimeSpentHourMinute = undefined;
            /* Calcula o campo Duração (Min) */
            var startDate = Date.parse(this.claimTimeSheet.StartDate.toString());
            var endDate = Date.parse(this.claimTimeSheet.EndDate.toString());
            var diffMileseconds = endDate - startDate;
            var minutes = Math.floor((diffMileseconds / 1000) / 60);
            var seconds = minutes * 60;
            this.claimTimeSheet.TimeSpentMinute = minutes;
            var hours = Math.floor(((diffMileseconds / 1000) / 60) / 60);
            /* Calcula o campo Total Lançado (hh:mm) */
            seconds = seconds % 60;
            minutes = minutes % 60;
            if (hours < 9 && minutes > 9) {
                this.claimTimeSheet.TimeSpentHourMinute = "0" + hours.toString() + ':' + minutes.toString();
            }
            else if (hours < 9 && minutes < 9) {
                this.claimTimeSheet.TimeSpentHourMinute = "0" + hours.toString() + ':' + "0" + minutes.toString();
            }
            else if (hours > 9 && minutes < 9) {
                this.claimTimeSheet.TimeSpentHourMinute = hours.toString() + ':' + "0" + minutes.toString();
            }
            else {
                this.claimTimeSheet.TimeSpentHourMinute = hours.toString() + ':' + minutes.toString();
            }
        }
        else {
            this.claimTimeSheet.TimeSpentMinute = undefined;
            this.claimTimeSheet.TimeSpentHourMinute = undefined;
        }
    };
    ClaimTimeSheetModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'component-time-sheet-modal',template:/*ion-inline-start:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\components\claim-time-sheet-modal\claim-time-sheet-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Adicionar/Editar Timesheet\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button (click)="dismiss()"> Fechar </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n  <ion-content>\n\n    <ion-item>\n\n      <ion-label stacked> Incidência </ion-label>\n\n      <ion-select [(ngModel)]="claimTimeSheet.IncidenceUniqueId" (ionChange)="getIncidenceTypesByIncidenceUniqueId()">\n\n        <ion-option *ngFor="let incidence of incidences" [value]="incidence.UniqueId"> {{ incidence.Name }} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked> Tipo de Incidência </ion-label>\n\n      <ion-select [(ngModel)]="claimTimeSheet.IncidenceTypeUniqueId" >\n\n        <ion-option *ngFor="let incidenceType of incidenceTypes" [value]="incidenceType.UniqueId"> {{ incidenceType.Name }} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Data Inicial</ion-label>\n\n      <ion-datetime \n\n        displayFormat="DD/MM/YYYY HH:mm" \n\n        [(ngModel)]="claimTimeSheet.StartDate"\n\n        (ionChange)="calculateTime()"\n\n        doneText="Ok"\n\n        cancelText="Cancelar">\n\n      </ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Data Final</ion-label>\n\n      <ion-datetime \n\n        displayFormat="DD/MM/YYYY HH:mm" \n\n        [(ngModel)]="claimTimeSheet.EndDate"\n\n        (ionChange)="calculateTime()"\n\n        doneText="Ok"\n\n        cancelText="Cancelar">\n\n      </ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Duração(Min)</ion-label>\n\n      <ion-input type="number" [(ngModel)]=claimTimeSheet.TimeSpentMinute disabled="true"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Total Lançado (hh:mm)</ion-label>\n\n      <ion-input type="text" [(ngModel)]=claimTimeSheet.TimeSpentHourMinute disabled="true"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked> Moeda </ion-label>\n\n      <ion-select [(ngModel)]="claimTimeSheet.CurrencyId">\n\n        <ion-option *ngFor="let currency of currencies" [value]="currency.Id"> {{ currency.Name }} </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked> Cobra Cliente? </ion-label>\n\n      <ion-toggle [(ngModel)]="claimTimeSheet.HasCashFlow"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked>Descrição da tarefa</ion-label>\n\n      <ion-textarea \n\n        [(ngModel)]=claimTimeSheet.Observation\n\n        rows="8     ">\n\n      </ion-textarea>\n\n    </ion-item>\n\n    <ion-item class="item-button">\n\n    <button class="btn-default" ion-button> Salvar </button>\n\n  </ion-item>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\components\claim-time-sheet-modal\claim-time-sheet-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currencyProvider__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_incidenceProvider__["a" /* IncidenceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_incidenceTypeProvider__["a" /* IncidenceTypeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ClaimTimeSheetModalComponent);
    return ClaimTimeSheetModalComponent;
}());

//# sourceMappingURL=claim-time-sheet-modal.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimTimeSheetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_urlBase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Models */

/* Native */

var ClaimTimeSheetService = /** @class */ (function () {
    function ClaimTimeSheetService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.url = new __WEBPACK_IMPORTED_MODULE_2__models_urlBase__["a" /* UrlBase */]().getBaseURL();
        this.header.append('Access-Control-Allow-Origin', '*');
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.header.append('Accept', 'application/json');
        this.header.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.header,
        });
    }
    ClaimTimeSheetService.prototype.getClaimTimeSheet = function (data) {
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": [
                {
                    "UniqueId": "324772bb-fd5d-4af7-aedc-64442eaee66b",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Documentos",
                    "IncidenceTypeUniqueId": "04fee9da-afae-4620-82ee-3244b618ec05",
                    "CreateDate": "2016-04-28T11:25:12.83",
                    "StartDate": "2016-02-29T09:00:00",
                    "EndDate": "2016-02-29T10:00:00",
                    "TimeSpentMinute": 60,
                    "FeesGenerated": 250,
                    "FeesToGenerate": 0,
                    "Observation": "Análise documentos e e-mail de reiteração",
                    "HasCollection": true
                },
                {
                    "UniqueId": "eb18f532-b46c-4106-bd1c-b37cf64925b7",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Relatório",
                    "IncidenceTypeUniqueId": "f9707dcc-9219-489b-899c-9bdf01e580f0",
                    "CreateDate": "2016-04-28T11:32:33.543",
                    "StartDate": "2016-04-15T10:00:00",
                    "EndDate": "2016-04-15T15:30:00",
                    "TimeSpentMinute": 330,
                    "FeesGenerated": 1375,
                    "FeesToGenerate": 0,
                    "Observation": "Encerramento do Processo conforme instruções por Decurso de Prazo",
                    "HasCollection": true
                },
                {
                    "UniqueId": "b332d81c-0c29-4b33-8b33-6af308c450ce",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Documentos",
                    "IncidenceTypeUniqueId": "04fee9da-afae-4620-82ee-3244b618ec05",
                    "CreateDate": "2016-04-28T11:42:13.803",
                    "StartDate": "2016-01-13T09:00:00",
                    "EndDate": "2016-01-13T11:30:00",
                    "TimeSpentMinute": 150,
                    "FeesGenerated": 625,
                    "FeesToGenerate": 0,
                    "Observation": "Análise documentos recepcionados e reiteração dos faltantes",
                    "HasCollection": true
                },
                {
                    "UniqueId": "3a14dbcb-f0b7-46d1-9bf6-32db12e1f2d2",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Contatos telefônicos",
                    "IncidenceTypeUniqueId": "4dde8244-7a21-4d7f-995e-7028e3ee1148",
                    "CreateDate": "2016-04-28T11:44:59.3",
                    "StartDate": "2016-02-10T09:00:00",
                    "EndDate": "2016-02-10T09:20:00",
                    "TimeSpentMinute": 20,
                    "FeesGenerated": 83.33333333333325,
                    "FeesToGenerate": 0,
                    "Observation": "Contato com o Segurado Sr. Wlademir para explicações solicitadas em relação aos documentos necessários",
                    "HasCollection": true
                },
                {
                    "UniqueId": "c5e09b77-2bd3-47b8-8a05-22dbaa0820d7",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Documentos",
                    "IncidenceTypeUniqueId": "04fee9da-afae-4620-82ee-3244b618ec05",
                    "CreateDate": "2016-04-28T11:56:00.19",
                    "StartDate": "2016-02-12T09:00:00",
                    "EndDate": "2016-02-12T11:20:00",
                    "TimeSpentMinute": 140,
                    "FeesGenerated": 583.3333333333325,
                    "FeesToGenerate": 0,
                    "Observation": "Análise de novos documentos recepcionados e reiteração de documentos faltantes",
                    "HasCollection": true
                },
                {
                    "UniqueId": "88e0b463-42fd-4c2c-9b56-7e42a58b69c2",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Contatos telefônicos",
                    "IncidenceTypeUniqueId": "4dde8244-7a21-4d7f-995e-7028e3ee1148",
                    "CreateDate": "2016-04-28T12:00:36.187",
                    "StartDate": "2016-02-16T10:00:00",
                    "EndDate": "2016-02-16T10:30:00",
                    "TimeSpentMinute": 30,
                    "FeesGenerated": 125,
                    "FeesToGenerate": 0,
                    "Observation": "Reunião via fone com o Técnico Luiz Carlos da empresa Geratech, responsável pelo equpamento do Segurado",
                    "HasCollection": true
                }
            ],
            "Message": null,
            "Errors": null
        };
        //return this.http.post(this.url,data, this.options);
        return json;
    };
    ClaimTimeSheetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ClaimTimeSheetService);
    return ClaimTimeSheetService;
}());

//# sourceMappingURL=claimTimeSheetService.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_urlBase__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Models */

var IncidenceService = /** @class */ (function () {
    function IncidenceService(http) {
        this.http = http;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.url = new __WEBPACK_IMPORTED_MODULE_2__models_urlBase__["a" /* UrlBase */]().getBaseURL();
        this.header.append('Access-Control-Allow-Origin', '*');
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.header.append('Accept', 'application/json');
        this.header.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.header,
        });
    }
    IncidenceService.prototype.getIncidences = function () {
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": [
                {
                    "UniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "Name": "Serviço Interno"
                },
                {
                    "UniqueId": "1aa419af-fdfa-470d-b784-8da74a372b56",
                    "Name": "Serviço Externo"
                }
            ],
            "Message": null,
            "Errors": null
        };
        //return this.http.post(this.url,data, this.options);
        return json;
    };
    IncidenceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], IncidenceService);
    return IncidenceService;
}());

//# sourceMappingURL=incidenceService.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncidenceTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_urlBase__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Models */

var IncidenceTypeService = /** @class */ (function () {
    function IncidenceTypeService(http) {
        this.http = http;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.url = new __WEBPACK_IMPORTED_MODULE_2__models_urlBase__["a" /* UrlBase */]().getBaseURL();
        this.header.append('Access-Control-Allow-Origin', '*');
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.header.append('Accept', 'application/json');
        this.header.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.header,
        });
    }
    IncidenceTypeService.prototype.getIncidenceTypes = function () {
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": [
                {
                    "UniqueId": "9115c247-45f9-45ef-93bb-e38660dde8cd",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Interno"
                },
                {
                    "UniqueId": "225b7427-dea8-4faf-b2cd-6d9f969e4588",
                    "IncidenceUniqueId": "1aa419af-fdfa-470d-b784-8da74a372b56",
                    "IncidenceName": "Serviço Externo",
                    "Name": "Vistoria"
                },
                {
                    "UniqueId": "04fee9da-afae-4620-82ee-3244b618ec05",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Documentos"
                },
                {
                    "UniqueId": "be063880-7e0d-4231-8d9c-715cce159eba",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Emails"
                },
                {
                    "UniqueId": "4dde8244-7a21-4d7f-995e-7028e3ee1148",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Contatos telefônicos"
                },
                {
                    "UniqueId": "f9707dcc-9219-489b-899c-9bdf01e580f0",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Relatório"
                },
                {
                    "UniqueId": "b5ce35ee-ba48-4372-aeac-9bfcfb42894f",
                    "IncidenceUniqueId": "1aa419af-fdfa-470d-b784-8da74a372b56",
                    "IncidenceName": "Serviço Externo",
                    "Name": "Reunião"
                },
                {
                    "UniqueId": "4465831f-ea3f-47e5-bef0-4f54caa6fb73",
                    "IncidenceUniqueId": "1aa419af-fdfa-470d-b784-8da74a372b56",
                    "IncidenceName": "Serviço Externo",
                    "Name": "Outros"
                }
            ],
            "Message": null,
            "Errors": null
        };
        //return this.http.post(this.url,data, this.options);
        return json;
    };
    IncidenceTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], IncidenceTypeService);
    return IncidenceTypeService;
}());

//# sourceMappingURL=incidenceTypeService.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_urlBase__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Models */

var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        this.http = http;
        this.header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        this.url = new __WEBPACK_IMPORTED_MODULE_2__models_urlBase__["a" /* UrlBase */]().getBaseURL();
        this.header.append('Access-Control-Allow-Origin', '*');
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.header.append('Accept', 'application/json');
        this.header.append('content-type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.header,
        });
    }
    CurrencyService.prototype.getCurrencies = function () {
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": [
                {
                    "Id": 1,
                    "Name": "Real",
                    "Initials": "BRL",
                    "Symbol": "R$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "2beb76b5-0f49-4745-b4be-512c81eb0645",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 2,
                    "Name": "Dolar Americano",
                    "Initials": "USD",
                    "Symbol": "U$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "8afbdfca-c2d6-4074-b33d-3aa2313f956f",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 3,
                    "Name": "Euro",
                    "Initials": "EUR",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "cfe68a08-9255-4e6d-8695-b99563ec8734",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 4,
                    "Name": "Libra esterlina",
                    "Initials": "GBP",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "94f34f94-89cd-4181-ae17-a7ef9a36d771",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 5,
                    "Name": "Franco suiço",
                    "Initials": "CHF",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "51c0664c-a11c-4bc1-9616-f98153958a3a",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 6,
                    "Name": "Coroa Dinamarquesa",
                    "Initials": "DKK",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "d58f344f-41c2-4ea5-93ee-30531b00ee99",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 7,
                    "Name": "Coroa Norueguesa",
                    "Initials": "NOK",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "0acb820c-834e-4b86-890d-39f7cc84ba95",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 8,
                    "Name": "Coroa Sueca",
                    "Initials": "SEK",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "ebcca933-e005-42cc-a7d7-6c4ae14df368",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 9,
                    "Name": "Dolar Australiano",
                    "Initials": "AUD",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "363e66b0-2f3d-4963-81d1-74039e600ab2",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 10,
                    "Name": "Dolar Canadense",
                    "Initials": "CAD",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "93facb9f-262c-41ac-abe4-e0478f5a7794",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 11,
                    "Name": "Iene",
                    "Initials": "JPY",
                    "Symbol": "Y",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "a8173d5c-69dc-469c-aef0-eacb820a8360",
                    "ExtendedProperties": {}
                }
            ],
            "Message": null,
            "Errors": null
        };
        //return this.http.post(this.url,data, this.options);
        return json;
    };
    CurrencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CurrencyService);
    return CurrencyService;
}());

//# sourceMappingURL=currencyService.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_claim_claim__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_claim_time_sheet_claim_time_sheet__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_claim_time_sheet_modal_claim_time_sheet_modal__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_claim_modal_claimModal__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_claim_card_claimCard__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_claim_time_sheet_card_claim_time_sheet_card__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_currencyProvider__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_claimProvider__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_claimTimeSheetProvider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__database_SQLite__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_incidenceProvider__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_incidenceTypeProvider__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_authService__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_claimService__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_claimTimeSheetService__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_currencyService__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_incidenceService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_incidenceTypeService__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_sqlite__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_interceptorService__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_network__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/* Angular */





/* Viwes */



/* Components */




/* Providers */






/* Services */






/* Natives */






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_claim_claim__["a" /* ClaimPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_claim_modal_claimModal__["a" /* ClaimModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_claim_time_sheet_modal_claim_time_sheet_modal__["a" /* ClaimTimeSheetModalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_claim_time_sheet_claim_time_sheet__["a" /* ClaimTimeSheetPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_claim_time_sheet_card_claim_time_sheet_card__["a" /* ClaimTimeSheetCard */],
                __WEBPACK_IMPORTED_MODULE_11__components_claim_card_claimCard__["a" /* ClaimCard */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29__services_interceptorService__["a" /* Interceptor */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_claim_claim__["a" /* ClaimPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_claim_modal_claimModal__["a" /* ClaimModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_claim_time_sheet_modal_claim_time_sheet_modal__["a" /* ClaimTimeSheetModalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_claim_time_sheet_claim_time_sheet__["a" /* ClaimTimeSheetPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_claim_time_sheet_card_claim_time_sheet_card__["a" /* ClaimTimeSheetCard */],
                __WEBPACK_IMPORTED_MODULE_11__components_claim_card_claimCard__["a" /* ClaimCard */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__services_authService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__services_claimService__["a" /* ClaimService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_claimProvider__["a" /* ClaimProvider */],
                __WEBPACK_IMPORTED_MODULE_16__database_SQLite__["a" /* SQLiteProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_incidenceTypeProvider__["a" /* IncidenceTypeProvider */],
                __WEBPACK_IMPORTED_MODULE_22__services_currencyService__["a" /* CurrencyService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_claimTimeSheetProvider__["a" /* ClaimTimeSheetProvider */],
                __WEBPACK_IMPORTED_MODULE_21__services_claimTimeSheetService__["a" /* ClaimTimeSheetService */],
                __WEBPACK_IMPORTED_MODULE_23__services_incidenceService__["a" /* IncidenceService */],
                __WEBPACK_IMPORTED_MODULE_24__services_incidenceTypeService__["a" /* IncidenceTypeService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_currencyProvider__["a" /* CurrencyProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_17__providers_incidenceProvider__["a" /* IncidenceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_SQLite__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Ionic */


/* Views */

/* Databases */

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, database) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            database.createDatabase().then(function () {
                splashScreen.hide();
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__database_SQLite__["a" /* SQLiteProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimTimeSheet; });
var ClaimTimeSheet = /** @class */ (function () {
    function ClaimTimeSheet() {
    }
    return ClaimTimeSheet;
}());

//# sourceMappingURL=claimTimeSheet.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_claimProvider__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Providers */

var ClaimCard = /** @class */ (function () {
    function ClaimCard(claimProvider, loadingController, toastController, events) {
        this.claimProvider = claimProvider;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.events = events;
        this.ClaimCode = "";
    }
    ClaimCard.prototype.deleteClaim = function () {
        var _this = this;
        var blockUi = this.loadingController.create({
            spinner: 'ios',
            duration: 2000
        });
        var toast = this.toastController.create({
            message: 'Processo deletado com sucesso!',
            duration: 2000,
            position: 'bottom'
        });
        blockUi.present();
        return this.claimProvider.deleteClaim(this.UniqueId).then(function () {
            blockUi.dismiss();
            toast.present();
            _this.events.publish('getClaims', "");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("ClaimCode"),
        __metadata("design:type", String)
    ], ClaimCard.prototype, "ClaimCode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("InsuredSubmitDate"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* DateTime */])
    ], ClaimCard.prototype, "InsuredSubmitDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("UniqueId"),
        __metadata("design:type", String)
    ], ClaimCard.prototype, "UniqueId", void 0);
    ClaimCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'claim-card',template:/*ion-inline-start:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\components\claim-card\claimCard.html"*/'<ion-card>\n\n  <ion-card-header>\n\n    <ion-grid no-padding>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          Cód. Sinistro : {{ClaimCode}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          Ins.Date  {{InsuredSubmitDate}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <!-- Add card content here! -->\n\n  </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\components\claim-card\claimCard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_claimProvider__["a" /* ClaimProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ClaimCard);
    return ClaimCard;
}());

//# sourceMappingURL=claimCard.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimTimeSheetCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_claimTimeSheetProvider__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* Providers */

var ClaimTimeSheetCard = /** @class */ (function () {
    function ClaimTimeSheetCard(claimTimeSheetProvider, loadingController, toastController, events) {
        this.claimTimeSheetProvider = claimTimeSheetProvider;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.events = events;
        this.IncidenceName = "";
        this.TimeSpentMinute = "";
    }
    ClaimTimeSheetCard.prototype.deleteClaimTimeSheet = function () {
        var _this = this;
        var blockUi = this.loadingController.create({
            spinner: 'ios',
            duration: 2000
        });
        var toast = this.toastController.create({
            message: 'TimeSheet deletado com sucesso!',
            duration: 2000,
            position: 'bottom'
        });
        blockUi.present();
        console.log(this.UniqueId);
        return this.claimTimeSheetProvider.deleteClaimTimeSheet(this.UniqueId).then(function () {
            blockUi.dismiss();
            toast.present();
            _this.events.publish('getClaimTimeSheets', "");
        });
    };
    ClaimTimeSheetCard.prototype.editClaimTimeSheet = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("IncidenceName"),
        __metadata("design:type", String)
    ], ClaimTimeSheetCard.prototype, "IncidenceName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("IncidenceTypeName"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* DateTime */])
    ], ClaimTimeSheetCard.prototype, "IncidenceTypeName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("UniqueId"),
        __metadata("design:type", String)
    ], ClaimTimeSheetCard.prototype, "UniqueId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("TimeSpentMinute"),
        __metadata("design:type", String)
    ], ClaimTimeSheetCard.prototype, "TimeSpentMinute", void 0);
    ClaimTimeSheetCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'claim-time-sheet-card',template:/*ion-inline-start:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\components\claim-time-sheet-card\claim-time-sheet-card.html"*/'<ion-card>\n\n    <ion-card-header>\n\n      <ion-grid no-padding>\n\n        <ion-row>\n\n          <ion-col col-11>\n\n              IncidenceName :  {{IncidenceName}}\n\n          </ion-col>\n\n          <ion-col col-1 (tap)=\'deleteClaimTimeSheet()\'>\n\n            <ion-icon name="trash"></ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n              IncidenceTypeName : {{IncidenceTypeName}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                TimeSpentHour : {{TimeSpentMinute}}\n\n            </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <!-- Add card content here! -->\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\nilto\Documents\ionic\Gclaims vistoria\IonicTS\src\components\claim-time-sheet-card\claim-time-sheet-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_claimTimeSheetProvider__["a" /* ClaimTimeSheetProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ClaimTimeSheetCard);
    return ClaimTimeSheetCard;
}());

//# sourceMappingURL=claim-time-sheet-card.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpsRequestInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Interceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Angular */


var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor() {
    }
    HttpsRequestInterceptor.prototype.intercept = function (request, next) {
        request.headers.set('Content-Type', 'application/json');
        request.headers.set('AuthenticationToken', "11");
        request.headers.set('UniqueId', "11");
        var dupReq = request.clone({
            headers: request.headers
        });
        return next.handle(dupReq);
    };
    HttpsRequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

var Interceptor = /** @class */ (function () {
    function Interceptor() {
    }
    Interceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: HttpsRequestInterceptor,
                    multi: true,
                },
            ],
        })
    ], Interceptor);
    return Interceptor;
}());

//# sourceMappingURL=interceptorService.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SQLiteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SQLiteProvider = /** @class */ (function () {
    function SQLiteProvider(sqlite) {
        this.sqlite = sqlite;
    }
    /* Cria um banco caso não exista ou pega um banco existente com o nome no parametro */
    SQLiteProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'gclaims.db',
            location: 'default'
        });
    };
    /* Cria a estrutura inicial do banco de dados */
    SQLiteProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            // Criando as tabelas
            _this.createTables(db);
        })
            .catch(function (e) { return console.log(e); });
    };
    /**
     * Criando as tabelas no banco de dados
     * @param db
     */
    SQLiteProvider.prototype.createTables = function (db) {
        // Criando as tabelas
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS Incidence (Name TEXT, UniqueId TEXT)'],
            ['CREATE TABLE IF NOT EXISTS Currency (Id INTEGER, Name TEXT, UniqueId TEXT, Symbol TEXT, LastCurrencyQuotationBid TEXT, LastCurrencyQuotationOffer TEXT, Initials TEXT)'],
            ['CREATE TABLE IF NOT EXISTS IncidenceType (Name TEXT, UniqueId TEXT, IncidenceName TEXT, IncidenceUniqueId TEXT)'],
            ['CREATE TABLE IF NOT EXISTS Claim (Id INTEGER primary key AUTOINCREMENT NOT NULL, InsuredSubmitDate DATETIME, UniqueId TEXT, ClaimCode TEXT, InsuranceNumber TEXT)'],
            ['CREATE TABLE IF NOT EXISTS ClaimTimeSheet (Id INTEGER primary key AUTOINCREMENT NOT NULL, UniqueId TEXT, ClaimUniqueId TEXT, HasCashFlow  NUMERIC, IncidenceName TEXT, IncidenceUniqueId TEXT, IncidenceTypeName TEXT, IncidenceTypeUniqueId TEXT, CreateDate DATETIME, StartDate DATETIME, EndDate DATETIME, TimeSpentMinute INT, FeesGenerated INT, FeesToGenerate INT, Observation TEXT, HasCollection NUMERIC, CurrencyId INT)'],
        ])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    SQLiteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], SQLiteProvider);
    return SQLiteProvider;
}());

//# sourceMappingURL=SQLite.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlBase; });
var UrlBase = /** @class */ (function () {
    function UrlBase() {
        this.UrlBase = "http://localhost:25878/api/Security/Teste2";
    }
    UrlBase.prototype.getBaseURL = function () {
        return this.UrlBase;
    };
    return UrlBase;
}());

//# sourceMappingURL=urlBase.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_SQLite__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */

/* Database */


var ClaimProvider = /** @class */ (function () {
    function ClaimProvider(database, alertController) {
        this.database = database;
    }
    ClaimProvider.prototype.insertClaim = function (claim) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'insert into Claim (ClaimCode, InsuredSubmitDate, InsuranceNumber, UniqueId) values (?, ?, ?, ?)';
            var data = [claim.ClaimCode, claim.InsuredSubmitDate, claim.InsuranceNumber, claim.UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimProvider.prototype.deleteClaim = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'delete from Claim where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimProvider.prototype.getClaimByUniqueId = function (UniqueId) {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from Claim where UniqueId = ?';
            var data = [UniqueId];
            return db.executeSql(sql, data)
                .then(function (data) {
                return data.rows.length;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimProvider.prototype.getClaims = function () {
        return this.database.getDB()
            .then(function (db) {
            var sql = 'select * from Claim';
            return db.executeSql(sql, null)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var Claims = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var Claim = data.rows.item(i);
                        Claims.push(Claim);
                    }
                    return Claims;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    ClaimProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_SQLite__["a" /* SQLiteProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ClaimProvider);
    return ClaimProvider;
}());

//# sourceMappingURL=claimProvider.js.map

/***/ })

},[222]);
//# sourceMappingURL=main.js.map