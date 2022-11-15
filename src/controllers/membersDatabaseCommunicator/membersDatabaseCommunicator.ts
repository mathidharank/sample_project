import { MysqlError, PoolConnection } from "mysql";
import pool from "../../db-configuration/databaseConfiguration";


export class MembersDatabaseCommunicator {

    async register(data: any) {

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
            pool.getConnection((error: MysqlError, connection: PoolConnection) => {
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

                connection.query(query, (error: any, result: any) => {
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

    }

    async getAllMembers() {
        return new Promise((resolve, reject) => {
            pool.getConnection((error: MysqlError, connection: PoolConnection) => {
                if (error) {
                    console.error(error);
                    reject({ error: 'Connection Error Occurred' });
                    return;
                }

                const query = 'SELECT * FROM persons ORDER BY id DESC;';

                connection.query(query, (error: any, result: any) => {
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
    }

    async getMemberByID(id: any) {
        return new Promise((resolve, reject) => {
            pool.getConnection((error: MysqlError, connection: PoolConnection) => {
                if (error) {
                    console.error(error);
                    reject({ error: 'Connection Error Occurred' });
                    return;
                }

                const query = `SELECT * FROM persons WHERE id = ${id};`;

                connection.query(query, (error: any, result: any) => {
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
    }

}