// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// pragma solidity ^0.5.16;

contract SmartCrowd {
    uint256 public userCount = 0;

    struct User {
        uint256 id;
        string user_name;
        string name;
        string identity_number;
        string email;
        string user_type;
        //address user_address;
    }

    User[] private userList;

    mapping(uint256 => User) public users;
    event PrintAllWorkers(
        string user_name,
        string name,
        string identity_number,
        string email
    );

    function registerUser(
        uint256 id,
        string memory user_name,
        string memory name,
        string memory identity_number,
        string memory email,
        string memory user_type
    ) public {
        require(id > 0);
        require(bytes(user_name).length > 0);
        require(bytes(name).length > 0);
        require(bytes(identity_number).length > 0);
        require(bytes(email).length > 0);
        require(bytes(user_type).length > 0);
        users[id] = User(
            id,
            user_name,
            name,
            identity_number,
            email,
            user_type
        );
        userList.push(users[id]);
        userCount++;
    }

    function deleteUser(string memory user_name) public {
        require(bytes(user_name).length > 0);
        for (uint256 i = 0; i < userList.length; i++) {
            if (compareStrings(userList[i].user_name, user_name)) {
                delete users[users[i].id];

                userCount--;
                break;
            }
        }
    }

    function ShowAllWorkers() public {
        for (uint256 i = 0; i <= userCount; i++) {
            if (compareStrings(users[i].user_type, "Worker")) {
                emit PrintAllWorkers(
                    users[i].user_name,
                    users[i].name,
                    users[i].identity_number,
                    users[i].email
                );
            }
        }
    }

    function ShowAllRequesters() public {
        for (uint256 i = 0; i <= userCount; i++) {
            if (compareStrings(users[i].user_type, "Requester")) {
                emit PrintAllWorkers(
                    users[i].user_name,
                    users[i].name,
                    users[i].identity_number,
                    users[i].email
                );
            }
        }
    }

    function verifyCNIC(string memory cnic) public view returns (bool) {
        require(verifyCNICAction(cnic));
        return true;
    }

    function verifyCNICAction(string memory cnic) public view returns (bool) {
        for (uint256 i = 1; i < userCount; i++) {
            if (compareStrings(users[i].identity_number, cnic)) {
                return true;
            }
        }
        return false;
    }

    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
}
