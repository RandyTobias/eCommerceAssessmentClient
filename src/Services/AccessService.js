
import AuthService from './AuthService';
import UserService from './UserService';
import UserTypeService from './UserTypeService';

class AccessService {

    async getAccessLevelsFromUser(user){
        try {
            const response = await UserService.userGet(user.nameid);
            const userTypeId = response.typeid ? response.typeid : "";
            if (userTypeId !== null && userTypeId !== ""){
                const userType = await UserTypeService.userTypeGet(userTypeId);
                if (userType.accessLevel && userType.accessLevel !== ""){
                    let ACLs = {
                        showCustomerContent: userType.accessLevel === 3,
                        showStaffContent: userType.accessLevel === 2,
                        showAdminContent: userType.accessLevel === 1
                    };

                    return {...ACLs};
                }
            }
        } 
        catch (e) {
            console.log(e);
        }

        return {
            showCustomerContent: false,
            showStaffContent: false,
            showAdminContent: false,
        };
    }

    async getAccessLevels(){
        const user = AuthService.getCurrentUser();
        try {
            const response = await UserService.userGet(user.nameid);
            const userTypeId = response.typeid ? response.typeid : "";
            if (userTypeId && userTypeId !== ""){
                const userType = await UserTypeService.userTypeGet(userTypeId);
                if (userType.accessLevel !== null && userType.accessLevel !== ""){
                    let ACLs = {
                        showCustomerContent: userType.accessLevel === 3,
                        showStaffContent: userType.accessLevel === 2,
                        showAdminContent: userType.accessLevel === 1
                    };

                    console.log("ACLs: ");
                    console.log(ACLs);
                    return {...ACLs};
                }
            }
        } 
        catch (e) {
            console.log(e);
        }

        return {
            showCustomerContent: false,
            showStaffContent: false,
            showAdminContent: false,
        };
    }
}

export default new AccessService();
