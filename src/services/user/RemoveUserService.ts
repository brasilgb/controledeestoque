import { RemoveUserRequest } from "../../models/interfaces/user/RemoveUserRequest";
import prismaClient from "../../prisma";


class RemoveUserService {
async execute({user_id}: RemoveUserRequest) {

    if (user_id) {
        const removeUser = await prismaClient.user.delete({
            where: {
                id: user_id
            }
        });
        return removeUser;
    };
}
}

export { RemoveUserService };