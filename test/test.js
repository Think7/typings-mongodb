var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import * as mongodb from 'mongodb';
mongodb.MongoClient.connect('%$#&%*^%^$').then((db) => __awaiter(this, void 0, void 0, function* () {
    let userCollection = db.collection('user');
    let user = yield userCollection.findOne({ name: 'Alex' });
    let users = yield userCollection.find().toArray();
    // Because of generics, the ide know the type of the user is 'User',
    //and is can show the properties after I entered the '.'
    let age = user.age;
    users.forEach(_user => console.log(_user.name));
}));
