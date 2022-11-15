import { MembersDatabaseCommunicator } from "../../controllers/membersDatabaseCommunicator/membersDatabaseCommunicator";

export class MembersHandler {
    constructor(private membersDatabaseCommunicator: MembersDatabaseCommunicator) {
    }

    public async register(body: any) {
        const personPkId = await this.membersDatabaseCommunicator.register(body);
        return personPkId;
    }

    public async getAllMembers() {
        return await this.membersDatabaseCommunicator.getAllMembers();
    }

    public async getMemberByID(id: any) {
        return await this.membersDatabaseCommunicator.getMemberByID(id);
    }

}
