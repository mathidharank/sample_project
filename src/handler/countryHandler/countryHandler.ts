import { MembersDatabaseCommunicator } from "../../controllers/membersDatabaseCommunicator/membersDatabaseCommunicator";

export default class CountryHandler {

    constructor(private membersDatabaseCommunicator: MembersDatabaseCommunicator) { }

    public async getAllCountryList() {
        return await this.membersDatabaseCommunicator.getAllMembers();
    }
}