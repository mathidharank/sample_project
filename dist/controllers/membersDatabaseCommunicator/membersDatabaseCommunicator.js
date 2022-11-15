"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersDatabaseCommunicator = void 0;
const databaseConfiguration_1 = __importDefault(require("../../db-configuration/databaseConfiguration"));
class MembersDatabaseCommunicator {
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const personInsertData = {
                firstName: data.fullName,
                lastName: '',
                email: data.email,
                mobile: data.mobileNumber,
                dateOfBirth: data.dataOfBirth,
                gender: data.gender,
                blood_group: data.bloodGroup,
                interested_donate_blood: data.interestedDonateBlood,
                city: data.city,
                state: data.state,
                memberType: 'member',
                isActive: true,
                imageBase64textString: data.imageBase64textString
            };
            return new Promise((resolve, reject) => {
                databaseConfiguration_1.default.getConnection((error, connection) => {
                    if (error) {
                        console.error(error);
                        reject({ error: 'Connection Error Occurred' });
                        return;
                    }
                    const query = `INSERT INTO persons (firstName, lastName, email, mobile, ` +
                        `dateOfBirth, gender, blood_group, interested_donate_blood, city, state, memberType, isActive, imageBase64textString) ` +
                        `VALUES ('${personInsertData.firstName}', '${personInsertData.lastName}', '${personInsertData.email}', '${personInsertData.mobile}', ` +
                        `'${personInsertData.dateOfBirth}', '${personInsertData.gender}', '${personInsertData.blood_group}', '${personInsertData.interested_donate_blood}', ` +
                        `'${personInsertData.city}', '${personInsertData.state}', '${personInsertData.memberType}', ` +
                        `${personInsertData.isActive}, '${personInsertData.imageBase64textString}')`;
                    connection.query(query, (error, result) => {
                        if (error) {
                            console.error(error);
                            reject({ error: 'Error Occurred' });
                            return;
                        }
                        connection.release();
                        resolve({ pkId: result.insertId });
                    });
                });
            });
        });
    }
    getAllMembers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                databaseConfiguration_1.default.getConnection((error, connection) => {
                    if (error) {
                        console.error(error);
                        reject({ error: 'Connection Error Occurred' });
                        return;
                    }
                    const query = 'SELECT * FROM persons ORDER BY id DESC;';
                    connection.query(query, (error, result) => {
                        if (error) {
                            console.error(error);
                            reject({ error: 'Error Occurred' });
                            return;
                        }
                        connection.release();
                        resolve({ result });
                    });
                });
            });
        });
    }
    getMemberByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                databaseConfiguration_1.default.getConnection((error, connection) => {
                    if (error) {
                        console.error(error);
                        reject({ error: 'Connection Error Occurred' });
                        return;
                    }
                    const query = `SELECT * FROM persons WHERE id = ${id};`;
                    connection.query(query, (error, result) => {
                        if (error) {
                            console.error(error);
                            reject({ error: 'Error Occurred' });
                            return;
                        }
                        connection.release();
                        resolve({ result });
                    });
                });
            });
        });
    }
}
exports.MembersDatabaseCommunicator = MembersDatabaseCommunicator;
//# sourceMappingURL=membersDatabaseCommunicator.js.map